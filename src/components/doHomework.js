import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import homeworksAPI from '../api/homeworkAPI';
import Header from './header';

const DoHomework = () => {
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
    const sendData = async () => {
        const dataCreate = {
            homeworkId: id,
            studentUsername: email,
            studentAnswerRequestDTOs: dataRequest
        };
        console.log(dataCreate)
        try {
            var newQuestion = await homeworksAPI.createHomeworkResult(dataCreate);
            if (newQuestion.status === 200) {
                alert("Submit success !")
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
                    <center><h1>Let's do it!</h1></center>
                    <div className='row'>
                        {question.map((questionShow, index) => {

                            dataRequest.push({
                                homeworkResultId: 0,
                                answer: "answerOne"
                            },)

                            return (

                                <div className='col-xl-6 p-2'>
                                    <div style={{
                                        width: '100%',
                                        minHeight: '150px',
                                        color: '#263238',
                                        borderRadius: '20px',
                                        padding: '10px',
                                        border: '1px solid black',
                                        marginBottom: '10px'
                                    }}>
                                        <h5>{'Topic' + index + 1 + ': ' + questionShow.topic}</h5>
                                        <input type="radio" name={`answerCheck${index}`} value="answerOne" onChange={() => correctAnswer(index)} />
                                        <label style={{ width: '90%' }} >{questionShow.answerOne}</label><br />
                                        <input type="radio" name={`answerCheck${index}`} value="answerTwo" onChange={() => correctAnswer(index)} />
                                        <label style={{ width: '90%' }} >{questionShow.answerTwo}</label><br />
                                        <input type="radio" name={`answerCheck${index}`} value="answerThree" onChange={() => correctAnswer(index)} />
                                        <label style={{ width: '90%' }} >{questionShow.answerThree}</label><br />
                                        <input type="radio" name={`answerCheck${index}`} value="answerFour" onChange={() => correctAnswer(index)} />
                                        <label style={{ width: '90%' }} >{questionShow.answerFour}</label><br />




                                    </div>
                                </div>



                            )
                        })}
                    </div>

                    <center>
                        <Button variant="primary" onClick={sendData}>
                            Submit
                        </Button>
                    </center>

                </div>
                <div className='col-xl-2'>

                </div>

            </div>
        </div>
    )
}

export default DoHomework