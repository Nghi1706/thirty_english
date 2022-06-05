import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import './CSS/header.css';
function header() {
    const role = localStorage.getItem('role');
    const itemHeader = {
        color: "white",
        minWidth: 100,
        textAlign: 'center',
        marginRight: 50,
        textDecoration: 'none',
        fontSize: '20px'
    }
    const textLogo = {
        flat: 'left',
        fontFamily: 'Pacifico',
        fontSize: '30px',
        color: 'white',
        paddingLeft: "50px",
        lineHeight: "50px"
    }
    const navbar = {
        backgroundColor: '#659DBD',
        height: '80px',
        padding: '8px',
        justifyContent: 'space-between'
    }
    const navSelection = {
        float: 'right'
    }
    return (
        <>
            <Navbar style={navbar}>
                <Navbar.Brand href="/" >
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"

                    />
                    <span style={textLogo}>Thirty English</span>

                </Navbar.Brand>
                {role === 'student' ? (
                    <Nav style={navSelection}>
                        <Link to='/Courses' style={itemHeader}>Courses</Link>
                        {/* <Link to="/VocabularyPacksS" style={itemHeader}>Vocabulary</Link> */}
                        <Link to="/Blog" style={itemHeader}>Blog</Link>
                        {/* <Link to="/ForLecturers" style={itemHeader}>For Lectures</Link> */}
                        <Link to="/myCourses" style={itemHeader}>My Courses</Link>
                        <Link to="/Register" style={itemHeader}>Register</Link>
                        <Link to="/Login" style={itemHeader}>Logout</Link>
                    </Nav>
                ) :
                    (
                        <Nav style={navSelection}>
                            <Link to='/Courses' style={itemHeader}>Courses</Link>
                            <Link to="/Blog" style={itemHeader}>Blog</Link>
                            <Link to="/Login" style={itemHeader}>For Lectures</Link>
                            <Link to="/Register" style={itemHeader}>Register</Link>
                        </Nav>
                    )}

            </Navbar>
        </>
    )
}
export default header;
