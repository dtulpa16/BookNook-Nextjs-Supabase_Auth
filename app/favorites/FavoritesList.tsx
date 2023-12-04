import React from "react";
import { Favorite } from "../lib/types";
import Link from "next/link";

type BookCardProps = {
  favorites: Favorite[];
};

export default function FavoritesList({ favorites }: BookCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {favorites.map((el) => (
        <Link
          href={`/details/${el.bookId}`}
          key={el.id}
          className="block bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row items-center p-4">
            <img
              src={el.thumbnail_url}
              alt={el.title}
              className="md:w-1/4 w-full object-cover rounded mb-4 md:mb-0 md:mr-4"
            />
            <div className="w-full md:w-3/4">
              <h1 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                {el.title}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
