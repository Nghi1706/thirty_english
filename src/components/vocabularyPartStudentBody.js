import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parts } from './helperVolcabulary';
import { useLocation } from 'react-router-dom';
import vocabularyAPI from '../api/vocavularyAPI';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'

const VocabularyPartStudentBody = () => {
    const searchAllPartsbyID = async () => {
        var data = await vocabularyAPI.getVocabularyPartbyID(id);
        if (data.status === 200) { setAllVocabularyParts(data.data); }
        else {
            alert("fetch data fail !");
        }
    }
    const location = useLocation();
    const [allVocabularyParts, setAllVocabularyParts] = useState([]);
    const id = location.state.id;
    useEffect(() => {
        searchAllPartsbyID();

    }, [])
    return (
        <>
            <div className='row'>
                <div className='col-xl-2'>

                </div>
                <div className='col-xl-8 p-3'>
                    <Parts allVocabularyParts={allVocabularyParts} isTeacher={false} />

                </div>
                <div className='col-xl-2'>

                </div>
            </div>
        </>
    )
}

export default VocabularyPartStudentBody