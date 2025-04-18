import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom';



const List = ({ data }) => {

    const { bookId, bookName, totalPages, author, image, tags, yearOfPublishing, category, rating } = data;

    return (
        <div className="border-gray-200 border-2 rounded-3xl flex gap-8 my-8 mx-auto w-11/12">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={image} className="max-w-sm h-80 rounded-lg" />
                </div>
                <div className='justify-start'>
                    <h1 className="text-3xl font-bold">{bookName}</h1>
                    <p className='my-4'>By : {author}</p>

                    <div className="mb-4 flex flex-col lg:flex-row gap-4 items-center">
                        <div className='flex items-center gap-4'>
                            <p>Tag</p>
                            <div className='p-2 rounded-xl bg-green-100'><p className='text-green-700 font-base font-semibold'>#{tags[0]}</p></div>
                            <div className='p-2 rounded-xl bg-green-100 font-semibold'><p className='text-green-700 font-base'>#{tags[1]}</p></div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoLocationOutline />
                            <p > Year of Publishing: {yearOfPublishing} </p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:items-center gap-4 items-start'>
                        <div className='flex items-center gap-2'>
                            <GoPeople />
                            <p className="font-semibold">Publisher: {author}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <RiPagesLine />

                            <p className="font-semibold">Page {totalPages}</p>
                        </div>

                    </div>

                    <hr className='my-4' />

                    <div className='flex gap-3 flex-col lg:flex-row items-start'>
                       <div className='flex gap-3'>
                       <div className=' py-2 px-3 lg:py-3 lg:px-5 bg-blue-100 text-blue-700 font-semibold rounded-2xl'>
                            <p>Category: {category}</p>
                        </div>

                        <div className=' py-3 px-5 bg-orange-100 text-orange-700 font-semibold rounded-2xl'>
                            <p>Rating: {rating} </p>
                        </div>
                       </div>

                       <Link to ={`/BookDetails/${bookId}`}> <button className="btn btn-success rounded-2xl text-white">View Details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;