import React from 'react'
import { Button } from 'react-bootstrap';

const HeaderTeacher = ({ setValue, search, handleShow, buttonName }) => {

    return (

        <>
            <div className='row' style={{ padding: '20px', height: '80px' }}>
                <div className='col-xl-10'>
                    <div className="input-group mb-3">
                        <input type="search" className="form-control" placeholder="Search" onChange={(e) => {
                            const val = e.target.value;
                            setValue(val);
                        }} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={search}>Search</button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-2'>
                    <Button variant="primary" onClick={handleShow}>
                        {buttonName}
                    </Button>
                </div>
            </div>
        </>
    )
}
const HeaderAdmin = ({ setValue, search, handleShow, buttonName }) => {

    return (

        <>
            <div className='row' style={{ padding: '20px', height: '80px' }}>
                <div className='col-xl-10'>
                    <div className="input-group mb-3">
                        <input type="search" className="form-control" placeholder="Search" onChange={(e) => {
                            const val = e.target.value;
                            setValue(val);
                        }} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={search}>Search</button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-2'>
                    <Button variant="primary" onClick={handleShow}>
                        {buttonName}
                    </Button>
                </div>
            </div>
        </>
    )
}

export { HeaderTeacher, HeaderAdmin }