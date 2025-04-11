import { useState, useEffect } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('All');

  useEffect(() => {
    fetch('Books.json')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  useEffect(() => {
    let updatedBooks = [...books];

    if (searchTerm) {
      updatedBooks = updatedBooks.filter(book =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (genreFilter !== 'All') {
      updatedBooks = updatedBooks.filter(book => book.category === genreFilter);
    }

    setFilteredBooks(updatedBooks);
  }, [searchTerm, genreFilter, books]);

  const genres = ['All', ...new Set(books.map(book => book.category))];

  return (
    <section className='w-11/12 mx-auto my-10 lg:my-20'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white'>Books: {filteredBooks.length}</h1>
        <p className='mt-2 text-lg text-gray-600 dark:text-gray-300'>Explore a curated collection of classic and modern reads.</p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full lg:w-1/2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />

        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          {genres.map((genre, idx) => (
            <option key={idx} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      {/* Books Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <Book key={book.bookId} book={book} />)
        ) : (
          <p className='text-center text-lg col-span-full text-gray-600 dark:text-gray-300'>No books match your search or filter.</p>
        )}
      </div>
    </section>
  );
};

export default Books;