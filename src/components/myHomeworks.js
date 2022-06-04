import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/myCourse.css'
import homeworksAPI from '../api/homeworkAPI';
import { Link } from "react-router-dom";
import Header from './header'
import { useLocation } from 'react-router-dom';

export const MyHomeworks = () => {
    const [myHomeworks, setCourses] = useState([]);
    const location = useLocation()
    const id = location.state.courseLevelId;
    const getMyHomeworks = async () => {
        var data = await homeworksAPI.gelHomeworkById(id);
        if (data.status === 200) {
            setCourses(data.data);
        } else {
            alert('fetch data fail !');
        }
    }
    console.log(myHomeworks)
    useEffect(() => {
        getMyHomeworks();

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
                        {myHomeworks.map((homework) => (
                            <div className='col-xl-4 p-3 mt-3'>
                                <center>
                                    <div className='myCourse'>
                                        <div className='headerMyCourse'>
                                            {homework.name}
                                        </div>
                                        <div className='bodyMyCourse'>
                                            {homework.description}
                                        </div>
                                        <div className='footerMyCourse'>
                                            <Link to={'/DoHomework'} className='buttonMyCourse' state={{ id: homework.id }} >Do now !</Link>
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
