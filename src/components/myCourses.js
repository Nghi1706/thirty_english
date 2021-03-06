import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/myCourse.css'
import courseAPI from '../api/courseAPI';
import { Link } from "react-router-dom";
import Header from './header'
export const MyCourses = () => {
    const email = localStorage.getItem('email');
    const [myCourses, setCourses] = useState([]);
    const getMycourses = async () => {
        var data = await courseAPI.gelAllCourseStudent(email);
        if (data.status === 200) {
            setCourses(data.data);
        } else {
            alert('fetch data fail !');
        }
    }
    useEffect(() => {
        getMycourses();

    }, [])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <Header />
            </div>
            <div className='row'>
                <div className='col-xl-2'>

                </div>
                <div className='col-xl-8'>
                    <div className='row'>
                        {myCourses.map((course) => (
                            <div className='col-xl-4 mt-3'>
                                <center>
                                    <div className='myCourse'>
                                        <div className='headerMyCourse'>
                                            {course.courseLevelName}
                                        </div>
                                        <div className='bodyMyCourse'>
                                            <Link to={'/Videos'} state={{ courseLevelId: course.courseLevelId }}  ><button type="button" className='buttonMyCourse'>Start study</button></Link>
                                        </div>
                                        <div className='footerMyCourse'>
                                            <Link to={'/VocabularyPacksS'} state={{ courseLevelId: course.courseLevelId }} ><button type="button" className='buttonMyCourse'>Vocabulary</button></Link>

                                            <Link to={'/Homeworks'} state={{ courseLevelId: course.courseLevelId }}  ><button type="button" className='buttonMyCourse'>Homework</button></Link>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='col-xl-2'>

                </div>
            </div>

        </div>
    )
}
