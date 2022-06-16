import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/payment.css'
import './CSS/myCourse.css'
import course1 from '../img/course1.png';
import course2 from '../img/course2.png';
import course3 from '../img/course3.png';
import course4 from '../img/course4.png';
import card from '../img/card.png';
import paypal from '../img/paypal.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import courseAPI from '../api/courseAPI';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const email = localStorage.getItem('email');
    const [show, setShow] = useState((() => { return 1 === 0 }));
    const handleClose = () => setShow(false);
    const data = useLocation();
    const [courseSelected, setCourse] = useState({
        id: 0,
        name: "",
        price: 0,
        description: "",
        courseId: 0
    })
    const join = async () => {
        var dataCreate = {
            'courseLevelId': courseSelected.id,
            'studentName': email
        }
        if (dataCreate.courseLevelId === 0 || dataCreate.studentName === '') {

        }
        else {
            try {
                console.log(dataCreate)
                var join = await courseAPI.createStudentCourse(dataCreate);
                if (join.status === 200) {
                    window.location = '/myCourses'
                }
                else {
                    alert('join fail !')
                }
            } catch (error) {
                alert('join fail !')

            }
        }

    }
    const course = data.state.courseInfo;
    const img = [course1, course2, course3, course4]
    const [isReload, setReload] = useState(false);
    const showCourseSelected = () => {
        var courseLevelId = document.getElementById('courseLevelId').value;
        course.courseLevelResponseDTOs.forEach(data => {
            console.log(data)
            console.log(courseLevelId)
            if (data.id == courseLevelId) {
                console.log('ok')
                setCourse((prevState) => {
                    return {
                        ...prevState,
                        id: data.id,
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        courseId: data.courseId
                    };
                });
            }
        });
        setReload(true);

    }
    if (course.courseLevelResponseDTOs.length > 0) {
        var dataFirst = course.courseLevelResponseDTOs[0];
        // setCourse((prevState) => {
        //     return {
        //         ...prevState,
        //         id: dataFirst.id,
        //         name: dataFirst.name,
        //         price: dataFirst.price,
        //         description: dataFirst.description,
        //         courseId: dataFirst.courseId
        //     };
        // });
    }
    useEffect(() => {
        setReload(false);
    }, [isReload])

    return (
        <div className='container-fluid' style={{ backgroundColor: '#F5F5F5;' }}>
            <div className='row pt-3 pb-5'>
                <button type="button" style={{
                    width: '7%',
                    height: '47px',
                    lineHeight: '47px',
                    backgroundColor: '#659DBD',
                    borderRadius: '15px',
                    marginLeft: '30px',
                    position: 'absolute',
                    border: 'none'
                }}
                    onClick={() => { setShow(true) }}>Back</button>
                <center><h3>Payment details</h3></center>
            </div>
            <div className='row'>
                <div className='col-xl-4 align-self-center'>
                    <center>
                        <div className='courses' style={{ width: '50%', paddingTop: '60px', backgroundColor: '#659DBD' }} >
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
                            <div className='coursesTitle' style={{ backgroundColor: '#659DBD' }}>
                                <h4>{course.name}</h4>
                            </div>
                            <div className='coursesBody'>
                                {course.description.split('|').map((description) => (
                                    <li>{description}</li>
                                ))}
                            </div>
                        </div>
                    </center>
                </div>
                <div className='col-xl-8'>
                    <div className='row' style={{ height: '100px', alignItems: 'flex-end' }}>
                        <select className="form-select form-select-lg" id='courseLevelId' onChange={() => showCourseSelected()}
                            style={{
                                height: '60px',
                                width: '250px',
                                color: 'white',
                                backgroundColor: '#DAAD86',
                                borderRadius: ' 25px',
                                paddingLeft: '25px'
                            }}>
                            <option value={-1}>choose now</option>
                            {course.courseLevelResponseDTOs.map((courseLevel) => (
                                <option value={courseLevel.id} > {courseLevel.name}</option>
                            ))}

                        </select>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-xl-7 mt-2'>
                            {
                                < div style={{ width: '80%', height: '470px', border: '2px solid #000000', borderRadius: '20px', padding: '40px' }}>
                                    <div style={{ width: '70%', height: '25%', borderBottom: '1px solid #000000' }}>
                                        <h5>Course: {course.name}</h5>
                                        <h5>Course Level: {courseSelected.name}</h5>
                                    </div>
                                    <div style={{ width: '70%', height: '40%', borderBottom: '1px solid #000000', paddingTop: '25px' }}>
                                        <h5>Summary: </h5>
                                        <h5>Original Price: {courseSelected.price}</h5>
                                        <h5>Discount: 0</h5>
                                    </div>
                                    <div style={{ width: '70%', height: '35%', paddingTop: '50px' }}>
                                        <h5>Total: {courseSelected.price}</h5>
                                    </div>
                                </div>

                            }

                        </div>
                        <div className='col-xl-5'>
                            <div style={{ width: '80%', height: '470px' }}>
                                <h5>Payment method:</h5>
                                <div style={{
                                    width: '100%',
                                    height: '85px',
                                    marginTop: '40px',
                                    padding: '10px auto',
                                    lineHeight: '85px'
                                }}>
                                    <input type="radio" name="payment" value="" style={{ width: '18px', height: '18px', top: '50%' }} />
                                    <img
                                        alt=""
                                        src={card}
                                        style={{
                                            width: '65px',
                                            height: '42.65px'
                                        }}
                                    />
                                    Credit/Debit Card
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: '85px',
                                    marginTop: '10px',
                                    padding: '10px auto',
                                    lineHeight: '85px'
                                }}>
                                    <input type="radio" name="payment" value="" style={{ width: '18px', height: '18px', top: '50%' }} />
                                    <img
                                        alt=""
                                        src={paypal}
                                        style={{
                                            width: '65px',
                                            height: '42.65px'
                                        }}
                                    />
                                    Paypal
                                </div>
                                <center>
                                    <button type="button" style={{
                                        width: '100%',
                                        height: '65px',
                                        backgroundColor: '#659DBD',
                                        color: 'white',
                                        borderRadius: '25px',
                                        fontSize: '20px',
                                        marginTop: '80px',
                                        border: 'none'
                                    }} onClick={() => join()}
                                    >Complete checkout</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label style={{ fontSize: '25px', textAlign: 'center' }}>
                        Do you want to cancel the payment?
                    </Form.Label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { handleClose(); window.location = '/' }} >
                        Yes
                    </Button>
                    <Button variant="primary" onClick={() => handleClose()}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Payment