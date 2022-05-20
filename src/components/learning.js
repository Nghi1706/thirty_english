import React from 'react'
import './CSS/learning.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import kite from '../img/kite.png';
import { Carousel } from 'react-bootstrap';

export default function learning() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-4'>
                    a
                </div>
                <div className='col-xl-4 learn'>
                    <Carousel variant="dark" interval={null}>
                        <Carousel.Item>
                            <center>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div style={{ width: '300px', height: '300px' }}>
                                                <h1>One</h1>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>/wʌn/</h1>
                                            <p>Do you want one or two?<br /></p>
                                            <p>There's only room for one person.<br /></p>
                                            <p>One more, please<br /></p>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </Carousel.Item>
                        <Carousel.Item>
                            <center>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={kite} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </Carousel.Item>
                        <Carousel.Item>
                            <center>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={kite} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div className='col-xl-4'>
                    b
                </div>
            </div>

        </div>
    )
}
