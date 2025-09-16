import React, { useState } from 'react'
import "./LoginPage.css"
import LoginLeftBanner from '../components/LoginLeftBanner'
import "../components/LoginLeftBanner.css"
import LoginPrompt from '../components/LoginPrompt'
import "../components/LoginPrompt.css"
import RegistrationPrompt from '../components/RegistrationPrompt'
import "../components/RegistrationPrompt.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

const LoginPage = ({ checkLogin }) => {
    const [isRegistered, setRegistered] = useState(true);
    const [Logged, setIsLogged] = useState(false)

    const handle_register = () => {
        setRegistered(prev => !prev)
    }

    const navigate = useNavigate();

    const sendLoginInfoToBackend = async (loginData) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, loginData);
            console.log('Login successful:', response.data)
            let x = Boolean(response.data.login);
            setIsLogged(Boolean(response.data.login))
            navigate("/")
        } catch (error) {
            console.log('Login failed:', error.response?.data || error.message)
        }
    }

    useEffect(() => {
        console.log("check :", Logged)
        checkLogin({ Logged });
    }, [Logged]);


    return (
        <div className='outerContainer'>
            <div className="container">
                <LoginLeftBanner />
                {isRegistered ? <LoginPrompt handle_register={handle_register} loginInfo={sendLoginInfoToBackend} /> : <RegistrationPrompt handle_register={handle_register} />}
            </div>
        </div>
    )
}

export default LoginPage