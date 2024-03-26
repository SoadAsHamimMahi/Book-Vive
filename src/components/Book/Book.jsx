import React from 'react';

const Book = ({ book }) => {
    const { bookName,tags,author,category,rating,image } = book;
    return (
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
                <p>By : {author} </p>
                <hr className='my-5' />
                <div className="flex justify-between mb-6">
                    <p>{category}</p>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
