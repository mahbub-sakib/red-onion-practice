import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, userGgl, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFb, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;
    // console.log(userGgl);
    if (userGgl || userFb) {
        navigate('/home');
    }
    if (error || error2) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error2?.message}</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center test-style'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <p className='mt-2 px-2 '>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src='' alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src='' alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;