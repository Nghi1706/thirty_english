import React from 'react'
import { Routes, Route, } from "react-router-dom";
import App from './App';
import Blog from './blog';
import Courses from './courses';
import ForLecturers from './forLecturers';
import Register from './register';
import Login from './login';
import Information from './information'
import Learning from './vocabularyStudent'
import EmployeeManager from './employeeManager';
import UpLoadCourse from './upLoadCourse';
import VocabularyPack from './vocabulary_pack';
import VocabularyPartScreen from './vocabulary_part';
import Vocabulary from './vocabulary';
import VocabularyStudent from './vocabularyPackStudent';
import VocabularyPartStudent from './vocabularyPartStudent';
import CourseAdmin from './courseAdmin';
import CoursesTeacher from './coursesTeacher';
import UploadVideo from './uploadVideo';
import MyCourses from './myCourses';
import HomeworksTeacher from './homeworksTeacher';
import InfoHomeworkTeacher from './infoHomeworkTeacher';
export default function AppRouter() {
    var role = localStorage.getItem('role');
    return (
        <>
            <Routes>
                <Route path="/Login" element={<Login />} />
                {/* student */}
                <Route path="/" element={(role === 'student') ? <App /> : <Login />} />
                <Route path="/Blog" element={(role === 'student') ? <Blog /> : <Login />} />
                <Route path="/Courses" element={(role === 'student') ? <Courses /> : <Login />} />
                <Route path="/ForLecturers" element={(role === 'student') ? <ForLecturers /> : <Login />} />
                <Route path="/Register" element={(role === 'student') ? <Register /> : <Login />} />
                <Route path="/Information" element={(role === 'student') ? <Information /> : <Login />} />
                <Route path="/Learning" element={(role === 'student') ? <Learning /> : <Login />} />
                <Route path="/VocabularyPacksS" element={(role === 'student') ? <VocabularyStudent /> : <Login />} />
                <Route path="/VocabularyPartS" element={(role === 'student') ? <VocabularyPartStudent /> : <Login />} />
                <Route path="/MyCourses" element={(role === 'student') ? <MyCourses /> : <Login />} />
                {/* admin */}
                <Route path="/CoursesAdmin" element={(role === 'admin') ? <CourseAdmin /> : <Login />} />
                <Route path="/EmployeeManager" element={(role === 'admin') ? <EmployeeManager /> : <Login />} />
                <Route path="/CoursesUpload" element={(role === 'admin') ? <UpLoadCourse /> : <Login />} />
                {/* teacher */}
                <Route path="/VocabularyPacks" element={(role === 'teacher') ? <VocabularyPack /> : <Login />} />
                <Route path="/HomeworksTeacher" element={(role === 'teacher') ? <HomeworksTeacher /> : <Login />} />
                <Route path="/VocabularyPart" element={(role === 'teacher') ? <VocabularyPartScreen /> : <Login />} />
                <Route path="/Vocabulary" element={(role === 'teacher') ? <Vocabulary /> : <Login />} />
                <Route path="/CoursesTeacher" element={(role === 'teacher') ? <CoursesTeacher /> : <Login />} />
                <Route path="/UploadVideo" element={(role === 'teacher') ? <UploadVideo /> : <Login />} />
                <Route path="/InfoHomeworkTeacher" element={(role === 'teacher') ? <InfoHomeworkTeacher /> : <Login />} />
            </Routes>
        </>
    )
}
