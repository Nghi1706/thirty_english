import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import storage from '../firebase/firebase';
import { NavbarTeacher } from './navbarAmin';
import Button from 'react-bootstrap/Button'
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import videoAPI from '../api/video';
import {
    ref,
    uploadBytesResumable, getDownloadURL
} from "firebase/storage"


const UploadVideo = () => {
    const location = useLocation();
    const [percent, setPercent] = useState(0);
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [isShow, setShow] = useState(false);
    const upload = async () => {
        setShow(true);
        if (file == null)
            return;
        const storageRef = ref(storage, `/courses/${location.state.idCourse}/${location.state.idCategory}/${fileName}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then( async (url) => {
                    console.log(url);
                    var upvideo = await videoAPI.createVideo({courseLevelId : location.state.idCategory, name: fileName, urlFisebase: url })
                    if( upvideo.status !== 200){
                        alert('upload again !');
                    }
                    else {
                        alert('upload success !')
                    }
                });
            }
        );
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-2'>
                        <NavbarTeacher />
                    </div>
                    <div className='col-xl-10'>
                        <div className='row'>

                            <div className='col-xl-4'>
                            </div>
                            <div className='col-xl-4 p-3'>
                                <center><h1>Upload video</h1></center>
                                <br></br>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Nhập tên file</Form.Label>
                                        <Form.Control type="text" onChange={(e) => { setFileName(e.target.value) }} />
                                        <Form.Label>Chọn file</Form.Label>
                                        <Form.Control type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
                                    </Form.Group>

                                    <center>
                                        <Button variant="primary" type="button" onClick={upload}>
                                            Upload File
                                        </Button>

                                    </center>

                                    {isShow ? (<p>{percent} % done</p>) : (<></>)}
                                </Form>

                            </div>
                            <div className='col-xl-4'>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default UploadVideo