import BookCard from "@/app/components/BookCard";
import { GoogleBooksApiResponse } from "@/app/lib/types";
import React from "react";

export default async function SearchPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${params.slug}`
  );
  const books: GoogleBooksApiResponse = await data.json();
  return (
    <div>
      <BookCard books={books}/>
    </div>
  );
}
