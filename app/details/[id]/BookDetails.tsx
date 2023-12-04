import { BookVolume } from "@/app/lib/types";
import React from "react";

type BookDetailsProps = {
  book: BookVolume;
};

export default function BookDetails({ book }: BookDetailsProps) {
  return (
    <div>
      <h1>{book.volumeInfo.title}</h1>
      <h2>{book.volumeInfo.authors[0]}</h2>
      <h3 dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
      <img src={book.volumeInfo.imageLinks.thumbnail} />
      <form>
        <input className="hidden" value={book.id} />
        <button type="submit">Add To Favorites</button>
      </form>
    </div>
  );
}
