
const BOOK_API = "https://api.nytimes.com/svc/";

type BookResponse = {
    description : string;
    title : string
    author: string
    book_image: string
    publisher: string
}

export async function getBooksList(): Promise<Array<BookResponse>> {
    const response = await fetch(BOOK_API + `/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.BOOKS_API_KEY}`);
    const data = await response.json();
    return data.results?.books;
}