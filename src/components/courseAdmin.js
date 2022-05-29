import React from 'react'
import { NavbarAdmin } from './navbarAmin'
import CourseAdminBody from './courseAdminBody'
import 'bootstrap/dist/css/bootstrap.min.css';

const courseAdmin = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-2'>
                        <NavbarAdmin />

                    </div>
                    <div className='col-xl-10'>
                        <CourseAdminBody />

                    </div>


                </div>
            </div>
        </>

    )
}

export default courseAdmin