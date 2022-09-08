import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div className='header'>
                <div>
                    <img style={{ height: '40px' }} src={logo} alt="" />
                </div>
                <div>
                    <ul className="nav">
                        <Link className='links' to="/cart">Cart</Link>
                        {
                            user ?
                                <button className='btn text-decoration-none mx-2' onClick={handleSignOut}>Logout</button>
                                :
                                <Link className='links' to="/login">Login</Link>
                        }

                        <Link className='links btn' to="/register">Sign Up</Link>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;