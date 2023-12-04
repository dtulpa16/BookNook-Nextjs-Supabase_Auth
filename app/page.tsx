import { supabaseServerClient } from "./lib/initSupabase";

export default async function Home() {
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  // Important:
  // There is a "type" already created for the Google Books API Response.

  // When you get around to fetching books from the Google Books API,
  // your "Search" fetch request should look like:
  // let data = await fetch("GoogleAPI Search endpoint...")
  // let books : GoogleBooksApiResponse = await data.json()
  // console.log("Search Data: ", books)

  // The BookDetails fetch request should look like:
  // let data = await fetch("GoogleAPI Book Details endpoint...")
  // let book : BookVolume = await data.json()
  // console.log("Book Details: ", book)

  let usersEmail = user?.email;

  return (
    <main className="flex justify-center items-center mt-24 bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-400">
        Welcome,{" "}
        <span className="text-blue-500">{usersEmail?.split("@")[0]}</span>
      </h1>
    </main>
  );
}
