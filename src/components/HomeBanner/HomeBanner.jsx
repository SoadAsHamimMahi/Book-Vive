import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section className="w-11/12 mx-auto mt-6 lg:mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-100 dark:bg-gray-800 rounded-3xl px-6 lg:px-12 py-12 lg:py-20 shadow-md">
        {/* Left: Text and CTA */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
            Books to freshen up<br /> your bookshelf
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover new reads, track your progress, and build your dream collection.
          </p>
          <Link to='/Listed'>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
              View The List
            </button>
          </Link>
        </div>

        {/* Right: Banner Image */}
        <div className="flex justify-center">
          <img
            src="BannerImage.png"
            alt="Banner Book Cover"
            className="max-w-xs lg:max-w-md rounded-xl drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;