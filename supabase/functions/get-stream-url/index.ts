// Lox-Muzik Edge Function: get-stream-url
// Returns a short-lived signed URL for a streamable song.
// Call from the client with: supabase.functions.invoke('get-stream-url', { body: { song_id } })

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // 1. Require a valid user JWT
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Missing Authorization header. Sign in required." }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Client scoped to the calling user (respects RLS)
    const supabaseUser = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: { headers: { Authorization: authHeader } },
      }
    );

    // Service-role client for creating signed URLs (bypasses storage RLS safely)
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // 2. Parse request body
    const { song_id, record_play = true } = await req.json();

    if (!song_id || typeof song_id !== "string") {
      return new Response(
        JSON.stringify({ error: "song_id is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 3. Fetch the song and verify it is streamable
    const { data: song, error: songError } = await supabaseUser
      .from("songs")
      .select("id, audio_url, allow_streaming, title, artist")
      .eq("id", song_id)
      .single();

    if (songError || !song) {
      return new Response(
        JSON.stringify({ error: "Song not found or not accessible" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!song.allow_streaming) {
      return new Response(
        JSON.stringify({ error: "This song is not available for streaming" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 4. Extract the storage path from audio_url
    // audio_url is stored as the relative path inside the music-files bucket
    let storagePath = song.audio_url;

    // Clean up in case an old full URL was stored
    const markers = [
      "/storage/v1/object/public/music-files/",
      "/storage/v1/object/sign/music-files/",
      "/storage/v1/object/authenticated/music-files/",
    ];
    for (const marker of markers) {
      const idx = storagePath.indexOf(marker);
      if (idx !== -1) {
        storagePath = storagePath.slice(idx + marker.length).split(/[?#]/)[0];
        break;
      }
    }

    if (!storagePath || storagePath.startsWith("http")) {
      return new Response(
        JSON.stringify({ error: "Invalid audio storage path" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 5. Optionally record the play (uses the existing DB function)
    if (record_play) {
      const { error: playError } = await supabaseUser.rpc("record_song_play", {
        p_song_id: song_id,
      });
      // We intentionally ignore play-recording errors so playback still works
      if (playError) {
        console.warn("Could not record play:", playError.message);
      }
    }

    // 6. Create a signed URL (valid for 1 hour)
    const expiresIn = 60 * 60; // 3600 seconds
    const { data: signed, error: signError } = await supabaseAdmin.storage
      .from("music-files")
      .createSignedUrl(storagePath, expiresIn);

    if (signError || !signed?.signedUrl) {
      console.error("Signed URL error:", signError);
      return new Response(
        JSON.stringify({ error: "Could not create a secure song link" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 7. Success
    return new Response(
      JSON.stringify({
        signedUrl: signed.signedUrl,
        expiresIn,
        song: {
          id: song.id,
          title: song.title,
          artist: song.artist,
        },
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
