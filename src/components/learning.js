import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import vocabularyAPI from '../api/vocavularyAPI';
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
const Learning = () => {
    const location = useLocation();
    const id = location.state.id;
    const [allVocabulary, setAllVocabulary] = useState([]);
    const searchAllVocabularyByID = async () => {
        var data = await vocabularyAPI.getVocabularybyID(id);
        if (data.status === 200) { setAllVocabulary(data.data); }
        else {
            alert("fetch data fail !");
        }
    }
    useEffect(() => {
        searchAllVocabularyByID();
    }, [])
    return (
        <Carousel variant="dark" interval={null} indicators={true}>
            {allVocabulary.map((vocabulary) => (
                <Carousel.Item>
                    <center>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front p-2 pt-4">
                                    <h1 style={{ color: 'red', fontWeight: 'bold' }}>{vocabulary.ensWord + " (" + vocabulary.wordType + ")"}</h1>
                                    <h2>{vocabulary.spelling}</h2>
                                </div>
                                <div className="flip-card-back p-2 pt-4 pl-2">
                                    <h4>{"Mean: " + vocabulary.vnWord}</h4>
                                    <h5 style={{ textAlign: "left", marginLeft: '15px' }}>{"Exp : " + vocabulary.example}</h5>
                                </div>
                            </div>
                        </div>
                    </center>
                </Carousel.Item>
            ))}

        </Carousel>
    )
}

export default Learning