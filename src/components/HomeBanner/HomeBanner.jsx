import React from 'react';

const HomeBanner = () => {
    return (
        <div className='mx-auto w-11/12'>
            <div className="hero bg-base-200 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse my-10 lg:my-20">
                    <img src="BannerImage.png" className="max-w-sm rounded-lg" />
                    <div className='text-center lg:text-left'>
                        <h1 className="text-5xl font-bold lg:w-3/5">Books to freshen up your bookshelf</h1>
                       
                        <button className="btn btn-primary mt-7">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;