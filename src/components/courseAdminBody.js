import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderAdmin } from './headerTeacher';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import courseAPI from '../api/courseAPI';

const CourseAdminBody = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState([])
    const [course, setCourse] = useState([])
    const [dataCreate, setCreate] = useState({ name: "", categoties: [], description: "" });
    const [isReload, setReload] = useState(false);
    const CreateCourse = async () => {
        var data = await courseAPI.createCourse(dataCreate);
        if (data.status === 200) {
            setReload(true);
        }
        else {
            alert('Create Pack Fail !')
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

    useEffect(() => {
        setReload(false);
        getAllCategory();
        getAllCourse();
    }, [isReload])
    return (
        <>
            <HeaderAdmin buttonName={"Create Course"} handleShow={handleShow} />
            <div className='row p-3'>
                {course.map((value) => (

                    <div className='col-xl-3 m-1'>
                        <div style={{
                            width: '90%',
                            height: '100px',
                            lineHeight: '85px',
                            border: '3px solid blue',
                            borderRadius: '20px',
                            textAlign: 'center',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: 'blue'
                        }}>
                            {value.name}
                        </div>
                    </div>

                ))}
            </div>

            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Category Name :</Form.Label>
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
        </>
    )
}

export default CourseAdminBody