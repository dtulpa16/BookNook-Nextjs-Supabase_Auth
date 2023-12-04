import { supabaseServerClient } from "@/app/lib/initSupabase";
import { Review } from "@/app/lib/types";
import React from "react";

type ReviewFormProps = {
  bookId: string;
};

export default async function ReviewList({ bookId }: ReviewFormProps) {
  const { data, error } = await supabaseServerClient
    .from("reviews")
    .select("*")
    .ilike("bookId", bookId);
  const reviews = data as Review[];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      {reviews ? (
        reviews.map((review, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <div className="text-sm text-gray-600">Rating: {review.rating}</div>
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <div className="text-2xl font-semibold">No Reviews</div>
      )}
    </div>
  );
}
