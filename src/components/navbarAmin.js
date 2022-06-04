import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './CSS/navbarAdmin.css'
const NavbarAdmin = () => {
    return (
        <div id="sidebar">
            <header>
                <Link to="#" className='linkcss'>Management</Link>
            </header>
            <ul className="nav">
                <li className='liCss'>
                    <Link to="/employeeManager" className='linkcss'>
                        <i className="zmdi zmdi-view-dashboard"></i> Account
                    </Link>
                    <Link to="/CoursesAdmin" className='linkcss'>
                        <i className="zmdi zmdi-view-dashboard"></i> Course
                    </Link>
                    <Link to="/Register" className='linkcss'>
                        <i className="zmdi zmdi-view-dashboard"></i> Register
                    </Link>
                    <Link to="/Login" className='linkcss'>
                        <i className="zmdi zmdi-view-dashboard"></i> Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const NavbarTeacher = () => {
    return (
        <div id="sidebar">
            <header>
                <Link to="#" className='linkcss'>Teaching</Link>
            </header>
            <ul className="nav">
                <li className='liCss'>
                    <Link to="/CoursesTeacher" className='linkcss'>
                        <i className="zmdi zmdi-view-dashboard"></i> Courses
                    </Link>
                    <Link to="/Login" className='linkcss'>
                        <i className="zmdi zmdi-view-dashboard"></i> Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export { NavbarTeacher, NavbarAdmin }