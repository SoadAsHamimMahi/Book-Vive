import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className='w-11/12 mx-auto my-10'>
      {/* Header */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl py-6 text-center shadow-sm">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">My Bookshelf</h2>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-center mt-8 mb-4">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn bg-green-600 hover:bg-green-700 text-white text-lg px-8">
            Sort By <FaAngleDown />
          </div>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white dark:bg-gray-700 rounded-box w-52 text-gray-800 dark:text-white">
            <li><a>Rating</a></li>
            <li><a>Number of Pages</a></li>
            <li><a>Publisher Year</a></li>
          </ul>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 border-b dark:border-gray-600 text-lg font-medium text-gray-700 dark:text-gray-300">
        <Link to='' onClick={() => setTabIndex(0)} className={`px-4 py-2 ${tabIndex === 0 ? 'border-b-2 border-green-600 text-green-600 font-bold' : 'hover:text-green-500'}`}>Read Books</Link>
        <Link to='WishList' onClick={() => setTabIndex(1)} className={`px-4 py-2 ${tabIndex === 1 ? 'border-b-2 border-green-600 text-green-600 font-bold' : 'hover:text-green-500'}`}>Wishlist Books</Link>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <Outlet />
      </div>
    </section>
  );
};

export default ListedBooks;
