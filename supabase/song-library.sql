create table if not exists public.songs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  artist text not null,
  artist_names text[] not null default '{}',
  owner_email text not null,
  upload_source text not null default 'web',
  file_name text not null,
  audio_url text not null,
  cover_url text,
  release_type text not null default 'single'
    check (release_type in ('single', 'album', 'mix')),
  genre text,
  allow_streaming boolean not null default true,
  allow_offline boolean not null default true,
  allow_download_to_phone boolean not null default true,
  allow_video_use boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists songs_created_at_idx on public.songs (created_at desc);
alter table public.songs enable row level security;
grant select on public.songs to anon, authenticated;
grant insert on public.songs to authenticated;

drop policy if exists "Anyone can read streamable songs" on public.songs;
create policy "Anyone can read streamable songs"
  on public.songs for select
  to anon, authenticated
  using (allow_streaming);

drop policy if exists "Creators can read their own songs" on public.songs;
create policy "Creators can read their own songs"
  on public.songs for select
  to authenticated
  using (lower(owner_email) = lower(auth.jwt() ->> 'email'));

drop policy if exists "Creators can publish their own songs" on public.songs;
create policy "Creators can publish their own songs"
  on public.songs for insert
  to authenticated
  with check (lower(owner_email) = lower(auth.jwt() ->> 'email'));

insert into storage.buckets (id, name, public)
values
  ('music-files', 'music-files', true),
  ('artist-covers', 'artist-covers', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Anyone can read Lox Muzik media" on storage.objects;
create policy "Anyone can read Lox Muzik media"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id in ('music-files', 'artist-covers'));

drop policy if exists "Users can upload their own Lox Muzik media" on storage.objects;
create policy "Users can upload their own Lox Muzik media"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id in ('music-files', 'artist-covers')
    and (storage.foldername(name))[1] = trim(
      both '-' from regexp_replace(lower(auth.jwt() ->> 'email'), '[^a-z0-9]+', '-', 'g')
    )
  );

drop policy if exists "Users can remove their own Lox Muzik media" on storage.objects;
create policy "Users can remove their own Lox Muzik media"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id in ('music-files', 'artist-covers')
    and (storage.foldername(name))[1] = trim(
      both '-' from regexp_replace(lower(auth.jwt() ->> 'email'), '[^a-z0-9]+', '-', 'g')
    )
  );
