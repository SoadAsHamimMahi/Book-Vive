import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {
    const {bookId, bookName,tags,author,category,rating,image } = book;
    return (
        <Link to={`/BookDetails/${bookId}`}>
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure className="px-6 py-6 bg-gray-100">
                <img src={image} alt="Shoes" className="rounded-xl h-80" />
            </figure>


            <div className="px-10">
                <div className='text-green-500 flex gap-4 mt-6'>
                    <p>{tags[0]}</p>
                    <p>{tags[1]}</p>
                </div>
                <h2 className="card-title py-4 text-2xl">{bookName}</h2>
                <p className='text-base'>By : {author} </p>
                <hr className='my-5' />
                <div className="flex justify-between mb-6">
                    <p className='text-xl'>{category}</p>
                    <p className='flex text-xl gap-2'>{rating} <FaRegStar></FaRegStar> </p>
                    
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;
