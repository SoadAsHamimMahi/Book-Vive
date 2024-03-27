export const saveDataToLocalStorage = (book, key) => {
    const savedBook = JSON.parse(localStorage.getItem(key)) || [];
    const haveBook = savedBook.find((item) => item.bookId === book.bookId);
    if (haveBook) {
        alert('Data already exists');
    } else {
        savedBook.push(book);
        localStorage.setItem(key, JSON.stringify(savedBook));
        alert('Book added successfully');
    }
}