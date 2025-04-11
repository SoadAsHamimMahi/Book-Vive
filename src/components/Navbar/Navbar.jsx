import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold border-b-2 border-green-600'
              : 'hover:text-green-500 transition-colors duration-200'
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold border-b-2 border-green-600'
              : 'hover:text-green-500 transition-colors duration-200'
          }
          to="/Listed"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold border-b-2 border-green-600'
              : 'hover:text-green-500 transition-colors duration-200'
          }
          to="/Pages"
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold border-b-2 border-green-600'
              : 'hover:text-green-500 transition-colors duration-200'
          }
          to="/Faq"
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold border-b-2 border-green-600'
              : 'hover:text-green-500 transition-colors duration-200'
          }
          to="/Pricing"
        >
          Pricing
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
          <span>Book</span>
          <span className="text-gray-900 dark:text-white">Vibe</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden lg:flex space-x-6 text-lg font-medium text-gray-700 dark:text-gray-200">
          {links}
        </ul>

        {/* Right: Buttons */}
        <div className="space-x-2">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300">
            Sign In
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
