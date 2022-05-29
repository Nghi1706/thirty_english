import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarTeacher } from './navbarAmin'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import courseAPI from '../api/courseAPI';
import './CSS/courseTeacher.css';


const CoursesTeacher = () => {
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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2'>
                    <NavbarTeacher />
                </div>
                <div className='col-xl-10'>
                    <div className='row mb-2'>
                        {courseInfo.map((course) => (
                            <div className='col-xl-3 p-3'>
                                <div className='courseDiv'>
                                    <div className='courseHeader'>
                                        {course.name}
                                    </div>

                                    {course.categoryName.map((categori, index) => (
                                        <div className='courseBody d-flex justify-content-center'>
                                            <Link to={'/uploadvideo'} style={{ width: '60%' }} state={{ idCourse: course.id, idCategory: categori }}><button type="button" className='buttonStyle'>{categori}</button></Link>
                                        </div>
                                    ))}
                                    <div className='courseBody d-flex justify-content-center'>
                                        <Link to={'/HomeworksTeacher'} style={{ width: '60%' }} state={{ idCourse: course.id }}><button type="button" className='buttonStyle'>Home works</button></Link>

                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div >
    )
}

export default CoursesTeacher