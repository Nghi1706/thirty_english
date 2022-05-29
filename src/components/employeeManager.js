import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarAdmin } from './navbarAmin';
import { useState } from 'react'
import account from '../api/accountAPI';
const EmployManager = () => {
    const [isChangeData, setChangeData] = useState(false);
    const [dataAccount, setAccount] = useState([]);
    const [username, setUserName] = useState('');
    useEffect(() => {
        setChangeData(false);
        allAccountFunction()
    }, [isChangeData])
    const allAccountFunction = async () => {
        const data = await account.getAllAccount();
        if (data.status === 200) { setAccount(data.data); }
    };

    const searchAccount = async () => {
        // if (username.length <= 0) {
        //     setChangeData(true);
        // }
        // else {
        //     const data = await account.getAccount(username);
        //     console.log(data);
        //     if (data.status === 200) {
        //         setAccount(data.data);
        //     }
        //     else {
        //         window.alert("error!")
        //     }
        // }
    };
    const changeStatus = async () => {
        const email = window.event.srcElement.value;
        const change = await account.changeStatus(email);
        if (change.status !== 200) {
            console.log("fail!")
            window.alert("Change fail!")
        }
        setChangeData(true);

    };
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2'>
                    <NavbarAdmin />
                </div>
                <div className='col-xl-10' style={{ padding: "10px" }}>
                    <div className='row'>
                        <div className="input-group mb-3" style={{ width: "70%" }}>
                            <input type="search" className="form-control" placeholder="Search" onChange={(e) => {
                                const val = e.target.value;
                                setUserName(val);
                            }} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={searchAccount}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <table className="table" style={{ width: "95%" }}>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataAccount.length > 0 ? dataAccount.map((account, index) =>
                                (<tr>
                                    <th scope="row">{index}</th>
                                    <td>{account.email}</td>
                                    <td>{account.phone}</td>
                                    <td>{account.role}</td>
                                    <td>{account.status}</td>
                                    <td>
                                        <form>
                                            {account.status === 'active' ?
                                                <button type="button" className="btn btn-danger" value={account.email} onClick={changeStatus}>Deactive</button>
                                                :
                                                <button type="button" className="btn btn-success" value={account.email} onClick={changeStatus}>Active</button>
                                            }
                                        </form>

                                    </td>
                                </tr>)

                                ) : (
                                    <tr></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployManager