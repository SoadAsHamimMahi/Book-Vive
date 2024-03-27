import { toast } from "react-toastify";



export const saveDataToLocalStorage = (book, key) => {
    const savedBook = JSON.parse(localStorage.getItem(key)) || [];
    const haveBook = savedBook.find((item) => item.bookId === book.bookId);
    if (haveBook) {
        toast.warn('Data already exists');
    } else {
        savedBook.push(book);
        localStorage.setItem(key, JSON.stringify(savedBook));
        toast('🦄 Book added successfully!');
    }
}