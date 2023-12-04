"use server";
import { supabaseServerClient } from "@/app/lib/initSupabase";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

//Login
export const handleLogin = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return;
  }

  const cookieStore = cookies();
  /**
   * The createRouteHandlerClient client logs the user in and stores their UserID
   * as a Cookie. Using the default Supabase Client logs the user in but
   * isnt configured for assigning cookies
   */
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  await supabaseServerClient.auth.refreshSession();
  redirect("/");
};

// Register
export const handleRegister = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return;
  }

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  
  await supabaseServerClient.auth.refreshSession();
  redirect("/");
};

// Logout
export const handleLogout = async () => {
  let cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { error } = await supabase.auth.signOut();
  await supabase.auth.refreshSession();
  redirect("/login");
};
