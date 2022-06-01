import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/courses.css';
import course1 from '../img/course1.png';
import course2 from '../img/course2.png';
import course3 from '../img/course3.png';
import course4 from '../img/course4.png';
import courseAPI from '../api/courseAPI';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Header from './header';

export default function CoursesBody() {
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');
    const [show, setShow] = useState(false);
    const [courseName, setCourseName] = useState('');
    const [courseID, setCourseID] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const img = [course1, course2, course3, course4]
    const [courseInfo, setCourse] = useState([]);
    const getAllCourse = async () => {
        const courses = await courseAPI.gelAllCourse()
        if (courses.status === 200) {
            setCourse(courses.data);
        }
        else {
            alert('load data fail !')
        }
    }
    const join = async () => {
        var dataCreate = {
            'courseId': courseID,
            'studentName': email
        }
        try {
            var join = await courseAPI.createStudentCourse(dataCreate);
            if (join.status === 200) {
                alert('join success !')
            }
            else {
                alert('join fail !')
            }
        } catch (error) {
            alert('join fail !')

        }

    }
    useEffect(() => {
        getAllCourse();
    }, [])
    return (

        <div className='container-fluid contain'>
            <div className='row'>
                <Header />
            </div>
            <div className='row mt-5'>

                {courseInfo.map((course, index) => (
                    <>
                        <div className='col-xl-3 align-self-center'>
                            <center>
                                <div className='courses ' onClick={(role === 'student') ? () => { handleShow(); setCourseName(course.name); setCourseID(course.id) } : () => { window.location = '/Login' }}>
                                    <div className='coursesHead'>
                                        {course.name === 'Communication' ? <img
                                            alt=""
                                            src={img[0]}
                                            className='imgCss'
                                        /> : (course.name === 'Toeic' ? <img
                                            alt=""
                                            src={img[1]}
                                            className='imgCss'
                                        /> : (course.name === 'Toefl') ? <img
                                            alt=""
                                            src={img[3]}
                                            className='imgCss'
                                        /> : <img
                                            alt=""
                                            src={img[2]}
                                            className='imgCss'
                                        />)}


                                    </div>
                                    <div className='coursesTitle'>
                                        <h5>{course.name}</h5>
                                    </div>
                                    <div className='coursesBody'>
                                        {course.description.split('|').map((description) => (
                                            <li>{description}</li>
                                        ))}
                                    </div>
                                </div>
                            </center>
                        </div>

                    </>
                ))}

            </div>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Join Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label style={{ fontSize: '30px', textAlign: 'center' }}>
                        {courseName}
                    </Form.Label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); join() }}>
                        Join
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
