# Lox-Muzik

## Run in VS Code

Open this folder in VS Code and press **F5**. The project starts a local web server and opens the app in the integrated browser. Use this instead of opening `index.html` directly; browsers block the local song files on `file://` pages.

The local server task requires Python.

## Enable shared song uploads

The app stores published songs in Supabase so they can be listed and played by other listeners. In the Supabase project's SQL Editor, run [`supabase/song-library.sql`](./supabase/song-library.sql) once. This creates the song catalog, public media buckets, and access policies used by uploads, playback, and downloads. The app will show a publishing error until this setup has been applied.
