import React from "react";
import Link from "next/link";
import { supabaseServerClient } from "../lib/initSupabase";
import { handleLogout } from "../lib/authActions";

export default async function Navbar() {
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  console.log("USER: ", user);
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center  sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* Brand Name */}
              <Link href="/" className="font-bold text-xl pl-4">
                MyAwesomeApp
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Navigation Links */}
                {/* Add more <Link> elements here for additional navigation for both Authed & Unauthed users*/}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!user ? (
              <>
                {/* If there is no user logged in, Display routes to the login and registration page */}
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/register"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* Show these links if there is a logged in user */}
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/cars"
                >
                  Cars
                </Link>
                <form action={handleLogout}>
                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    type="submit"
                  >
                    Logout
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
