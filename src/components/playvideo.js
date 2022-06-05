import React from 'react'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import storage from '../firebase/firebase';
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';
import { ref, getDownloadURL } from "firebase/storage";
const Playvideo = () => {
    // const [vedio, loadVedio] = useState("");
    // const url = 'https://drive.google.com/file/d/1MF1JQn1H3QZXre1cU65V4GZ3cYNRKVVg/view?usp=sharing';
    // const video = document.getElementById('video')
    // video.setAttribute('src', url);
    // const url = 'https://firebasestorage.googleapis.com/v0/b/thirty-english.appspot.com/o/courses%2F4%2F1%2Ftesstnew?alt=media&token=7de810a2-8601-437c-9636-72f2fb4c6266';
    // const fetchVideo = async (url) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = 'blob';
    //     xhr.onload = () => {
    //         const blob = xhr.response;
    //     };
    //     xhr.open('GET', url);
    //     xhr.send();

    //     // Or inserted into an <img> element
    //     const img = document.getElementById('myVideo');
    //     img.setAttribute('src', url);
    // }
    // fetchVideo(url)
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Header />
                </div>
                <div className='row'>
                    <iframe width="749" height="421" src="https://www.youtube.com/embed/MB8Xyq8QhkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
            </div>

        </>
    )
}

export default Playvideo