import React from 'react';
import { Link } from 'react-router-dom';


const HomeBanner = () => {
    return (
        <div className='mx-auto w-11/12 lg:mt-11'>
            <div className="hero bg-base-200 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse my-10 lg:my-20">
                    <img src="BannerImage.png" className="max-w-sm rounded-lg" />
                    <div className='text-center lg:text-left'>
                        <h1 className="text-3xl lg:text-5xl font-bold lg:w-3/5">Books to freshen up your bookshelf</h1>
                       
                        <Link to='/Listed'> <button className="btn btn-success text-white mt-7">View The List</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;