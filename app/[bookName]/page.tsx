
import { getBooksList } from "@/lib/books-data";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image"


export default async function BooksPage({ params }: { params: { bookName: string } }) {

  const { bookName: bookParam } = params

  const bookName = decodeURI(bookParam)

  const data = await getBooksList();

  const book = data?.find(({ title }) => title.toLowerCase() === bookName.toLowerCase())

  
  return (
    <>
  <Link href="/" className="px-4 py-2 mb-4 text-white rounded text-md inline-block hover:bg-purple-light hover:">
    &#8592; Go Back
  </Link>
  <div className="grid md:grid-cols-3 grid-cols-1 border-t border-purple-light pt-8">
    <div className="w-full h-80 text-center md:mb-0 mb-10">
      {book ? <Image 
        src={book.book_image}
        alt={book?.title + " cover image"}
        style={{maxWidth:'100%', maxHeight: '100%'}}
        height={300}
        width={320}
        priority
        sizes="(min-width: 1040px) 300px, calc(31.53vw - 22px)"
        className="object-contain inline-block"
        >
      </Image> : <span className="text-white">No image to show</span>}
    </div>
    <div className="col-span-2 text-left flex flex-col gap-4 text-purple-very-light text-md">
      <h1 className="text-2xl text-white">{book?.title}</h1>
      <div>
          <span className="text-md">Author: </span><span className="text-lg">{book?.author}</span>
      </div>
      <div>
          <span className="text-md">Publisher: </span><span className="text-lg">{book?.publisher}</span>
      </div>
      <div>
          <span className="text-md">Description: </span><span className="leading-6 text-lg">{book?.description}</span>
      </div>
    </div>
  </div>
    </>
  );
}