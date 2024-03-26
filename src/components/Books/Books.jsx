import { useState, useEffect } from 'react';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json()) // Corrected to res.json()
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error)); // Add error handling
    }, []);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Books {books.length}</h1>
            {/* Render your books here */}
        </div>
    );
};

export default Books;
