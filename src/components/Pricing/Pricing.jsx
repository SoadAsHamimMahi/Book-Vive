import React from 'react';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";



const Pricing = () => {
    return (
        <div className='mx-auto w-11/12 my-5 lg:my-10'>
            <div className="bg-base-200 rounded-xl h-[100px] w-full flex justify-center items-center mb-10">
                <h2 className="text-3xl font-bold text-black">Choose the right plan for you</h2>
            </div>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='bg-red-700 px-4 my-4 w-fit rounded-2xl text-white font-bold '>
                            <p>ESSENTIAL PLAN</p>
                        </div>
                        <h2 className="card-title text-4xl font-bold">Books Free</h2>
                        <p className='text-2xl font-semibold'>0$ <sub>/month</sub></p>
                        <hr className='my-3' />

                        <p>
                        Basic package with limited features
                        </p>

                       <div className='text-xl flex flex-col gap-2 mb-4'>
                       <p className='text-xl font-bold my-2'>Highlighted Features</p>
                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquareFill />
                        <p>Limited access</p>
                       </div>

                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquareFill />
                        <p>Daily 10 Downloads</p>
                       </div>

                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquare />
                        <p>No download restrictions</p>
                       </div>
                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquare />
                        <p>Download for offline reading</p>
                       </div>
                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquare />
                        <p>Ad-free experience</p>
                       </div>
                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquare />
                        <p>Exclusive access to new releases</p>
                       </div>
                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquare />
                        <p>Personalized recommendations</p>
                       </div>
                       <div className='flex items-center gap-2'>
                       <BsArrowRightSquare />
                        <p>Priority customer support</p>
                       </div>
                       </div>

                        <div className="card-actions">
                            <button className="btn btn-success text-white">Sign Up Free</button>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Pricing;