import Book from "./Book"

function BookListing({books}) {
    return books.map(
        (book, arrayItemIndex, wholeArray) => <Book name={book.name} author={book.author} year={book.year}/>
    )
}

export default BookListing;