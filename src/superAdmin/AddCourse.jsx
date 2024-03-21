import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { addCourse, CourseUpdateById, deleteCourseById, getaddCourse, getCourseById } from '../component/stoer/slice/course.slice'
// http://localhost:5000/api/v1/addcourse
const AddCourse = () => {
    const [inputcourse, setInputcourse] = useState()
    const [course, setcourse] = useState([])
    const [courseId, setcourseId] = useState()
    const [editCourse, seteditCourse] = useState()

    const dispatch = useDispatch()
    const saveCourse = async () => {
        const res = await dispatch(addCourse(inputcourse))
        if (res.payload.success) {
            loadingCourse()
        }
    }

    const loadingCourse = async () => {
        const res = await dispatch(getaddCourse())

        setcourse(res.payload.courselist)
    }

    const deleteCourse = async (id) => {
        if (window.confirm('Are you sure to delete?')) {
            const res = await dispatch(deleteCourseById(id))
            if (res.payload.success) {
                loadingCourse()
            }
        }
    }
    const getCoursebyId = async (id) => {
        setcourseId(id)
        const res = await dispatch(getCourseById(id))
        seteditCourse(res.payload)
    }
    const editCourseSave = async()=>{
        const res = await dispatch(CourseUpdateById({id:courseId,course:editCourse}))
        if(res.payload.success)
        loadingCourse()
    }
   
    useEffect(() => {
        loadingCourse()
    }, [])

    return (
        <div>
            <div className=' w-full border bg-blue-600 py-2 my-2 mx-0 px-0'>
                <h1 className=' text-white px-2'>Add New Course</h1>
            </div>
            <div className=' w-full border  py-2 my-2 mx-0 px-2'>
                <label htmlFor="">Course</label>
                <input onChange={(e) => { setInputcourse(e.target.value) }} type="text" className=' outline-none border-1 py-1 px-2 ml-2' placeholder=' Enter course name' />
                <span onClick={saveCourse} className=' px-3 py-[6px] rounded text-white border-1 ml-1 cursor-pointer bg-green-600'>Save</span>
            </div>
            {/* model start */}


            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div class="modal-body">
                            <div className=' w-full border  py-2 my-2 mx-0 px-2'>
                                <label htmlFor="">Course</label>
                                <input 
                                  type="text"
                                   value={editCourse?.course}
                                   onChange={(e)=>{seteditCourse(e.target.value)}}
                                   className=' outline-none border-1 py-1 px-2 ml-2'  />
                                <span  onClick={editCourseSave} className=' px-3 py-[6px] rounded text-white border-1 ml-1 cursor-pointer bg-green-600'>Save</span>
                            </div>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* model end*/}
            {/* table start */}
            <div class="container mt-3">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            course.map((e) => {
                                return (
                                    <tr>
                                        <td>{e.course}</td>
                                        <td>{e.date}</td>
                                        <tr className=' flex gap-2 items-center'>
                                            <span onClick={() => { getCoursebyId(e._id) }} data-bs-toggle="modal" data-bs-target="#myModal" ><CiEdit className=' text-xl text-blue-600 cursor-pointer' /></span>
                                            <span onClick={() => { deleteCourse(e._id) }}><MdDelete className=' text-xl text-danger cursor-pointer' /></span>
                                        </tr>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/* table end */}
        </div>
    )
}

export default AddCourse