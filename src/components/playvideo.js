import React, { useState, useEffect } from 'react'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import videoAPI from '../api/video';
const Playvideo = () => {
    const data = useLocation();
    const id = data.state.courseLevelId;
    console.log(id)
    const [videos, setVideos] = useState([]);
    const getAllVideo = async () => {
        var data = await videoAPI.gelAllVideo(id);
        if (data.status === 200) {
            setVideos(data.data);
        }
        else {
            alert('fetch data fail');
        }
    }
    useEffect(() => {
        getAllVideo();
    }, [])

    return (
        <>
            <div className='container-fluid containInfo'>
                <div className='row' style={{ position: 'fixed', width: '100%' }}>
                    <Header style />
                </div>
                <div className='row' style={{ marginTop: '50px', padding: '15px' }}>
                    <div className='col-xl-2'>

                    </div>
                    <div className='col-xl-8'>
                        {videos.map((video) => (
                            <div className='row p-5'>
                                <center>
                                    <h1 style={{ color: 'white' }}>{video.name}</h1>
                                    {video.urlYoutube === null ? (<h2>Video is Comming !</h2>) : (
                                        <iframe style={{ width: '700px', height: '450px' }} src={video.urlYoutube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                    )}

                                </center>
                            </div>
                        ))}

                    </div>
                    <div className='col-xl-2'>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Playvideo