
import './App.css'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/home/Home";

import Login from "./component/login/Login";
import Daisboard from './component/Admin/Daisboard';
import AddStudent from './component/Admin/AddStudent';
import Classes from './component/Admin/Classes';
import StudentRegistatioForm from './component/Admin/StudentRegistatioForm';



function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="daisboard" element={<Daisboard/>}>
             <Route path='addStudent' element={<AddStudent/>}/>
             <Route path='classes' element={<Classes/>}/>
             <Route path='studentRegistration' element={< StudentRegistatioForm/>}/>
             
        </Route>
        
      </Routes>
      <Toaster/>
    </BrowserRouter>
      
    </>
  )
}

export default App
