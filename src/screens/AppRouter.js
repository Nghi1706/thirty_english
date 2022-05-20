import React from 'react'
import { Routes, Route, } from "react-router-dom";
import App from './App';
import Blog from './blog';
import Courses from './courses';
import ForLecturers from './forLecturers';
import Register from './register';
import Login from './login';
import Information from './information'
import Learning from './learning'
import EmployeeManager from './employeeManager';
export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Courses" element={<Courses />} />
                <Route path="/ForLecturers" element={<ForLecturers />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Information" element={<Information />} />
                <Route path="/Learning" element={<Learning />} />
                <Route path="/EmployeeManager" element={<EmployeeManager />} />

            </Routes>
        </>
    )
}
