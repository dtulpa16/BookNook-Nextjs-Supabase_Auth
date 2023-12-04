import { supabaseServerClient } from "@/app/lib/initSupabase";
import { User } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import React from "react";

type ReviewFormProps = {
  bookId: string;
  user: User | null;
  params: string
};

export default function ReviewForm({ bookId, user, params }: ReviewFormProps) {
  const handleReviewSubmit = async (data: FormData) => {
    'use server'
    const text = data.get("text");
    const rating = Number(data.get("rating"));
    const newReviewBody = {
      text: text,
      rating: rating,
      reader: user?.id,
      bookId: bookId,
    };
    await supabaseServerClient.from("reviews").insert([newReviewBody]);
    revalidatePath(`/details/${params}`)
  };
  return (
    <div className="mt-8">
      <form
        action={handleReviewSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
        <div className="mb-4">
          <label
            htmlFor="review-text"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Review
          </label>
          <textarea
            id="review-text"
            name="text"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="review-rating"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rating (1-5)
          </label>
          <input
            type="number"
            id="review-rating"
            name="rating"
            min="1"
            max="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
