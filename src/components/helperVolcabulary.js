import React from 'react'
import { Link } from "react-router-dom";


const Packs = ({ allVocabulary, isTeacher }) => {
    return (
        <div className='row'>
            {allVocabulary.map((vocabulary) => (
                <div className='col-xl-3' key={vocabulary.id}>
                    <center>
                        <div className="card mb-3" style={{ width: "100%", textAlign: 'center', borderColor: '#659DBD' }}>
                            <div className="card-body">
                                <h5 className="card-text" style={{ color: '#659DBD' }}>{vocabulary.name}</h5>
                                <center><Link type='button' to={isTeacher ? "/VocabularyPart" : "/VocabularyPartS"} state={{ id: vocabulary.id }} className="btn btn-outline-primary" style={{ color: '#659DBD' }}>View Pack</Link></center>
                            </div>
                        </div>
                    </center>
                </div >
            ))}


        </div >
    )
}
const Parts = ({ allVocabularyParts, isTeacher }) => {
    return (
        <div className='row'>
            {allVocabularyParts.map((vocabulary, index) => (
                <div className='col-xl-3'>
                    <center>
                        <div className="card" style={{ width: "15rem", textAlign: 'center', borderColor: '#659DBD' }}>
                            <div className="card-body">
                                <p className="card-title" style={{ color: '#659DBD' }}>Part {index + 1}</p>
                                <h5 className="card-text" style={{ color: '#659DBD' }}>{vocabulary.name}</h5>

                                <h5 className="card-text" style={{ color: '#659DBD' }}>{vocabulary.quantity}</h5>
                                <center><Link type='button' to={isTeacher ? "/Vocabulary" : "/Learning"} state={{ id: vocabulary.id }} className="btn btn-outline-primary" style={{ color: '#659DBD' }}>View Part</Link></center>
                            </div>
                        </div>
                    </center>
                </div>
            ))}
        </div>
    )
}

export { Packs, Parts }