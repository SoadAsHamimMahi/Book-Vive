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
        <div className="w-10/12 lg:w-11/12 mx-auto my-8 lg:my-16">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                <div className='bg-base-200 w-11/12 lg:w-1/2 rounded-3xl flex justify-center items-center'>
                    <img src={book.image} className="p-4 lg:p-20 rounded-lg" alt="Book Cover" />
                </div>
                <div className='lg:w-1/2 '>
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-6">{book.bookName}</h1>
                        <p className="mb-4 text-xl">By: {book.author}</p>
                        <hr className="mb-4" />
                        <p className="mb-4 text-xl">{book.category}</p>
                        <hr className="mb-4" />
                        <p className="py-6 mb-4 text-xl">{book.review}</p>
                        <div className="mb-4 flex gap-4 items-center text-xl">
                            <p>Tag</p>
                            <div className='p-2 rounded-xl bg-green-100'><p className='text-green-700 font-base font-semibold'>#{book.tags[0]}</p></div>
                            <div className='p-2 rounded-xl bg-green-100 font-semibold'><p className='text-green-700 font-base'>#{book.tags[1]}</p></div>
                        </div>
                        <hr className="mb-4" />
                        <p className="mb-4 text-xl"><span className='font-semibold'>Number of Pages:</span> {book.totalPages}</p>
                        <p className="mb-4 text-xl"><span className='font-semibold'>Author: </span> {book.publisher}</p>
                        <p className="mb-4 text-xl"><span className='font-semibold'>Year of Publishing:</span> {book.yearOfPublishing}</p>
                        <p className="mb-4 text-xl"><span className='font-semibold'>Rating:</span> {book.rating}</p>
                    </div>
                    <div className='flex gap-4 my-8'>
                        <button onClick={handleRead} className="btn btn-outline px-7 py-4">Read</button>
                        <button onClick={handleWishlist} className="btn btn-info px-7 py-4 ">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;