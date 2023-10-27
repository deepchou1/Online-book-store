import { LibraryGrid } from "@/components/LibraryGrid"
import { getBooksList } from "@/lib/books-data";

export default async function Home() {
  const booksList = await getBooksList();

  return (
    <>
      <h1 className="text-xl text-white mb-4">Available Books:-</h1>
      <LibraryGrid booksList={booksList}/>
    </>
    
  )
}
