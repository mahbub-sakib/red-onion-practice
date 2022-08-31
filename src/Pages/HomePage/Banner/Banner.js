import React from 'react';
import banner from '../../../images/bannerbackground.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <img className='banner-img' src={banner} alt="" />
                <div className='banner-search'>
                    <input type="text" placeholder='Search food items' maxlength="50" />
                    <button>Search</button>
                </div>
                <h1>Best food Waiting for your belly</h1>
            </div>

        </div>
    );
};

export default Banner;