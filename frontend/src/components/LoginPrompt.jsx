import React, { useState } from 'react'

const LoginPrompt = ({ handle_register, loginInfo }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        loginInfo({ email, password });

    }

    return (
        <div className="right-container">
            <h1>Login</h1>
            <form method='post' onSubmit={handleLoginFormSubmit} autoComplete='on'>
                <input type='text' id='email' name='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' id='password' name='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Log In</button>
            </form>
            <div className="hr-text">
                <hr></hr>
                <span>OR</span>
            </div>
            <button className='secondary-button'>
                <img src='https://img.icons8.com/?size=100&id=17949&format=png&color=000000' alt='google-logo'></img>
                <p>Login with Google</p>
            </button>
            <p className='open-registraion-prompt'>Have't yet registered? <span onClick={handle_register}>Register Now</span></p>
        </div>
    )
}

export default LoginPrompt