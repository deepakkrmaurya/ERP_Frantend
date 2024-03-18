import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
const Classes = () => {
    const [classes, setClasses] = useState([])
    const [course, setcourse] = useState({
        course: "",
        branch: ""
    })

    const handleInputChange = (e) => {
        setcourse({ ...course, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (e) => {

        e.preventDefault()
        const res = await axios.post('http://localhost:5000/api/v1/addcourse', course)
        if (res.data.success) {
            toast.success(res.data.message)
        }
        // http://localhost:5000/api/v1/addcourse
        console.log(course)
    }

    const loadingCourse = async () => {
        const res = await axios.get('http://localhost:5000/api/v1/addcourse')
        setClasses(res.data.courselist);
    }
    console.log(classes)
    useEffect(() => {
        loadingCourse()
    }, [])
    return (
        <div >
            <div className=' py-2 px-3 bg-blue-950 text-white font-bold m-3 rounded-lg'>
                <h1>Manage Classes</h1>
            </div>
            <div role="tablist" className="tabs tabs-lifted ">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Classes List"   />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Course</th>
                                    <th>Branch</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classes.map((e) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{e.course}</td>
                                                    <td>{e.branch}</td>
                                                    <td>
                                                        <label className=' btn btn-primary btn-sm'>Edit</label>
                                                        <label className=' btn btn-secondary btn-sm mx-1'>Delete</label>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Add New Class" checked   />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form onSubmit={handelSubmit} className=' flex gap-2 items-center'>
                        <div>
                            <label htmlFor="">course </label>
                            <input
                                type="text"
                                className=' bg-white py-1 px-3 rounded'
                                name='course'
                                value={course.course}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Branch</label>
                            <input
                                type="text"
                                className=' bg-white py-1 px-3 rounded'
                                name='branch'
                                value={course.branch}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <button type='submit' className=' btn btn-primary btn-sm'>Save</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Classes
