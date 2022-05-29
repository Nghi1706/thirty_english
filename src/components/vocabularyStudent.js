import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/learning.css';
import Header from './header'
import Learning from './learning';
export default function learning() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <Header />
                <div className='col-xl-4'>

                </div>
                <div className='col-xl-4 learn'>
                    <Learning />
                </div>
                <div className='col-xl-4'>

                </div>
            </div>

        </div>
    )
}
