import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarTeacher } from './navbarAmin'
// import { useLocation } from "react-router";
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import vocabularyAPI from '../api/vocavularyAPI';
import { Parts } from './helperVolcabulary';
import { HeaderTeacher } from './headerTeacher';


const VocabularyPart = () => {
    const location = useLocation();
    const id = location.state.id;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [allVocabularyParts, setAllVocabularyParts] = useState([]);
    const [dataCreate, setCreate] = useState({ name: "", vocabularyPackId: id });
    const [isReload, setReload] = useState(false);
    const [name, setName] = useState('');
    const createPartVocabulary = async () => {
        console.log(dataCreate)
        if (dataCreate.name === '') {

        }
        else {
            var data = await vocabularyAPI.createVocabularyPart(dataCreate);
            if (data.status === 200) {
                setReload(true);
            }
            else {
                alert('Create Pack Fail !')
            }
        }
    }
    const searchAllPartsbyID = async () => {
        var data = await vocabularyAPI.getVocabularyPartbyID(id);
        if (data.status === 200) { setAllVocabularyParts(data.data); }
        else {
            alert("fetch data fail !");
        }
    }
    const searchParts = () => {

    }
    useEffect(() => {
        setReload(false);
        searchAllPartsbyID();

    }, [isReload])
    console.log(allVocabularyParts)
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2'>
                    <NavbarTeacher />
                </div>
                <div className='col-xl-10'>
                    <div className='row' style={{ padding: '20px', height: '80px' }}>
                        <HeaderTeacher setValue={setName} search={searchParts} handleShow={handleShow} buttonName={"Create Part"} />


                        <Parts allVocabularyParts={allVocabularyParts} isTeacher={true} />
                    </div>

                </div>
            </div>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Part Vocabulary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Part Vocabulary Name :</Form.Label>
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
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); createPartVocabulary() }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default VocabularyPart