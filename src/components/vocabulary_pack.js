import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarTeacher } from './navbarAmin'
import { useState } from 'react'
import vocabularyAPI from '../api/vocavularyAPI';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Packs } from './helperVolcabulary';
import {HeaderTeacher} from './headerTeacher';

const VocabularyPack = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isReload, setReload] = useState(false);
    const [name, setName] = useState('');
    const [dataCreate, setCreate] = useState({ name: "", teachName: "" });
    const [allVocabulary, setAllVocabulary] = useState([]);
    const searchPacks = () => {
        console.log(name);
    }
    const searchAllPacks = async () => {
        var data = await vocabularyAPI.gelAllVocabularyPacks();
        if (data.status === 200) { setAllVocabulary(data.data); }
        else {
            alert("fetch data fail !");
        }
    }
    const createPackVocabulary = async () => {
        var data = await vocabularyAPI.createVocabularyPack(dataCreate);
        if (data.status === 200) {
            setReload(true);
        }
        else {
            alert('Create Pack Fail !')
        }
    }
    useEffect(() => {
        setReload(false);
        searchAllPacks()
    }, [isReload])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2'>
                    <NavbarTeacher />
                </div>
                <div className='col-xl-10'>
                    <div className='row' style={{ padding: '20px', height: '80px' }}>
                        <HeaderTeacher setValue={setName} search={searchPacks} handleShow={handleShow} buttonName={"Create Pack"} />

                        <Packs allVocabulary={allVocabulary} isTeacher={true} />
                    </div>

                </div>
                {/* modal */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Pack Vocabulary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Pack Vocabulary Name :</Form.Label>
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
                                <Form.Label>Teacher Name :</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setCreate((prevState) => {
                                            return { ...prevState, teachName: val };
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
                        <Button variant="primary" onClick={() => { handleClose(); createPackVocabulary() }}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >

        </div >
    )
}

export default VocabularyPack