export const saveDataToLocalStorage = (book) =>{
    const savedBook = JSON.parse(localStorage.getItem("books")) || [];
    const haveBook = savedBook.find((item) => item.bookId === book.bookId);
    if (haveBook) {
        alert('Data already exists');
    } else {
        savedBook.push(book);
        localStorage.setItem("books", JSON.stringify(savedBook));
        alert('Data added successfully');
    }
}