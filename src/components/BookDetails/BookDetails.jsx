import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDataToLocalStorage } from '../../utils';

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find(book => book.bookId === idInt);
  const [isBookAdded, setIsBookAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleRead = () => {
    saveDataToLocalStorage(book, "readBooks");
    setIsBookAdded(true);
  }

  const handleWishlist = () => {
    const readBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
    const haveReadBook = readBooks.find((item) => item.bookId === book.bookId);

    if (haveReadBook) {
      toast.error('You have already read this book');
    } else {
      saveDataToLocalStorage(book, "wishlistBooks");
      setIsWishlisted(true);
    }
  }

  return (
    <section className="w-11/12 mx-auto my-10 lg:my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Book Image */}
        <div className='bg-gray-100 dark:bg-gray-800 rounded-3xl flex justify-center items-center p-6 shadow-md'>
          <img src={book.image} className="w-full max-w-xs rounded-xl object-contain" alt="Book Cover" />
        </div>

        {/* Right: Book Info */}
        <div className='space-y-4 text-gray-800 dark:text-white'>
          <h1 className="text-3xl lg:text-5xl font-bold">{book.bookName}</h1>
          <p className="text-lg">By: <span className="font-medium">{book.author}</span></p>
          <p className="text-base italic text-gray-600 dark:text-gray-300">{book.category}</p>
          <p className="text-lg leading-relaxed">{book.review}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {book.tags.map((tag, index) => (
              <span key={index} className="px-4 py-1 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 rounded-full font-semibold text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
            <p><span className='font-semibold'>Number of Pages:</span> {book.totalPages}</p>
            <p><span className='font-semibold'>Publisher:</span> {book.publisher}</p>
            <p><span className='font-semibold'>Year of Publishing:</span> {book.yearOfPublishing}</p>
            <p><span className='font-semibold'>Rating:</span> {book.rating}</p>
          </div>

          {/* Buttons */}
          <div className='flex gap-4 mt-6 flex-wrap'>
            <button onClick={handleRead} className="btn btn-outline px-6 py-3 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-semibold rounded-xl">
              Mark as Read
            </button>
            <button onClick={handleWishlist} className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default BookDetails;