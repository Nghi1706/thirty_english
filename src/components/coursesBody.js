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


export default function CoursesBody() {
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
                <div className='col-xl-1 p-3'>
                    <Link to={'/'} className="btn btn-light">back</Link>
                </div>
                <div className='col-xl-11'>

                </div>
            </div>
            <div className='row mt-5'>

                {courseInfo.map((course, index) => (
                    <>
                        <div className='col-xl-3 align-self-center'>
                            <center>
                                <div className='courses ' onClick={() => { handleShow(); setCourseName(course.name); setCourseID(course.id) }}>
                                    <div className='coursesHead'>
                                        <img
                                            alt=""
                                            src={img[index]}
                                            className='imgCss'
                                        />

                                    </div>
                                    <div className='coursesTitle'>
                                        <h5>{course.name}</h5>
                                    </div>
                                    <div className='coursesBody'>
                                        <li>Good teacher</li>
                                        <li>Pronunciation</li>
                                        <li>Speaking</li>
                                        <li>Improve vocabulary</li>
                                        <li>More confident</li>
                                        {course.categoryName.map((category) => (
                                            <li>{category}</li>
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
