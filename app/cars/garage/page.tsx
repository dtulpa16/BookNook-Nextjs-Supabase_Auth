import { supabaseServerClient } from "@/app/lib/initSupabase";
import React from "react";
import CarsList from "../CarsList";
import Link from "next/link";

export default async function GaragePage() {
  // Get the cars in the garage of the user making the request
  const { data, error } = await supabaseServerClient
    .from("garage")
    .select("car(id,make,model,year)");

  const cars: any = data?.map((item) => item.car);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Link
        href="/cars"
        className="my-4 text-lg text-indigo-600 hover:text-indigo-500"
      >
        Back To Cars List
      </Link>

      <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
        My Garage
      </h2>

      <div className="w-full max-w-4xl px-4">
        <CarsList cars={cars} />
      </div>
    </div>
  );
}
