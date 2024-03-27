import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";




const List = ({ data }) => {

    const { bookName, author, image, tags, yearOfPublishing,category,rating } = data;

    return (
        <div className="border-gray-200 border-2 rounded-3xl flex gap-8 my-8 mx-auto w-11/12">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={image} className="max-w-sm h-80 rounded-lg" />
                </div>
                <div className='justify-start'>
                    <h1 className="text-3xl font-bold">{bookName}</h1>
                    <p className='my-4'>By : {author}</p>

                    <div className="mb-4 flex gap-4 items-center">
                        <p>Tag</p>
                        <div className='p-2 rounded-xl bg-green-100'><p className='text-green-700 font-base font-semibold'>#{tags[0]}</p></div>
                        <div className='p-2 rounded-xl bg-green-100 font-semibold'><p className='text-green-700 font-base'>#{tags[1]}</p></div>
                        <div className='flex gap-2 items-center'>
                            <IoLocationOutline />
                            <p > Year of Publishing: {yearOfPublishing} </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <GoPeople />
                                <p>Publisher: Scribner</p>
                            </div>
                            <div className='flex items-center gap-2'>
                            <RiPagesLine />

                                <p>Page 192</p>
                            </div>

                        </div>

                        <hr className='my-4' />

                   <div className='flex gap-3'>
                    <div className=' py-3 px-5 bg-blue-100 text-blue-700 font-semibold rounded-2xl'>
                    <p>Category: {category}</p>
                    </div>

                    <div className=' py-3 px-5 bg-orange-100 text-orange-700 font-semibold rounded-2xl'>
                        <p>Rating: {rating} </p>
                    </div>

                    <button className="btn btn-success rounded-2xl text-white">View Details</button>

                   </div>
                </div>
            </div>
        </div>
    );
};

export default List;