import React, { useEffect, useState } from 'react'
import '../superAdmin/CSS/subject.css'
import { CiEdit } from "react-icons/ci";
import { BsXLg } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { addSubject, lodSubject } from '../component/stoer/slice/subject.cslice'
const Subjetc = () => {
    const dispatch = useDispatch()
    const [lodsub,setlodSub]=useState([])
    const [subject,setSubject]=useState({
        subjectName:"",
        subjectType:"",
        subjectCode:""
    })

    const  handleInputChange= (e) =>{
       setSubject({...subject,[e.target.name]: e.target.value})
   }

    const handalSubmit = async(e)=>{
        e.preventDefault();
        const res = await dispatch(addSubject(subject))
        if(res.payload.success)
        loadingSubject()
    }

    const loadingSubject = async()=>{
          const res = await dispatch(lodSubject())
          setlodSub(res.payload);
    }

    useEffect(()=>{
      loadingSubject()
    },[])

    return (
        <div className="container">
            <div className=' flex items-center'>
            <img className=' h-20 w-20' src="/logo.png" alt="" />
            <img className=' w-[700px]' src="/AKTU Logo.png" alt="" />
            </div>
            <form onSubmit={handalSubmit} className='subject'>
                <h1 className='edit-subject'>Edit Subject</h1>
                <div className='form-group'>
                    <label htmlFor="">Subject Name<span>*</span></label><br />
                    <input name='subjectName' value={subject.subjectName} onChange={handleInputChange} type="text" />
                </div>
                <div className='subject-type' >
                    <input name='subjectType' value={'Theory'} onChange={handleInputChange} type="radio"  /> Theroy
                    <input name='subjectType' value={'Practical'} onChange={handleInputChange} type="radio" /> practical
                </div>
                <div className=' form-group mt-5'>
                    <label htmlFor="">Subject Code<span>*</span></label><br />
                    <input name='subjectCode' value={subject.subjectCode} onChange={handleInputChange} type="text" />
                </div>
                <button type='submit' className='btn btn-danger bg-danger btn-sm'>Save</button>
            </form>
            <div className=' subject-list'>

                <div class="container mt-3">
                    <h1 className='edit-subject'>Subject List</h1>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Subject Code</th>
                                <th>Subject Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lodsub.map((e)=>{
                                    return(
                                        <tr>
                                            <td>{e.subjectName}</td>
                                            <td>{e.subjectCode}</td>
                                            <td>{e.subjectType}</td>
                                            <td className='d-flex gap-2 cursor-pointer '>
                                                <span><CiEdit/></span>
                                                <span><BsXLg/></span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Subjetc