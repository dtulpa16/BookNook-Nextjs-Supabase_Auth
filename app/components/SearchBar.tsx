import { redirect } from "next/navigation";
import React from "react";

export default function SearchBar() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        const search = formData.get("search")?.toString();
        redirect(`search/${search}/`);
      }}
      className="flex justify-center mt-8 mb-4 w-11/12 mx-auto"
    >
      <input
        type="text"
        name="search"
        className="shadow appearance-none border rounded w-full md:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search books..."
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 transition duration-300 ease-in-out">
        Search!
      </button>
    </form>
  );
}
