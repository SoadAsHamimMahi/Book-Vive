import React from 'react';

const Book = ({ book }) => {
    const { bookName } = book;
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>


            <div className="px-10">
                <div className='text-green-500 flex gap-4'>
                    <p>Young Adult</p>
                    <p>Identity</p>
                </div>
                <h2 className="card-title">The Catcher in the Rye</h2>
                <p>By : Awlad Hossain</p>
                <hr className='my-5' />
                <div className="flex justify-between">
                    <p>Fiction</p>
                    <p>5.00</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
