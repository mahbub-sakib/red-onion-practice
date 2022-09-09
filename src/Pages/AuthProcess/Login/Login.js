import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
        console.log(user);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='register-form'>
            <h2>This is login</h2>
            <form onSubmit={handleLogin} className='form-styles'>
                <input ref={emailRef} type="email" name="email" placeholder='Email Address' id="" required />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' id="" required />

                <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Login" />
            </form>
            <p>New to Red Onion? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;