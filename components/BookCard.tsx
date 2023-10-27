import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image"
import { Book } from "@/types/book"
import { spawn } from "child_process";

export function BookCard({ imageUrl, imageAlt, name, author }: Book) {
  return (
    <>
      <Link className="text-center hover:bg-purple-light hover:shadow-lg border border-purple-light p-2 rounded group" href={`${name}`} key={name}>
        <div className="text-center overflow-hidden">
          {imageUrl ? <Image
          alt={imageAlt + " cover image"}
          width={135}
          height={205}
          className="inline-block group-hover:ease-in-out group-hover:duration-300 group-hover:scale-110"
          src={imageUrl}
          >
          </Image> : <p className="text-white text-md">No image to show</p>}
        </div>
        <div className="pt-3 pb-1">
          <span className="text-white block">{name.toUpperCase()}</span>
          <span className="text-purple-very-light">
            <span className="text-sm">Author: </span><span className="text-md">{author}</span>
          </span>
        </div>
      </Link>
      </>
  );
}