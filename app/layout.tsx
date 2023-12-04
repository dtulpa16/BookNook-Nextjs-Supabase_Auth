import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

export const metadata: Metadata = {
  title: "NextjsSupabaseAuth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar/>
        <SearchBar/>
        <div className="p-8">
          <main className="container mx-auto mt-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
