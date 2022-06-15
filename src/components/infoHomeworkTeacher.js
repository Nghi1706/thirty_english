import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarTeacher } from './navbarAmin'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import homeworksAPI from '../api/homeworkAPI';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export const InfoHomeworkTeacher = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [question, setQuestion] = useState([]);
    const [isReload, setReload] = useState(false);
    const location = useLocation()
    const id = location.state.id;
    const idCourseLevel = location.state.idCourseLevel;
    const [dataEdit, setDataEdit] = useState({
        homeworkId: id,
        id: 0,
        answerFour: "",
        answerOne: "",
        answerThree: "",
        answerTwo: "",
        correctAnswer: "",
        topic: ""
    })
    const [dataCreate, setCreate] = useState({
        homeworkId: id,
        topic: "",
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        answerFour: "",
        correctAnswer: "answerOne"
    });

    const createQuestion = async () => {
        if (dataCreate.topic === '' || dataCreate.answerOne === '' || dataCreate.answerTwo === '' || dataCreate.answerThree === '' || dataCreate.answerFour === '') {

        }
        else {
            var newQuestion = await homeworksAPI.createQuestion(dataCreate);
            if (newQuestion.status === 200) {
                setCreate((prevState) => {
                    return {
                        ...prevState,
                        homeworkId: id,
                        topic: "",
                        answerOne: "",
                        answerTwo: "",
                        answerThree: "",
                        answerFour: "",
                        correctAnswer: "answerOne"
                    };
                });
                document.getElementById('topic').value = '';
                document.getElementById('answerOne').value = '';
                document.getElementById('answerTwo').value = '';
                document.getElementById('answerThree').value = '';
                document.getElementById('answerFour').value = '';
                setReload(true);
            }
            else {
                alert("create fail !")
            }
        }

    }
    const correctAnswer = async () => {
        var correctAnswer = document.querySelector('input[name="answerCheck"]:checked').value;
        setCreate((prevState) => {
            return { ...prevState, correctAnswer: correctAnswer };
        });
    }
    const correctAnswerEdit = async () => {
        var correctAnswer = document.querySelector('input[name="answerCheckEdit"]:checked').value;
        setDataEdit((prevState) => {
            return { ...prevState, correctAnswer: correctAnswer };
        });
    }
    const getQuestions = async () => {
        try {
            var questions = await homeworksAPI.getQuestionsTeacherById(id);
            if (questions.status === 200) {
                setQuestion(questions.data)
            }
            else {
                alert("fetch data fail !")
            }
        } catch (error) {
            alert("fetch data fail !")
        }
    }
    const showEditing = (data) => {
        setDataEdit((prevState) => {
            return {
                ...prevState,
                id: data.id,
                answerFour: data.answerFour,
                answerOne: data.answerOne,
                answerThree: data.answerThree,
                answerTwo: data.answerTwo,
                correctAnswer: data.correctAnswer,
                topic: data.topic
            };
        });
        handleShow();

    }
    const renderSwitch = (data) => {
        switch (data) {
            case 'answerOne':
                return (
                    <div className="form-check">
                        <p>Answer :</p>
                        <input type="radio" name="answerCheckEdit" value="answerOne" onChange={correctAnswerEdit} checked />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerOne" id='answerOne' style={{ width: '90%' }} placeholder={dataEdit.answerOne}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerOne: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerTwo" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerTwo" id='answerTwo' style={{ width: '90%' }} placeholder={dataEdit.answerTwo}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerTwo: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerThree" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerThree" id='answerThree' style={{ width: '90%' }} placeholder={dataEdit.answerThree}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerThree: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerFour" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerFour" id='answerFour' style={{ width: '90%' }} placeholder={dataEdit.answerFour}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerFour: val };
                                    });
                                }}
                            /></label><br />
                    </div>

                )
            case 'answerTwo':
                return (
                    <div className="form-check">
                        <p>Answer :</p>
                        <input type="radio" name="answerCheckEdit" value="answerOne" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerOne" id='answerOne' style={{ width: '90%' }} placeholder={dataEdit.answerOne}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerOne: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerTwo" onChange={correctAnswerEdit} checked />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerTwo" id='answerTwo' style={{ width: '90%' }} placeholder={dataEdit.answerTwo}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerTwo: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerThree" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerThree" id='answerThree' style={{ width: '90%' }} placeholder={dataEdit.answerThree}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerThree: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerFour" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerFour" id='answerFour' style={{ width: '90%' }} placeholder={dataEdit.answerFour}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerFour: val };
                                    });
                                }}
                            /></label><br />
                    </div>

                )
            case 'answerThree':
                return (
                    <div className="form-check">
                        <p>Answer :</p>
                        <input type="radio" name="answerCheckEdit" value="answerOne" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerOne" id='answerOne' style={{ width: '90%' }} placeholder={dataEdit.answerOne}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerOne: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerTwo" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerTwo" id='answerTwo' style={{ width: '90%' }} placeholder={dataEdit.answerTwo}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerTwo: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerThree" onChange={correctAnswerEdit} checked />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerThree" id='answerThree' style={{ width: '90%' }} placeholder={dataEdit.answerThree}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerThree: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerFour" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerFour" id='answerFour' style={{ width: '90%' }} placeholder={dataEdit.answerFour}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerFour: val };
                                    });
                                }}
                            /></label><br />
                    </div>

                )
            default:
                return (
                    <div className="form-check">
                        <p>Answer :</p>
                        <input type="radio" name="answerCheckEdit" value="answerOne" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerOne" id='answerOne' style={{ width: '90%' }} placeholder={dataEdit.answerOne}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerOne: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerTwo" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerTwo" id='answerTwo' style={{ width: '90%' }} placeholder={dataEdit.answerTwo}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerTwo: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerThree" onChange={correctAnswerEdit} />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerThree" id='answerThree' style={{ width: '90%' }} placeholder={dataEdit.answerThree}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerThree: val };
                                    });
                                }}
                            /></label><br />
                        <input type="radio" name="answerCheckEdit" value="answerFour" onChange={correctAnswerEdit} checked />
                        <label style={{ width: '90%' }} >
                            <input type="text" name="answerFour" id='answerFour' style={{ width: '90%' }} placeholder={dataEdit.answerFour}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setDataEdit((prevState) => {
                                        return { ...prevState, answerFour: val };
                                    });
                                }}
                            /></label><br />
                    </div>
                )
        }
    }
    const updateHomework = async () => {
        console.log(dataEdit)
        var editQuestion = await homeworksAPI.editQuestion(dataEdit);
        if (editQuestion.status === 200) {
            console.log(editQuestion);
            setReload(true);
        }
        else {
            console.log(editQuestion);
            setReload(true);
            alert('update fail!')
        }
    }
    useEffect(() => {
        setReload(false);
        getQuestions();
    }, [isReload])
    return (
        <div className='container-fluid'>

            <div className='row'>
                <div className='col-xl-2'>
                    <NavbarTeacher />
                </div>
                <div className='col-xl-7'>
                    <div className='row p-5'>
                        <div className='col-xl-2'>

                        </div>

                        <div className='col-xl-10'>
                            {question.map((qstion, index) => (

                                <div onClick={() => { showEditing(qstion) }}
                                    style={{
                                        width: '90%',
                                        minHeight: '150px',
                                        color: '#263238',
                                        borderRadius: '20px',
                                        padding: '10px',
                                        border: '1px solid black',
                                        marginBottom: '10px'

                                    }}
                                >
                                    <h5>{'Topic ' + (index + 1) + ': ' + qstion.topic}</h5>
                                    <div className='row'>
                                        <div className='col-xl-3'>
                                            answerOne :
                                        </div>
                                        <div className='col-xl-9'>
                                            {qstion.answerOne}
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3'>
                                            answerTwo :
                                        </div>
                                        <div className='col-xl-9'>
                                            {qstion.answerTwo}
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3'>
                                            answerThree :
                                        </div>
                                        <div className='col-xl-9'>
                                            {qstion.answerThree}

                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3'>
                                            answerFour :
                                        </div>
                                        <div className='col-xl-9'>
                                            {qstion.answerFour}

                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3'>
                                            correct answer :
                                        </div>
                                        <div className='col-xl-9' style={{ color: 'red' }}>
                                            {qstion.correctAnswer}
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                        <div className='col-xl-2'>

                        </div>
                    </div>
                </div>
                <div className='col-xl-3 pt-5' style={{ position: 'fixed', right: '0px', top: '0px' }}>
                    Create Question
                    <div className="form-check">
                        <p>Topic :</p>
                        <textarea type="text" name="topic" id="topic" style={{ width: '90%' }} rows='3'
                            onChange={(e) => {
                                const val = e.target.value;
                                setCreate((prevState) => {
                                    return { ...prevState, topic: val };
                                });
                            }}
                        />
                    </div>
                    <div className="form-check">
                        <p>Answer :</p>
                        <input type="radio" name="answerCheck" value="answerOne" checked onChange={correctAnswer} />
                        <label style={{ width: '90%' }} > <input type="text" name="answerOne" id='answerOne' style={{ width: '90%' }} placeholder={'answerOne'}
                            onChange={(e) => {
                                const val = e.target.value;
                                setCreate((prevState) => {
                                    return { ...prevState, answerOne: val };
                                });
                            }}
                        /></label><br />
                        <input type="radio" name="answerCheck" value="answerTwo" onChange={correctAnswer} />
                        <label style={{ width: '90%' }} > <input type="text" name="answerTwo" id='answerTwo' style={{ width: '90%' }} placeholder={'answerTwo'}
                            onChange={(e) => {
                                const val = e.target.value;
                                setCreate((prevState) => {
                                    return { ...prevState, answerTwo: val };
                                });
                            }}
                        /></label><br />
                        <input type="radio" name="answerCheck" value="answerThree" onChange={correctAnswer} />
                        <label style={{ width: '90%' }} > <input type="text" name="answerThree" id='answerThree' style={{ width: '90%' }} placeholder={'answerThree'}
                            onChange={(e) => {
                                const val = e.target.value;
                                setCreate((prevState) => {
                                    return { ...prevState, answerThree: val };
                                });
                            }}
                        /></label><br />
                        <input type="radio" name="answerCheck" value="answerFour" onChange={correctAnswer} />
                        <label style={{ width: '90%' }} > <input type="text" name="answerFour" id='answerFour' style={{ width: '90%' }} placeholder={'answerFour'}
                            onChange={(e) => {
                                const val = e.target.value;
                                setCreate((prevState) => {
                                    return { ...prevState, answerFour: val };
                                });
                            }}
                        /></label><br />
                    </div>

                    <center>
                        <Button variant="primary" style={{ width: '100px', borderRadius: '20px' }} onClick={createQuestion}>
                            Create
                        </Button>
                    </center>
                    <center>
                        <Link to={'/HomeworksTeacher'} state={{ idCourseLevel: idCourseLevel }}>
                            <Button variant="success" style={{ width: '100px', borderRadius: '20px', marginTop: '100px' }} onClick={createQuestion}>
                                Done
                            </Button>
                        </Link>
                    </center>
                </div>
            </div>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <div className="form-check">
                                <p>Topic :</p>
                                <textarea type="text" name="topic" id="topic" style={{ width: '90%' }} rows='3'
                                    placeholder={dataEdit.topic}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setDataEdit((prevState) => {
                                            return { ...prevState, topic: val };
                                        });
                                    }}
                                />
                            </div>

                            {renderSwitch(dataEdit.correctAnswer)}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); updateHomework(); }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
