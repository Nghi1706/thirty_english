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

                    {courseInfo.map((course) => (
                        <div className='row mb-2' style={{ borderBottom: '1px solid black' }}>
                            <div className='col-xl-3 p-3'>
                                <div>
                                    <h2 style={{ color: 'red', fontWeight: 'bold' }}>{course.name}</h2>
                                </div>
                            </div>
                            <div className='col-xl-9 p-3'>
                            </div>
                            <div className='row'>
                                <div className='col-xl-3'>
                                    <h3>Category</h3>
                                </div>
                                <div className='col-xl-9'>
                                    <div className='row'>
                                        {course.categoryName.map((categori) => (
                                            <div className='col-xl-3'>
                                                <Link to={'/uploadvideo'} state={{ idCourse: course.id, idCategory: categori }}><button type="button" className='buttonStyle'>{categori}</button></Link>

                                            </div>
                                        ))}
                                    </div>

                                </div>


                            </div>
                            <div className='row'>
                                <div className='col-xl-3'>

                                    <h3>Course level</h3>
                                </div>
                                <div className='col-xl-9'>
                                    <div className='row'>
                                        {course.courseLevelResponseDTOs.map((data) => (
                                            <div className='col-xl-3'>
                                                <Link to={'/VocabularyPacks'} state={{ idCourseLevel: data.id }}><button type="button" className='buttonStyle'>{data.name}</button></Link>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>


                        </div>

                    ))}


                </div>
            </div>
        </div >
    )
}

export default CoursesTeacher