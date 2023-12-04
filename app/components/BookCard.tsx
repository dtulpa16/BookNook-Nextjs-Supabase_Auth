import React from "react";
import { GoogleBooksApiResponse } from "../lib/types";
import Link from "next/link";

type BookCardProps = {
  books: GoogleBooksApiResponse;
};

export default function BookCard({ books }: BookCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {books.items.map((el) => (
        <Link
          href={`/details/${el.id}`}
          key={el.id}
          className="block p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50"
        >
          <div className="flex">
            <img
              src={el.volumeInfo.imageLinks?.thumbnail}
              alt={el.volumeInfo.title}
              className="w-1/3 object-cover rounded mr-4"
            />
            <div className="w-2/3">
              <h1 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                {el.volumeInfo.title}
              </h1>
              <h2 className="text-md text-gray-600">
                {el.volumeInfo.authors[0]}
              </h2>
              <p className="line-clamp-2 xl:text-md text-sm text-gray-500">
                {el.volumeInfo.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
