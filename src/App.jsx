
import './App.css'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/home/Login';
import AdminDaisboard from './admin/AdminDaisboard';

import StudentDaisboard from './studentDaisboard/StudentDaisboard';
import SuperAdminDaisboard from './superAdmin/SuperAdminDaisboard ';
import Abc from './superAdmin/Abc';
import NewPassword from './component/home/NewPassword';
import AddCourse from './superAdmin/AddCourse';
import CreateBranch from './superAdmin/CreateBranch';
import Session from './superAdmin/Session';
import Subjetc from './superAdmin/Subjetc';
import Section from './superAdmin/Section';
import Year from './superAdmin/Year';
import Semester from './superAdmin/Semester';


function App() {


  return (
    <>

      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/adminDaisboard" element={<AdminDaisboard />} />
        <Route path="/superAdminDaisboard" element={<SuperAdminDaisboard />} >
          <Route path='abc' element={<Abc/>}/>
          <Route path='addCourse' element={<AddCourse/>}/>
          <Route path='createBranch' element={<CreateBranch/>}/>
          <Route path='create/session' element={<Session/>}/>
          <Route path='add/subject' element={<Subjetc/>}/>
          <Route path='add/cection' element={<Section/>}/>
          <Route path='add/Year' element={<Year/>}/>
          <Route path='add/Semester' element={<Semester/>}/>
        </Route>
        <Route path="/studentDaisboard" element={<StudentDaisboard/>} />
        </Routes>
        <Toaster />
      </BrowserRouter>

    </>
  )
}

export default App
