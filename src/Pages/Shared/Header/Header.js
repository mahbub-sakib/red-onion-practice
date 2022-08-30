import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div>
                    <img style={{ height: '40px' }} src={logo} alt="" />
                </div>
                <div>
                    <ul className="nav">
                        <Link className='links' to="/cart">Cart</Link>
                        <Link className='links' to="/login">Login</Link>
                        <Link className='links btn' to="/register">Sign Up</Link>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;