import { createClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * We need this client if we are are making requests to an
 * RLS protected database - Allows for cookies to be sent with request.
 */
export const supabaseServerClient = createServerComponentClient({ cookies });

/** Ex
 ** supbase.from("movies").select("*") --> no cookies sent
 ** supabaseServerClient.from("movies").select("*") -- cookies (userid) sent with request
 */
