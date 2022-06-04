import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarTeacher } from './navbarAmin'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import homeworksAPI from '../api/homeworkAPI';

export const InfoHomeworkTeacher = () => {
    const [question, setQuestion] = useState([]);
    const [isReload, setReload] = useState(false);
    const location = useLocation()
    const id = location.state.id;
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
        try {
            var newQuestion = await homeworksAPI.createQuestion(dataCreate);
            if (newQuestion.status === 200) {
                setReload(true);
            }
            else {
                alert("create fail !")
            }
        } catch (error) {
            alert("create fail !")

        }

    }
    const correctAnswer = async () => {
        var correctAnswer = document.querySelector('input[name="answerCheck"]:checked').value;
        setCreate((prevState) => {
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
    useEffect(() => {
        setReload(false);
        getQuestions();
    }, [isReload])
    console.log(question)
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

                                <div style={{
                                    width: '90%',
                                    minHeight: '150px',
                                    color: '#263238',
                                    borderRadius: '20px',
                                    padding: '10px',
                                    border: '1px solid black',
                                    marginBottom: '10px'
                                }}>
                                    <h5>{'Topic' + index + 1 + ': ' + qstion.topic}</h5>
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
                    <div class="form-check">
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
                    <div class="form-check">
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
                        <Button variant="primary" onClick={createQuestion}>
                            Create
                        </Button>
                    </center>
                </div>
            </div>

        </div >
    )
}
