import { BookVolume } from "@/app/lib/types";
import React from "react";
import BookDetails from "./BookDetails";
import { supabaseServerClient } from "@/app/lib/initSupabase";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default async function DetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  const data = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${params.id}`
  );
  const book: BookVolume = await data.json();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <BookDetails book={book} user={user} />
      <ReviewForm bookId={book.id} user={user} params={params.id} />
      <ReviewList bookId={book.id} />
    </div>
  );
}
