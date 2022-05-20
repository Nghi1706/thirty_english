import React from 'react'
// import backgroundImg from '../img/BackgroundLogin.png'
import logo from '../img/logo.png'
import './CSS/login.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from '../img/catLogin.png'
import robot from '../img/robotLogin.png';
import { useState } from 'react'
import account from '../api/accountAPI';

export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function login() {
        var params = {
            "email": email,
            "password": password
        }
        var data = await account.login(params);
        if (data.status === 200) {
            localStorage.setItem('role', data.data)
        }
        console.log(localStorage.getItem('role'));
    }
    return (
        <div className='container-fluid box' >
            <div className='row rowLogin'>
                <div className='col-xl-2 align-self-end'>

                    <img
                        alt=""
                        src={cat}
                        width="100%"
                        height="342px"

                    />
                </div>
                <div className='col-xl-5 loginFrom'>
                    <center>
                        <img className="rounded-circle" alt="logo" src={logo} width='130' />
                        <form>
                            <div className='form-group'>
                                <input type="email" className="form-control" name="email" placeholder="Email" onChange={event => setEmail(event.target.value)} />
                            </div>
                            <div className='form-group'>
                                <input type="password" className="form-control" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                            </div>
                            <div className='forgotPW'>
                                <Link to='/ForgotPW'>Forgot Password?</Link>
                            </div>
                            <button type="button" className='btnLogin' onClick={login} >Login</button>
                        </form>
                        <p>Not register yet? <Link to='/Register'>Create an Account</Link></p>

                    </center>
                </div>
                <div className='col-xl-5 align-self-end'>
                    <img
                        alt=""
                        src={robot}
                        width="100%"
                        height="543.56px"
                        className='robot'

                    />
                </div>
            </div>
        </div>
    )

}
