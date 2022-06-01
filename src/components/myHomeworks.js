import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/myCourse.css'
import courseAPI from '../api/courseAPI';
import { Link } from "react-router-dom";
import Header from './header'
import { useLocation } from 'react-router-dom';

export const MyHomeworks = () => {
    const [myHomeworks, setCourses] = useState([]);
    const location = useLocation()
    const id = location.state.courseId;
    const getMyHomeworks = async () => {
        var data = await courseAPI.gelHomeworkById(id);
        if (data.status === 200) {
            setCourses(data.data);
        } else {
            alert('fetch data fail !');
        }
    }
    useEffect(() => {
        getMyHomeworks();

    }, [])
    console.log(MyHomeworks)
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
                        {myHomeworks.map((course) => (
                            <div className='col-xl-4 p-3 mt-3'>
                                <center>
                                    <div className='myCourse'>
                                        <div className='headerMyCourse'>
                                            {course.courseName}
                                        </div>
                                        <div className='bodyMyCourse'>
                                            Click to open your course !
                                        </div>
                                        <div className='footerMyCourse'>
                                            <Link to={'/Homeworks'} className='buttonMyCourse' state={{ courseId: course.courseId }} >Home works</Link>
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