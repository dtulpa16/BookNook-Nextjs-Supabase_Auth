import { supabaseServerClient } from "@/app/lib/initSupabase";
import { BookVolume } from "@/app/lib/types";
import { User } from "@supabase/auth-helpers-nextjs";
import React from "react";

type BookDetailsProps = {
  book: BookVolume;
  user: User | null;
};

export default async function BookDetails({ book, user }: BookDetailsProps) {
  return (
    <div className="bg-white p-6 md:p-10 lg:p-12 w-full mx-auto rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col md:flex-row">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="md:w-1/3 object-cover rounded mr-8 mb-4 md:mb-0"
        />
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {book.volumeInfo.title}
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            {book.volumeInfo.authors.join(", ")}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            className="prose mb-4"
          />
          <form
            action={async () => {
              "use server";
              await supabaseServerClient.from("favorites").insert([
                {
                  bookId: book.id,
                  title: book.volumeInfo.title,
                  thumbnail_url: book.volumeInfo.imageLinks.thumbnail,
                  reader: user?.id,
                },
              ]);
            }}
          >
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Add To Favorites
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
