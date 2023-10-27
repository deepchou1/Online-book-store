import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image"
import { BookResponse } from "@/lib/books-data";

export function BookCard({ book_image, title, author }: BookResponse) {
  return (
    <>
      <Link className="text-center hover:bg-purple-light hover:shadow-lg border border-purple-light p-2 rounded group" href={`${title}`} key={title}>
        <div className="text-center overflow-hidden">
          {book_image ? <Image
          alt={title + " cover image"}
          width={135}
          height={205}
          className="inline-block group-hover:ease-in-out group-hover:duration-300 group-hover:scale-110"
          src={book_image}
          sizes="(min-width: 1040px) 300px, calc(31.53vw - 22px)"
          >
          </Image> : <p className="text-white text-md">No image to show</p>}
        </div>
        <div className="pt-3 pb-1">
          <span className="text-white block">{title.toUpperCase()}</span>
          <span className="text-purple-very-light">
            <span className="text-sm">Author: </span><span className="text-md">{author}</span>
          </span>
        </div>
      </Link>
      </>
  );
}