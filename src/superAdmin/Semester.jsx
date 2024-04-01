import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getaddCourse } from '../component/stoer/slice/course.slice'
import { addsemester, Getsemester } from '../component/stoer/slice/semester.slice'
import { CiEdit } from "react-icons/ci";
import { BsXLg } from "react-icons/bs";
const Semester = () => {
    const dispatch = useDispatch()
    const [course, setcourse] = useState([])
    const [getsemester, setsemester] = useState([])
    const [semester, setSemester] = useState({
        courseId:"",
        semester:""
    })
    const loadingCourse = async () => {
        const res = await dispatch(getaddCourse())

        setcourse(res.payload.courselist)
    }

    const saveSamester = async(e)=>{
        e.preventDefault()
        const res = await dispatch(addsemester(semester))
        if(res.payload.success)
        loadingSemester()
    }
    
    const loadingSemester = async()=>{
        const res = await dispatch(Getsemester())
        
        setsemester(res.payload)
    }
 
    useEffect((e)=>{
        loadingCourse()
        loadingSemester()
    },[])
  return (
    <div >
                <form  onSubmit={saveSamester}  className='subject responsive '>
                    <h1 className='edit-subject'>Semester</h1>
                    <div className='form-group'>
                        <div>
                            <span>Course</span><br />
                            <select name="courseId" onChange={(e)=>{setSemester({...semester,[e.target.name]:e.target.value})}}  id="">
                                <option value="" >Select Course</option>
                                {
                                    course?.map((e) => {
                                        return (
                                            <option value={e._id}>{e.course}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <label htmlFor="">Semester<span>*</span></label><br />
                        <input name='semester' onChange={(e)=>{setSemester({...semester,[e.target.name]:e.target.value})}} type="text" placeholder='Enter total Semester' />
                    </div>


                    <button type='submit' className='btn btn-danger bg-danger btn-sm'>Save</button>
                </form>
                <div className=' subject-list responsive '>

                    <div class="container mt-3">
                        <h1 className='edit-subject'>Year</h1>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Semester</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {
                                    getsemester.map((e)=>{
                                        return(
                                            <tr>
                                                <td>{e.course}</td>
                                                <td>Total Semester {e.semester}</td>
                                                <td className='d-flex gap-2 cursor-pointer '>
                                                    <span onClick={() => { getSemesterById(e._id) }} data-bs-toggle="modal" data-bs-target="#myModal"><CiEdit /></span>
                                                    <span onClick={() => { deleteSemesterById(e._id) }}><BsXLg /></span>
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

export default Semester