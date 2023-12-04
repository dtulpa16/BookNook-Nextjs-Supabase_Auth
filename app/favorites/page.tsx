import React from "react";
import { supabaseServerClient } from "../lib/initSupabase";
import { Favorite } from "../lib/types";
import FavoritesList from "./FavoritesList";

export default async function FavoritesPage() {
  const { data, error } = await supabaseServerClient
    .from("favorites")
    .select("*");
  const favorites = data as Favorite[];
  return (
    <div>
      <FavoritesList favorites={favorites} />
    </div>
  );
}
