import { useState, useEffect } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div className='w-11/12 mx-auto my-10 lg:my-24'>
            <div>
                <h1 className='text-5xl font-bold text-center mb-8'>Books: {books.length}</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {books.map(book => <Book key={book.bookId} book={book} />)} 
            </div>
        </div>
    );
};

export default Books;
