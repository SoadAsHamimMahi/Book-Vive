import { useState, useEffect } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]); // Changed variable name to 'books'

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Books {books.length}</h1>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {books.map(book => <Book key={book.bookId} book={book} />)} {/* Changed 'Books' to 'books' */}
            </div>
        </div>
    );
};

export default Books;
