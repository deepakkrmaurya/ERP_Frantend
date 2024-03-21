
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
        </Route>
        <Route path="/studentDaisboard" element={<StudentDaisboard/>} />
        </Routes>
        <Toaster />
      </BrowserRouter>

    </>
  )
}

export default App
