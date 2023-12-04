import { BookVolume } from "@/app/lib/types";
import React from "react";
import BookDetails from "./BookDetails";

export default async function DetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${params.id}`
  );
  const book: BookVolume = await data.json();
  console.log("Book: ", book);
  return (
    <div>
      <BookDetails book={book}/>
    </div>
  );
}
