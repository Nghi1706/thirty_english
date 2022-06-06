import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarTeacher } from './navbarAmin'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import vocabularyAPI from '../api/vocavularyAPI';
import { wait } from '@testing-library/user-event/dist/utils';

const Vocabulary = () => {
    const location = useLocation();
    const id = location.state.id;
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [allVocabulary, setAllVocabulary] = useState([]);
    const [dataCreate, setCreate] = useState({ ensWord: "", vnWord: "", spelling: "", wordType: "", example: "", vocabulatyPartId: id });
    const [dataEdit, setEdit] = useState({ id : 0, ensWord: "", vnWord: "", spelling: "", wordType: "", example: "", vocabulatyPartId: id });
    const [isReload, setReload] = useState(false);
    const [name, setName] = useState('');
    const searchVocabulary = () => {

    }
    const deleteVocabulary = async () =>{
        var deleter =  await vocabularyAPI.deleteVocabulary(dataEdit.id);
        if (deleter.status === 200) {
            setReload(true);
        }
        else {
            alert('Delete Vocabulary Fail !')
        }
    }
    const createVocabulary = async () => {
        console.log(dataCreate)
        var data = await vocabularyAPI.createVocabulary(dataCreate);
        if (data.status === 200) {
            setReload(true);
        }
        else {
            alert('Create Vocabulary Fail !')
        }
    }
    const EditVocabulary = async () => {
        console.log(dataEdit)
        var edit = await vocabularyAPI.editVocabulary(dataEdit);
        if (edit.status === 200) {
            setReload(true);
        }
        else {
            alert('Edit Vocabulary Fail !')
        }
    }
    const searchAllVocabularyByID = async () => {
        var data = await vocabularyAPI.getVocabularybyID(id);
        if (data.status === 200) { setAllVocabulary(data.data); }
        else {
            alert("fetch data fail !");
        }
    }
    const showEditing = (data) => {
        setEdit((prevState) => {
            return { ...prevState, 
                id : data.id,
                ensWord: data.ensWord,
                vnWord : data.vnWord,
                spelling: data.spelling,
                wordType: data.wordType,
                example:data.example,
                vocabulatyPartId: id
             };
        });
        handleShowEdit();
    }
    useEffect(() => {
        setReload(false);
        searchAllVocabularyByID();

    }, [isReload])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2'>
                    <NavbarTeacher />
                </div>
                <div className='col-xl-10'>
                    <div className='row' style={{ padding: '20px', height: '80px' }}>
                        <div className='col-xl-10'>
                            <div className="input-group mb-3" >
                                <input type="search" className="form-control" placeholder="Search" onChange={(e) => {
                                    const val = e.target.value;
                                    setName(val);
                                }} />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={searchVocabulary}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <Button variant="primary" onClick={handleShow}>
                                Add Vocabulary
                            </Button>
                        </div>
                    </div>
                    <div className='row'>
                        {allVocabulary.map((vocabulary, index) => (
                            <div className='col-xl-3'>
                                <center>
                                    <div className="card m-3" style={{ width: "80%", height: "250px", textAlign: 'center', borderColor: 'blue' }} onClick={() => showEditing(vocabulary)}>
                                        <div className="card-body">
                                            <p className="card-title" style={{ color: 'blue' }}>Word {index + 1}</p>
                                            <h5 className="card-text" style={{ color: '#1a45f0' }}>{vocabulary.ensWord + "(" + vocabulary.wordType + ")"}</h5>
                                            <p className="card-title" style={{ color: 'blue', textAlign: 'center' }}>{vocabulary.spelling}</p>
                                            <p className="card-title" style={{ color: 'red', fontSize: "20px", textAlign: 'center' }}>{vocabulary.vnWord}</p>
                                            <p className="card-title" style={{ color: 'black', fontSize: "16px" }}>{"Exp: " + vocabulary.example}</p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Vocabulary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-1">
                            <Form.Label>English word :</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreate((prevState) => {
                                        return { ...prevState, ensWord: val };
                                    });
                                }}
                            />
                            <Form.Label>Spelling :</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreate((prevState) => {
                                        return { ...prevState, spelling: val };
                                    });
                                }}
                            />
                            <Form.Label>Type :</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreate((prevState) => {
                                        return { ...prevState, wordType: val };
                                    });
                                }}
                            />
                            <Form.Label>Mean :</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreate((prevState) => {
                                        return { ...prevState, vnWord: val };
                                    });
                                }}
                            />
                            <Form.Label>Exp :</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setCreate((prevState) => {
                                        return { ...prevState, example: val };
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
                    <Button variant="primary" onClick={() => { handleClose(); createVocabulary() }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* modal */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Vocabulary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-1">
                            <Form.Label>English word :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={dataEdit.ensWord}
                                autoFocus
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setEdit((prevState) => {
                                        return { ...prevState, ensWord: val };
                                    });
                                }}
                            />
                            <Form.Label>Spelling :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={dataEdit.spelling}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setEdit((prevState) => {
                                        return { ...prevState, spelling: val };
                                    });
                                }}
                            />
                            <Form.Label>Type :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={dataEdit.wordType}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setEdit((prevState) => {
                                        return { ...prevState, wordType: val };
                                    });
                                }}
                            />
                            <Form.Label>Mean :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={dataEdit.vnWord}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setEdit((prevState) => {
                                        return { ...prevState, vnWord: val };
                                    });
                                }}
                            />
                            <Form.Label>Exp :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={dataEdit.example}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setEdit((prevState) => {
                                        return { ...prevState, example: val };
                                    });
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="warning" onClick={() => {handleCloseEdit() ; deleteVocabulary()}}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleCloseEdit(); EditVocabulary() }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Vocabulary