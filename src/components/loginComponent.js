import React, { useEffect } from 'react'
// import backgroundImg from '../img/BackgroundLogin.png'
import logo from '../img/logo.png'
import './CSS/login.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from '../img/catLogin.png'
import robot from '../img/robotLogin.png';
import { useState } from 'react'
import account from '../api/accountAPI';
import LoadingOverlay from 'react-loading-overlay';

export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function login() {
        setLoading(true);
        var params = {
            "email": email,
            "password": password
        }
        try {
            var data = await account.login(params);
            if (data.status === 200) {
                setLoading(false);
                localStorage.setItem('role', data.data)
                console.log(data.data);
                if (data.data === 'admin') { window.location = "/employeeManager"; }
                else if (data.data === 'teacher') {
                    window.location = "/CoursesTeacher"
                    localStorage.setItem('email', email)
                }
                else if (data.data === 'student') {
                    window.location = "/";
                    localStorage.setItem('email', email)
                }

                else { window.alert("Login fail !") }
            }
            else {
                setLoading(false);
                window.alert("Login fail !")
            }
        }
        catch (err) {
            setLoading(false);
            window.alert("Login fail !")
        }

    }
    useEffect(() => {
        localStorage.clear();
    }, [])

    return (


        <LoadingOverlay
            active={loading}
            spinner
            text='Waiting...'
        > <div className='container-fluid box' >
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
                            <Link to={'/'}>
                                <img className="rounded-circle" alt="logo" src={logo} width='130' />
                            </Link>
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
            </div >
        </LoadingOverlay>

    )

}