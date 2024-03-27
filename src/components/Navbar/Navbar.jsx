import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const links = <>

        <li><NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "flex border-green-600 border-2 font-semibold text-green-600 bg-none text-xl"
                        : isPending
                        ? "pending"
                        : "text-xl hover:text-red-600 hover:border-2 hover:border-red-600 hover:bg-white"
                    }  to = "/">Home</NavLink></li>

        <li><NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "flex border-green-600 border-2 font-semibold text-green-600 bg-none text-xl"
                        : isPending
                        ? "pending"
                        : "text-xl hover:text-red-600 hover:border-2 hover:border-red-600 hover:bg-white"
                    } to = "/Listed">Listed Books</NavLink></li>

        <li><NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "flex border-green-600 border-2 font-semibold text-green-600 bg-none text-xl"
                        : isPending
                        ? "pending"
                        : "text-xl hover:text-red-600 hover:border-2 hover:border-red-600 hover:bg-white"
                    }  to = "/Pages">Pages to Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 w-5/6 lg:w-11/12 mx-auto mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-3xl font-bold">Book <span className='text-red-600'>Vibe</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                {links}
                </ul>
            </div>
            <div className="navbar-end gap-4 items-center">
                <a className="btn btn-success hidden lg:block py-4 px-6 text-white">Sign In</a>
                <a className="btn btn-info hidden lg:block py-4 px-6 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;