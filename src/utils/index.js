import { Toast, toast } from "react-hot-toast"

export const getBookData = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if(storedBooks) {
        books = JSON.parse(storedBooks)
    }

    return books
}

export const selectBooks = book => {
    let books = getBookData()
    const isExist = books.find (b => b.bookId === book.bookId)

    if (isExist){
        return toast.error('Already Added');

    }

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book added');
}