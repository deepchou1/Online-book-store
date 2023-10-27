"use client"
import { Book } from "@/types/book";
import { BookCard } from "./BookCard";


interface LibraryGridProps {
    booksList: Array<Book>;
}

export function LibraryGrid({ booksList }: LibraryGridProps) {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-x-8 gap-y-6 border-t border-purple-light pt-8">
                {booksList?.map((book: any) => {
                    return (
                        <BookCard key={book.title} imageUrl={book.book_image} imageAlt={book.title + " cover image"} name={book.title.toLowerCase()} author={book.author}></BookCard>
                    );
                })
                }
            </div>
        </>
    );
}