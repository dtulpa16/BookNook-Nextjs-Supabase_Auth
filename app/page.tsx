import { supabaseServerClient } from "./lib/initSupabase";

export default async function Home() {
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  // Important - Before adding features:
  // -Add data to your cars table in Supabase
  // -Run the server, register, then sign in
  // -Navigate to the /cars page & compare the code to what you see in your browser to get an idea of how
  //  you can use the included code in your project

  // There is a "type" already created for the Google Books API Response.
  // When you get around to fetching books from the Google Books API,
  // your fetch request should look like:
  // let data = await fetch("googleAPIendpoint...")
  // let books : GoogleBooksApiResponse = await data.json()
  // console.log("Book API Data: ", books)

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
