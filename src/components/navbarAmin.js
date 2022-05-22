import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './CSS/navbarAdmin.css'
const navbarAmin = () => {
    return (
        <div id="sidebar">
            <header>
                <Link to="#" className='linkcss'>My App</Link>
            </header>
            <ul class="nav">
                <li className='liCss'>
                    <Link to="#" className='linkcss'>
                        <i class="zmdi zmdi-view-dashboard"></i> Dashboard
                    </Link>
                </li>
                <li className='liCss'>
                    <Link to="#" className='linkcss'>
                        <i class="zmdi zmdi-link"></i> Shortcuts
                    </Link>
                </li>
                <li className='liCss'>
                    <Link to="#" className='linkcss'>
                        <i class="zmdi zmdi-widgets"></i> Overview
                    </Link>
                </li>
                <li className='liCss'>
                    <Link to="#" className='linkcss'>
                        <i class="zmdi zmdi-calendar"></i> Events
                    </Link>
                </li>
                <li className='liCss'>
                    <Link to="#" className='linkcss'>
                        <i class="zmdi zmdi-info-outline"></i> About
                    </Link>
                </li>
                <li className='liCss'>
                    <Link to="#" className='linkcss'>
                        <i class="zmdi zmdi-settings"></i> Services
                    </Link>
                </li>
                <li className='liCss'>
                    <Link to="#" className='linkcss'>
                        <i class="zmdi zmdi-comment-more"></i> Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default navbarAmin