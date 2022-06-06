import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarAdmin } from './navbarAmin'
import { useLocation } from 'react-router-dom';
import videoAPI from '../api/video';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const UpvideoAdmin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const data = useLocation();
  const id = data.state.id;
  const [isReload, setReload] = useState(false)
  const [dataVideo, setDataVideo] = useState([])
  const [dataEdit, setDataEdit] = useState({ id: 0, urlYoutube: '' });
  const [name, setName] = useState('');
  const getAllVideo = async () => {
    var data = await videoAPI.gelAllVideo(id);
    if (data.status === 200) {
      setDataVideo(data.data);
    }
    else {
      alert('fetch data fail');
    }
  }
  const deleteVideo = async () => {
    console.log(dataEdit)

  }
  const showEditting = (data) => {
    setName(data.name)
    console.log(data);
    setDataEdit((prevState) => {
      return {
        ...prevState,
        id: data.id,
        urlYoutube: data.urlYoutube
      };
    });
  }
  const editVideo = async () => {
    var update = await videoAPI.updateVideo(dataEdit);
    if (update.status === 200) {
      setReload(true);
    }
    else {
      alert('update video fail !')
    }
  }
  useEffect(() => {
    setReload(false);
    getAllVideo()

  }, [isReload])


  console.log(dataVideo)
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-2'>
            <NavbarAdmin />

          </div>
          <div className='col-xl-10 p-2'>
            <center><h1>Videos</h1></center>
            <div className='row'>
              <div className='col-xl-2'>

              </div>
              <div className='col-xl-8'>
                <div className='row p-2'>

                  {dataVideo.map((video) => (

                    <div className='col-xl-6 mb-2'>
                      <div style={{
                        width: '90%',
                        height: '200px',
                        border: '1px solid black',
                        borderRadius: '25px',
                        padding: '20px',
                      }}>
                        <h5 style={{ color: '#f5ad42' }}>Download from FireBase: </h5>
                        <a href={video.urlFisebase} target="_blank">{video.name}</a>
                        <h6 style={{ color: '#b81d1d', marginTop: '10px' }}>Link youtube:</h6>
                        {video.urlYoutube === null ? (<p>null</p>) : (<a href={video.urlYoutube} target="_blank">{video.name}</a>)}
                        <center><button type="button" className='btn btn-primary' style={{ height: '30px', lineHeight: '10px' }} onClick={() => { handleShow(); showEditting(video) }}>Edit</button></center>
                      </div>

                    </div>
                  ))}


                </div>
              </div>
              <div className='col-xl-2'>

              </div>

            </div>
          </div>


        </div>
        {/* modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Set url Youtube :</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  placeholder={dataEdit.urlYoutube === null ? 'null' : dataEdit.urlYoutube}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDataEdit((prevState) => {
                      return { ...prevState, urlYoutube: val };
                    });
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => { handleClose(); deleteVideo() }}>
              delete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => { handleClose(); editVideo(); }}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default UpvideoAdmin