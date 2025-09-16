import React from 'react'

const RegistrationPrompt = ({ handle_register }) => {
    return (
        <div className="right-container">
            <h1>Register</h1>
            <form method='post'>
                <input type='text' id='email' name='email' placeholder='Email' required></input>
                <input type='password' id='password' name='password' placeholder='Password' required></input>
                <input type='password' id='conf_pass' name='conf_pass' placeholder='Confirm Password' required></input>
                <button>Register</button>
            </form>
            <div className="hr-text">
                <hr></hr>
                <span>OR</span>
            </div>
            <button className='secondary-button'>
                <img src='https://img.icons8.com/?size=100&id=17949&format=png&color=000000' alt='google-logo'></img>
                <p>Register through Google</p>
            </button>
            <p className='open-registraion-prompt'>Have already registered? Then <span onClick={handle_register}>Login</span></p>
        </div>
    )
}

export default RegistrationPrompt