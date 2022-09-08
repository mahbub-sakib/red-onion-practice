import React from 'react';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Meals = () => {
    return (
        <div>
            <h2>this is meals</h2>
            <div>
                <CustomLink to="/home/breakfast" className="navbar-item">Breakfast</CustomLink>
                <CustomLink to="/home/lunch" className="navbar-item">lunch</CustomLink>
                <CustomLink to="/home/dinner" className="navbar-item">Dinner</CustomLink>

            </div>
            <Outlet />
        </div>
    );
};

export default Meals;