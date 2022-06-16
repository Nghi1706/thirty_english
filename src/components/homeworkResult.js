import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const homeworkResult = () => {
    const data = localStorage.getItem('homeworkResult');
    var result = JSON.parse(data);
    const homeworkResult = result.homeworkResultResponses;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 p-3'>
                    <Link to={'/'} type="button" name="" value="Home" style={{ width: "40%" }} className='btn btn-primary'>Home</Link>
                </div>
                <div className='col-xl-10'>

                </div>
            </div>
            <div className='row p-3'>
                <center><h2>Homework Result</h2></center>

                {homeworkResult.map((data, index) => (
                    <div className='col-xl-4 p-2'>
                        <div style={{
                            width: '90%',
                            minHeight: '150px',
                            color: '#263238',
                            borderRadius: '20px',
                            border: '1px solid black',
                            marginTop: '10px',
                            padding: '20px'
                        }}>
                            <h5>{index + 1 + "." + data.topic}</h5>
                            <h6>Your answer: {data.yourAnwser}</h6>
                            <h6 style={{ color: 'red' }}>Correct answer: {data.correctAnswer}</h6>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default homeworkResult