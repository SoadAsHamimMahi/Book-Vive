import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { bookId, bookName, tags, author, category, rating, image } = book;

  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden">
        {/* Book Image */}
        <figure className="bg-gray-100 dark:bg-gray-700 p-4 h-80 flex items-center justify-center">
          <img src={image} alt={bookName} className="h-full object-contain rounded-lg" />
        </figure>

        {/* Book Info */}
        <div className="p-6 space-y-2">
          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <span key={index} className="text-sm font-semibold px-3 py-1 bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Title & Author */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">{bookName}</h2>
          <p className='text-gray-600 dark:text-gray-300'>By: {author}</p>

          {/* Divider */}
          <hr className='my-2 border-gray-300 dark:border-gray-600' />

          {/* Category & Rating */}
          <div className="flex justify-between items-center">
            <p className='text-gray-700 dark:text-gray-200 font-medium'>{category}</p>
            <p className='flex items-center gap-1 text-yellow-500 font-medium'>{rating} <FaRegStar /></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;