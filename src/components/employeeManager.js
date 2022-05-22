import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarAmin from './navbarAmin';
const employManager = () => {
    var status = 'active'
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2'>
                    <NavbarAmin />
                </div>
                <div className='col-xl-10' style={{ padding: "10px" }}>
                    <div className='row'>
                        <div class="input-group mb-3" style={{ width: "70%" }}>
                            <input type="search" class="form-control" placeholder="Search" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <table class="table" style={{ width: "95%" }}>
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Full name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nguyen Van Nghi</td>
                                    <td>nguyenvannghi17062000@gmail.com</td>
                                    <td>Student</td>
                                    <td>active</td>
                                    <td>
                                        {status === 'active' ?
                                            <button type="button" class="btn btn-danger">inActive</button>
                                            :
                                            <button type="button" class="btn btn-success">Active</button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nguyen Van Nghi</td>
                                    <td>nguyenvannghi17062000@gmail.com</td>
                                    <td>Student</td>
                                    <td>active</td>
                                    <td>button</td>
                                </tr><tr>
                                    <th scope="row">1</th>
                                    <td>Nguyen Van Nghi</td>
                                    <td>nguyenvannghi17062000@gmail.com</td>
                                    <td>Student</td>
                                    <td>active</td>
                                    <td>button</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default employManager