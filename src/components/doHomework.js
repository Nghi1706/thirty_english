import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import homeworksAPI from '../api/homeworkAPI';
import Header from './header';

const DoHomework = () => {
    const [wasdone, setWasDone] = useState(true);
    const [historye, setHistory] = useState([]);
    var history = [];
    const [question, setQuestion] = useState([]);
    const location = useLocation()
    const id = location.state.id;
    const email = localStorage.getItem('email');
    var dataRequest = [];
    const correctAnswer = (index) => {
        dataRequest[index].answer = document.querySelector(`input[name="answerCheck${index}"]:checked`).value
    };
    const getMyHomeworks = async () => {
        var data = await homeworksAPI.getQuestionbyId(id);
        if (data.status === 200) {
            setQuestion(data.data);
        } else {
            alert('fetch data fail !');
        }
    }
    const movehistory = (data) => {
        console.log(data)
        localStorage.setItem('homeworkResult', '');
        localStorage.setItem('homeworkResult', JSON.stringify(data));
        window.location = '/HomeworkResult'
    }
    const getHistory = async () => {
        var hito = await homeworksAPI.getHomeworkResultByName(email)
        if (hito.data.length > 0) {
            hito.data.map((histo) => {
                if (histo.homeworkId == id) {
                    history.push(histo)
                    console.log('ok')
                }
            })
            if (history.length < 1) {
                setWasDone(false)
                console.log('fails')
            }
            else {
                setHistory(history)
                setWasDone(true)
            }
        }
        else {
            setWasDone(false)
        }

    }
    const sendData = async () => {
        const dataCreate = {
            homeworkId: id,
            studentUsername: email,
            studentAnswerRequestDTOs: dataRequest
        };
        console.log(dataCreate)
        try {
            var submitHomework = await homeworksAPI.createHomeworkResult(dataCreate);
            if (submitHomework.status === 200) {
                if (window.confirm(`Account: ${submitHomework.data.studentUsername}\nGet: ${submitHomework.data.point.toFixed(2)} point`) === true) {
                    localStorage.setItem('homeworkResult', JSON.stringify(submitHomework.data));
                    window.location = '/HomeworkResult'
                }
            }
            else {
                alert("Submit fail !")
            }
        } catch (error) {
            alert("Submit fail !")

        }

    }
    console.log(question)
    useEffect(() => {
        getHistory();
        getMyHomeworks();
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row' style={{ position: 'fixed', width: '100%' }}>
                <Header />
            </div>
            <div className='row'>
                <div className='col-xl-2'>

                </div>
                <div className='col-xl-8'>
                    {
                        wasdone ?
                            (
                                <>
                                    <center style={{ marginTop: '100px' }}><h1>History</h1></center>
                                    <div className='row p-xl-5'>
                                        {historye.map((data, index) => {
                                            return (

                                                <div className='col-xl-12 p-2'>
                                                    <div className='row' style={{
                                                        width: '60%',
                                                        minHeight: '100px',
                                                        color: '#263238',
                                                        borderRadius: '20px',
                                                        padding: '20px',
                                                        border: '1px solid black',
                                                        margin: '0px auto',
                                                        marginBottom: '10px'
                                                    }}>
                                                        <h5>{'History ' + (index + 1) + ': '}</h5>
                                                        <div className='col-xl-6'>
                                                            <div className='row' >
                                                                <h3 style={{ textAlign: 'right' }}>Point : </h3>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-6'>
                                                            <h3 style={{ color: 'red' }}>{data.point}</h3>
                                                        </div>
                                                        <center>
                                                            <button type="button" class="btn btn-info" style={{ width: '30%', backgroundColor: 'wheat', border: 'none', borderRadius: '20px' }} onClick={() => movehistory(data)}>View</button>
                                                        </center>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <center style={{ marginBottom: '30px' }}>
                                        <Button variant="primary" onClick={() => { setWasDone(false) }}>
                                            Do it again.
                                        </Button>
                                    </center>
                                </>
                            )

                            : (
                                <>
                                    <center style={{ marginTop: '100px' }}><h1>Let's do it!</h1></center>
                                    <div className='row p-xl-5'>
                                        {question.map((questionShow, index) => {

                                            dataRequest.push({
                                                homeworkResultId: 0,
                                                answer: "answerOne"
                                            },)

                                            return (

                                                <div className='col-xl-12 p-2'>
                                                    <div style={{
                                                        width: '100%',
                                                        minHeight: '100px',
                                                        color: '#263238',
                                                        borderRadius: '20px',
                                                        padding: '25px',
                                                        border: '1px solid black',
                                                        marginBottom: '10px'
                                                    }}>
                                                        <h5>{'Topic ' + (index + 1) + ': ' + questionShow.topic}</h5>
                                                        <div className='row'>
                                                            <div className='col-xl-6'>
                                                                <div className='row'>
                                                                    <div className='col-xl-1'>
                                                                        <input type="radio" style={{ marginTop: '5px', width: '15px', height: '15px' }} name={`answerCheck${index}`} value="answerOne" onChange={() => correctAnswer(index)} />
                                                                    </div>
                                                                    <div className='col-xl-11'>
                                                                        <label style={{ width: '90%' }} >{questionShow.answerOne}</label>

                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-xl-1'>
                                                                        <input style={{ marginTop: '5px', width: '15px', height: '15px' }} type="radio" name={`answerCheck${index}`} value="answerTwo" onChange={() => correctAnswer(index)} />

                                                                    </div>
                                                                    <div className='col-xl-11'>
                                                                        <label style={{ width: '90%' }} >{questionShow.answerTwo}</label>


                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className='col-xl-6'>
                                                                <div className='row'>
                                                                    <div className='col-xl-1'>
                                                                        <input style={{ marginTop: '5px', width: '15px', height: '15px' }} type="radio" name={`answerCheck${index}`} value="answerThree" onChange={() => correctAnswer(index)} />
                                                                    </div>
                                                                    <div className='col-xl-11'>
                                                                        <label style={{ width: '90%' }} >{questionShow.answerThree}</label>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-xl-1'>
                                                                        <input style={{ marginTop: '5px', width: '15px', height: '15px' }} type="radio" name={`answerCheck${index}`} value="answerFour" onChange={() => correctAnswer(index)} />
                                                                    </div>
                                                                    <div className='col-xl-11'>
                                                                        <label style={{ width: '90%' }} >{questionShow.answerFour}</label>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <center style={{ marginBottom: '30px' }}>
                                        <Button variant="primary" onClick={sendData}>
                                            Submit
                                        </Button>
                                    </center>
                                </>
                            )
                    }


                </div>
                <div className='col-xl-2'>

                </div>

            </div>
        </div>
    )
}

export default DoHomework