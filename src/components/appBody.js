import React from 'react'
import robot from '../img/robot.png';
import kite from '../img/kite.png';
import './CSS/appBody.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function appBody() {
    const role = localStorage.getItem('role');
    return (
        <>
            <div className='container-fluid'>
                <center className='mt-5'>
                    <img
                        alt=""
                        src={kite}
                        width="128px"
                        height="128px"
                        className='kiteCss'

                    />
                </center>
                <div className='row' style={{ zIndex: 0 }}>
                    <div className='col-xl-6 p-5 '>
                        <center>
                            <div>
                                <h1>Welcome to Thirty English</h1><br />
                                <pre>
                                    Make learning English easier<br /><br />

                                    Learn English online and improve your skills through our high-<br />
                                    quality courses and resources - all designed for every language<br />
                                    learner. Everything you find here has been specially created for<br />
                                    you, by English teaching experts
                                </pre>
                            </div>
                            <div className='btnCss'>
                                <Link to={(role !== 'student') ? '/Login' : '#'} style={{ textDecoration: 'none' }}><button type="button" className=' btnApp btnGT'>Get Started</button></Link>
                            </div>

                        </center>
                    </div>
                    <div className='col-xl-6'>
                        <div className='col-xl-6'>
                            <img
                                alt=""
                                src={robot}
                                width="690"
                                height="580"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
