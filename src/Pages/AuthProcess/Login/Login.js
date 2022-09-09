import React from 'react';

const Login = () => {
    const handleLogin = (event) => {

    }
    return (
        <div className='register-form'>
            <h2>This is login</h2>
            <form onSubmit={handleLogin} className='form-styles'>
                <input type="email" name="email" placeholder='Email Address' id="" required />
                <input type="password" name="password" placeholder='Password' id="" required />

                <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;