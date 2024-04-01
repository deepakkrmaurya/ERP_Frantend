import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import { BsXLg } from "react-icons/bs";
import '../superAdmin/CSS/year.css'
import { getaddCourse } from '../component/stoer/slice/course.slice'
import { addYear, deleteYear, getyear, GetyearById, updateYear } from '../component/stoer/slice/year.slice'

const Year = () => {
    const dispatch = useDispatch()
    const [course, setcourse] = useState([])
    const [Year, setyear] = useState([])
    const [getYear, setgetyear] = useState()
    const [YearId, setyearId] = useState()

    const [year, setYear] = useState({
        year: "",
        courseId: ""
    })
    const handelInput = (e) => {
        setYear({
            ...year,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await dispatch(addYear(year))
        if (res.payload.success)
            loadingYear();
    }
    const loadingCourse = async () => {
        const res = await dispatch(getaddCourse())

        setcourse(res.payload.courselist)
    }


    const loadingYear = async () => {
        const res = await dispatch(getyear())

        setyear(res.payload)
    }

    const deleteYearById = async (id) => {

        const res = await dispatch(deleteYear(id))
        if (res.payload.success)
            loadingYear();
    }
    const getYearById = async (id) => {
        const res = await dispatch(GetyearById(id))
        setyearId(id)
        setgetyear(res.payload)
    }
    const saveEditRecord = async() => {
       
        const res = await dispatch(updateYear({id:YearId,year:getYear}));
        if(res.payload.success)
        loadingYear();
    }
    useEffect(() => {
        loadingCourse();
        loadingYear();

    }, [])
    return (
        <div className="container">
            {/* <div className=' flex items-center'>
                <img className=' h-20 w-20' src="/logo.png" alt="" />
                <img className=' w-[700px]' src="/AKTU Logo.png" alt="" />
            </div> */}




            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title" >Edit</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div class="modal-body">
                            <input type="text" onChange={(e) => { setgetyear(e.target.value) }} value={getYear?.year} className='edit-Input' />
                            <h1 onClick={saveEditRecord} className=' save-Btn'>Save</h1>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger bg-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
            <div >
                <form  onSubmit={handleSubmit} className='subject responsive '>
                    <h1 className='edit-subject'>Year</h1>
                    <div className='form-group'>
                        <div>
                            <span>Course</span><br />
                            <select name="courseId" onChange={handelInput} id="">
                                <option value="" >Select Course</option>
                                {
                                    course.map((e) => {
                                        return (
                                            <option value={e._id}>{e.course}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <label htmlFor="">Year<span>*</span></label><br />
                        <input name='year' onChange={handelInput} type="text" />
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
                                    <th>Year</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Year.map((e) => {
                                        return (
                                            <tr>
                                                <td>{e.course}</td>
                                                <td>Course Duration {e.year} Years</td>
                                             
                                                <td className='d-flex gap-2 cursor-pointer '>
                                                    <span onClick={() => { getYearById(e._id) }} data-bs-toggle="modal" data-bs-target="#myModal"><CiEdit /></span>
                                                    <span onClick={() => { deleteYearById(e._id) }}><BsXLg /></span>
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
        </div>
    )
}

export default Year