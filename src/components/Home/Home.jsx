import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
           <h1>This is home</h1>  
           <HomeBanner></HomeBanner>
           <Books></Books>
        </div>
    );
};

export default Home; 