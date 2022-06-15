import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarTeacher } from './navbarAmin'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useLocation } from 'react-router-dom';
import { HeaderTeacher } from './headerTeacher';
import homeworksAPI from '../api/homeworkAPI';
import './CSS/homework.css'


export const HomeworksTeacher = () => {
    const [show, setShow] = useState(false);
    const [homeworks, setHomeworks] = useState([]);
    const [isReload, setReload] = useState(false);
    const location = useLocation()
    const id = location.state.idCourseLevel;
    const email = localStorage.getItem('email');
    const [name, setName] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dataCreate, setCreate] = useState({
        courseLevelId: id,
        teacherUsername: email,
        name: "",
        description: ""
    });
    const createHomework = async () => {
        if (dataCreate.name === '' || dataCreate.description === '') {

        }
        else {
            try {
                var newHomework = await homeworksAPI.createHomework(dataCreate);
                if (newHomework.status === 200) {
                    setReload(true);
                }
                else {
                    alert("create fail !")
                }
            } catch (error) {
                alert("create fail !")

            }
        }
    }
    const searchHomework = () => {

    }
    const getHomeworks = async () => {
        try {
            var homework = await homeworksAPI.gelHomeworkById(id);
            if (homework.status === 200) {
                setHomeworks(homework.data)
            }
            else {
                alert("fetch data fail !")
            }
        } catch (error) {
            alert("fetch data fail !")
        }
    }
    useEffect(() => {
        setReload(false);
        getHomeworks();
    }, [isReload])
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-2'>
                        <NavbarTeacher />
                    </div>
                    <div className='col-xl-10'>
                        <HeaderTeacher setValue={setName} handleShow={handleShow} search={searchHomework} buttonName={'Create Homework'} />
                        <div className='row'>
                            <div className='col-xl-10'>
                                <div className='row'>
                                    <div className='col-xl-1'>

                                    </div>
                                    <div className='col-xl-10'>
                                        <center><h1>Home Works</h1>
                                            {homeworks.map((homework) => (
                                                <Link to={"/InfoHomeworkTeacher"} style={{ textDecoration: 'none' }} state={{ id: homework.id, idCourseLevel: id }}>
                                                    <div className='homeworkDiv' >
                                                        {homework.name}
                                                    </div>
                                                </Link>
                                            ))}

                                        </center>

                                    </div>
                                    <div className='col-xl-1'>

                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-2'>

                            </div>

                        </div>
                    </div>
                </div>
                {/* modal */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Homework</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Homework Name :</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setCreate((prevState) => {
                                            return { ...prevState, name: val };
                                        });
                                    }}
                                />
                                <Form.Label>Description :</Form.Label>
                                <Form.Control
                                    type='text'
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setCreate((prevState) => {
                                            return { ...prevState, description: val };
                                        });
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { handleClose(); createHomework() }}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
