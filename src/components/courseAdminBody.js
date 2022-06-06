import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderAdmin } from './headerTeacher';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import courseAPI from '../api/courseAPI';
import { Link } from 'react-router-dom';

const CourseAdminBody = () => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false)
    const [showLevel, setShowLevel] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const handleCloseLevel = () => setShowLevel(false);
    const handleShowLevel = () => setShowLevel(true);
    const [category, setCategory] = useState([])
    const [course, setCourse] = useState([])
    const [nameCourse, setNameCourse] = useState('')
    const [dataEdit, setDateEdit] = useState({ id: '', name: '' })
    const [dataCreate, setCreate] = useState({ name: "", categoties: [], description: "" });
    const [dataCreateLevel, setCreateLevel] = useState({ name: "", description: "", price: 0, courseId: '' });
    const [isReload, setReload] = useState(false);
    const setEditAction = () => {
        if (isEdit) {
            setEdit(false)
        }
        else setEdit(true)
    }
    const showEditing = (idEdit, nameEdit) => {
        setDateEdit((prevState) => {
            return { ...prevState, id: idEdit, name: nameEdit }
        })
        handleShowEdit();

    }
    const editCourse = async () => {
        console.log(dataEdit);
        var edit = await courseAPI.updateCourse(dataEdit);
        if (edit.status === 200) {
            setReload(true);
        }
        else {
            alert('Edit Course Fail !')
        }
    }
    const CreateCourse = async () => {
        var data = await courseAPI.createCourse(dataCreate);
        if (data.status === 200) {
            setReload(true);
        }
        else {
            alert('Create Course Fail !')
        }
    }
    const CreateCourseLevel = async () => {
        var data = await courseAPI.createCourseLevel(dataCreateLevel);
        if (data.status === 200) {
            setReload(true);
        }
        else {
            alert('Create Course Level Fail !')
        }
    }
    const getAllCategory = async () => {
        const categories = await courseAPI.gelAllCategory()
        if (categories.status === 200) {
            setCategory(categories.data);
        }
        else {
            alert('load data fail !')
        }
    }
    const getAllCourse = async () => {
        const courses = await courseAPI.gelAllCourse()
        if (courses.status === 200) {
            setCourse(courses.data);
        }
        else {
            alert('load data fail !')
        }
    }
    const checkCategoriesChecked = async () => {
        var data = document.querySelectorAll("input[name=checkCategories]:checked");
        var value = [];
        data.forEach((v) => {
            value.push(v.value)

        })
        console.log(data.value)
        setCreate((prevState) => {
            return { ...prevState, categoties: value };
        });

    }
    const saveDataAndShow = (id, name) => {
        setNameCourse(name);
        setCreateLevel((prevState) => {
            return { ...prevState, courseId: id };
        });
        handleShowLevel();
    }

    useEffect(() => {
        setReload(false);
        getAllCategory();
        getAllCourse();
    }, [isReload])
    return (
        <>
            <HeaderAdmin buttonName={"Create Course"} handleShow={handleShow} />
            <div className='row'>

                <div className='col-xl-3'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <label for="editAction" style={{ marginLeft: '20px' }}><h5>Edit Mode</h5></label>
                        </div>
                        <div className='col-xl-6'>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" role="switch" name='editAction' id='editAction' style={{ width: '50px', height: '20px' }} onChange={setEditAction} />

                            </div>
                        </div>
                    </div>


                </div>
                <div className='col-xl-9'>

                </div>
            </div>
            <div className='row p-3'>
                {course.map((value) => (
                    <div className='row' style={{ width: '100%', marginTop: '10px' }}>
                        <div className='col-xl-3 p-2' style={{ borderRight: '1px solid black' }}>
                            <div style={{
                                width: '90%',
                                height: '70px',
                                lineHeight: '60px',
                                border: '1px solid blue',
                                borderRadius: '20px',
                                textAlign: 'center',
                                fontSize: '25px',
                                fontWeight: 'bold',
                                color: 'blue'
                            }} onClick={!isEdit ? () => saveDataAndShow(value.id, value.name) : () => { showEditing(value.id, value.name) }}>
                                {value.name}
                            </div>
                        </div>
                        <div className='col-xl-9'>
                            <div className='row'>

                                {value.courseLevelResponseDTOs.map((level) => (
                                    
                                    <div className='col-xl-3 p-2'>
                                        <Link to={'/UpVideoAdmin'} style={{textDecoration : 'none'}} state={{id:level.id}}>
                                        <div style={{
                                            width: '90%',
                                            height: '50px',
                                            lineHeight: '50px',
                                            border: '1px solid blue',
                                            textAlign: 'center',
                                            fontSize: '20px',
                                            color: 'blue',
                                            margin: '0px auto'
                                        }}>
                                            {level.name}
                                        </div>
                                        </Link>
                                    </div>

                                ))}
                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Course Name :</Form.Label>
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
                            <Form.Label>Course Descriptions (|) :</Form.Label>
                            <textarea type="text" name="topic" id="topic" style={{ width: '100%' }} rows='3'
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreate((prevState) => {
                                        return { ...prevState, description: val };
                                    });
                                }}
                            />
                            {category.map((cate) => (
                                <>
                                    <div className="form-check form-switch p-2" key={cate.id}>
                                        <div className='row'>
                                            <div className='col-xl-10'>
                                                <label className="form-check-label" for="checkCategories">{cate.name}   </label>

                                            </div>
                                            <div className='col-xl-2'>
                                                <input className="form-check-input" type="checkbox" role="switch" name='checkCategories' id='checkCategories' value={cate.id} style={{ width: '50px', height: '20px' }} onChange={checkCategoriesChecked} />

                                            </div>

                                        </div>

                                    </div>
                                </>
                            ))}

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); CreateCourse(); }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* modal */}
            <Modal show={showLevel} onHide={handleCloseLevel}>
                <Modal.Header closeButton>
                    <Modal.Title>{nameCourse}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Level Name :</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreateLevel((prevState) => {
                                        return { ...prevState, name: val };
                                    });
                                }}
                            />
                            <Form.Label>Level Description :</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreateLevel((prevState) => {
                                        return { ...prevState, description: val };
                                    });
                                }}
                            />
                            <Form.Label>Level Price :</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreateLevel((prevState) => {
                                        return { ...prevState, price: val };
                                    });
                                }}
                            />

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLevel}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleCloseLevel(); CreateCourseLevel(); }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* modal */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>{dataEdit.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Change Course Name :</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                placeholder={dataEdit.name}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDateEdit((prevState) => {
                                        return { ...prevState, name: val };
                                    });
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleCloseEdit(); editCourse(); }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CourseAdminBody