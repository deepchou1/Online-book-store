"use client"
import { BookResponse } from "@/lib/books-data";
import { BookCard } from "./BookCard";

interface LibraryGridProps {
    booksList: Array<BookResponse>;
}

export function LibraryGrid({ booksList }: LibraryGridProps) {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-x-8 gap-y-6 border-t border-purple-light pt-8">
                {booksList?.map((book: any) => {
                    return (
                        <BookCard key={book.title} book_image={book.book_image} title={book.title.toLowerCase()} author={book.author}></BookCard>
                    );
                })
                }
            </div>
        </>
    );
}