import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    

    return (
        <div className='mx-auto w-11/12 my-5 lg:my-10'>
            <div className="bg-base-200 rounded-xl h-[100px] w-full flex justify-center items-center mb-10">
                <h2 className="text-3xl font-bold text-black">Books</h2>
            </div>

            <div className="h-[100px] w-full flex justify-center items-center mb-10">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white text-xl px-8">Sort By <FaAngleDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className=''>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>



            <div className="flex mx-4 items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">

                <Link to='' onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>

                <Link to={'WishList'} onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>



            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;
