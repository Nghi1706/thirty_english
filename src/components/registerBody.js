import React from 'react';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/register.css';
import imgRegister from '../img/registerIMG.png';
import { useState } from 'react'
import account from '../api/accountAPI';
import { Link } from 'react-router-dom';

export default function RegisterBody() {
    const [dataObject, setdata] = useState({ email: '', fullname: '', password: '', phone: '', role: 0 });
    var role = localStorage.getItem('role');
    var listRole = [
        { "value": 1, "label": "admin" },
        { "value": 2, "label": "student" },
        { "value": 3, "label": "teacher" },
    ];
    async function register() {
        if (role !== 'admin') {
            dataObject.role = 2
        }

        console.log(dataObject);
        var data = await account.adminRegister(dataObject);
        if (data.status === 200) {
            console.log(data.body);
        }
        else {
            console.log("register fail");
        }
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-6 formRegis'>
                    <center>
                        <Link to={role !== 'admin' ? '/' : '/employeeManager'}>
                            <img className="rounded-circle" alt="logo" src={logo} width='130' />
                        </Link>
                        <form>
                            <div className='form-group'>
                                <input type="email" className="form-control" id="email" placeholder="Email" aceholder="Enter a message"
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setdata((prevState) => {
                                            return { ...prevState, email: val };
                                        });
                                    }} />
                            </div>
                            <div className='form-group'>
                                <input type="text" className="form-control" id="name" placeholder="Full name" onChange={(e) => {
                                    const val = e.target.value;
                                    setdata((prevState) => {
                                        return { ...prevState, fullname: val };
                                    });
                                }} />
                            </div>
                            <div className='form-group'>
                                <input type="text" className="form-control" id="password" placeholder="Password" onChange={(e) => {
                                    const val = e.target.value;
                                    setdata((prevState) => {
                                        return { ...prevState, password: val };
                                    });
                                }} />
                            </div>
                            <div className='form-group'>
                                <input type="text" className="form-control" id="confirmPW" placeholder="Confirm Password" />
                            </div>
                            <div className='form-group'>
                                <input type="text" className="form-control" id="name" placeholder="Phone Number" onChange={(e) => {
                                    const val = e.target.value;
                                    setdata((prevState) => {
                                        return { ...prevState, phone: val };
                                    });
                                }} />
                            </div>
                            {role === "admin"
                                ?
                                <select className="form-select selection"
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setdata((prevState) => {
                                            return { ...prevState, role: val };
                                        });
                                    }} >
                                    {listRole.map(roles =>
                                        <option value={roles['value']}>{roles['label']}</option>
                                    )};
                                </select>
                                :
                                <div>

                                </div>}
                            <button type="button" className='btnLogin' onClick={register}>Create Account</button>
                        </form>

                    </center>
                </div>
                <div className='col-xl-6 align-self-center'>
                    <img
                        alt=""
                        src={imgRegister}
                        width="531px"
                        height="547px"

                    />
                </div>
            </div>
        </div>
    )
}
