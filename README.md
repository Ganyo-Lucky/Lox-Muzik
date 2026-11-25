# Lox-Muzik

## Run in VS Code

Open this folder in VS Code and press **F5**. The project starts a local web server and opens the app in the integrated browser. Use this instead of opening `index.html` directly; browsers block the local song files on `file://` pages.

The local server task requires Python.

## Enable shared song uploads

The app stores published songs in Supabase so they can be listed and played by other listeners. In the Supabase project's SQL Editor, run [`supabase/song-library.sql`](./supabase/song-library.sql). Run the updated script when upgrading an existing project: it makes the music bucket private, limits catalog column access, updates its access policies, and installs shared trend tracking and release metadata. The release metadata migration is required before publishing Albums / EPs; the app displays this as a specific setup error if those columns are missing. Public catalog reads omit creator email addresses; signed-in creators load their own songs through the `get_my_songs()` database function. Choose **Album / EP** in Creator Studio to select at least two audio files, name each track, and publish them as one ordered release with shared artwork and release details. The app remembers the signed-in account's role and last main page in that browser, restoring it after refresh without signing the account out. Song playback uses short-lived signed URLs; artist covers remain public. Trends rank songs by unique signed-in listener plays in the last 30 days, counting each listener once per song per UTC day; the chart refreshes periodically. The upload form's streaming, offline, and device-download permissions are honored by the app. A listener who can stream a song can still capture its audio; these permissions are not DRM.

## Edge Function: get-stream-url (recommended)

The app can request signed audio URLs from a Supabase Edge Function instead of creating them directly in the browser. This is more secure and also records the play on the server.

**Deploy the function once:**

```bash
# From the project root (requires Supabase CLI logged in)
supabase functions deploy get-stream-url
```

After deploying, the frontend automatically prefers the Edge Function. If the function is not yet deployed, it falls back to the original client-side signed URL method so nothing breaks.
