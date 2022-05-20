import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/courses.css';
import course1 from '../img/course1.png';
import course2 from '../img/course2.png';
import course3 from '../img/course3.png';
import course4 from '../img/course4.png';

export default function coursesBody() {
    return (

        <div className='container-fluid contain'>
            <div className='row'>
                <div className='col-xl-3 align-self-center'>
                    <center>
                        <div className='courses '>
                            <div className='coursesHead'>
                                <img
                                    alt=""
                                    src={course1}
                                    className='imgCss'
                                />

                            </div>
                            <div className='coursesTitle'>
                                <h5>Communication Courses</h5>
                            </div>
                            <div className='coursesBody'>
                                <li>Good teacher</li>
                                <li>Pronunciation</li>
                                <li>Speaking</li>
                                <li>Improve vocabulary</li>
                                <li>Increase communication ability</li>
                                <li>More confident</li>
                            </div>
                        </div>
                    </center>
                </div>
                <div className='col-xl-3 align-self-center'>
                    <center>
                        <div className='courses '>
                            <div className='coursesHead'>
                                <img
                                    alt=""
                                    src={course2}
                                    className='imgCss'
                                />
                            </div>
                            <div className='coursesTitle'>

                                <h5>ToEic Courses</h5>
                            </div>
                            <div className='coursesBody'>
                                <li>Good teacher</li>
                                <li>Experienced teacher</li>
                                <li>Specific curriculum</li>
                                <li>Easy to learn, easy to understand</li>
                                <li>Improve reading, listening skills</li>
                                <li>Improve vocabulary</li>
                                <li>Improve ToEic score</li>

                            </div>
                        </div>
                    </center>
                </div>
                <div className='col-xl-3 align-self-center'>
                    <center>
                        <div className='courses '>
                            <div className='coursesHead'>
                                <img
                                    alt=""
                                    src={course3}
                                    className='imgCss'
                                />
                            </div>
                            <div className='coursesTitle'>
                                <h5>IElts Courses</h5>
                            </div>
                            <div className='coursesBody'>

                            </div>
                        </div>
                    </center>
                </div>
                <div className='col-xl-3 align-self-center'>
                    <center>
                        <div className='courses '>
                            <div className='coursesHead'>
                                <img
                                    alt=""
                                    src={course4}
                                    className='imgCss'
                                />

                            </div>
                            <div className='coursesTitle'>
                                <h5>IElts Courses</h5>
                            </div>
                            <div className='coursesBody'>

                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}
