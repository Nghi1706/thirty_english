import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderTeacher = ({ setValue, search, handleShow, buttonName, id }) => {

    return (

        <>
            <div className='row' style={{ padding: '20px', height: '80px', paddingRight: '0px' }}>
                <div className='col-xl-9'>
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
                <div className='col-xl-3'>
                    <Button variant="primary" onClick={handleShow} style={{ marginRight: '20px' }}>
                        {buttonName}
                    </Button>
                    {id ? <Link to={'/HomeworksTeacher'} state={{ idCourseLevel: id }}><button type="button" className='btn btn-primary'>Home works</button></Link> : (<></>)}

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