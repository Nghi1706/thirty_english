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

import Header from './header';

export default function CoursesBody() {
    const role = localStorage.getItem('role');
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

    useEffect(() => {
        getAllCourse();
    }, [])
    return (

        <div className='container-fluid contain'>
            <div className='row'>
                <Header />
            </div>
            <div className='row mt-5'>

                {courseInfo.map((course) => (
                    <>
                        <div className='col-xl-3 align-self-center mb-5' style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                            <center>
                                <Link state={{ courseInfo: course }} to={(role === 'student') ? '/payment' : '/Login'} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className='courses' >
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
                                </Link>
                            </center>
                        </div>

                    </>
                ))}

            </div>

        </div>
    )
}
