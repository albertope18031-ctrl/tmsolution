import { createClient, SupabaseClient } from "@supabase/supabase-js";

function getValidSupabaseConfig() {
  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  const isMalformed =
    !envUrl ||
    envUrl.includes("[") ||
    envUrl.includes("]") ||
    !envUrl.startsWith("http");

  const url = isMalformed ? "https://tm-solution-demo.supabase.co" : envUrl;
  const key = !envKey || envKey.includes("[") ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy" : envKey;

  return { url, key, isPlaceholder: isMalformed };
}

const { url, key } = getValidSupabaseConfig();

export const supabase: SupabaseClient = createClient(url, key, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
