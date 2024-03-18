import React, { useState } from 'react';

import { useDispatch } from 'react-redux'
import { createStudent } from '../store/slice/user.slice';
const AddStudent = () => {
    const dispatch = useDispatch();
    const [user, setuser] = useState({
        fullName: "",
        email: "",
        mobile: "",
        rollNumber: "",
        password: "",
        fatherName: "",
        motherName: "",
        address: "",
        course: "",
        branch: ""


    })
    const handleInputChange = (e) => {
        setuser(
            {
                ...user,
                [e.target.name]: e.target.value
            })
    }
    const submitHandler = async(e) => {
        e.preventDefault()
        const res = await dispatch(createStudent(user))
        console.log(res)
       
    }
    return (
        <div>
            <div className=' w-[100%] flex items-center justify-between p-3'>
                <h1>Student Records</h1>
                <button className="btn bg-yellow-400 text-black font-semibold" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
                {/* <span className=' border px-3 py-1 cursor-pointer'>Add Student</span> */}
            </div>
            {/* model start */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">

                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">New Student</h3>
                    <form onSubmit={submitHandler} className=' w-full flex gap-4' >

                        <div className='  w-[48%] '>
                            
                            <div>
                                <label htmlFor="">FullName</label><br />
                                <input
                                    type="text"
                                    className=' rounded border  outline-none w-full py-1 px-2'
                                    placeholder='fullname'
                                    name='fullName'
                                    value={user.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Email</label><br />
                                <input
                                    type="text"
                                    className=' rounded border  outline-none w-full py-1 px-2'
                                    placeholder='email'
                                    name='email'
                                    value={user.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Mobile</label><br />
                                <input
                                    type="text"
                                    className=' rounded border  outline-none w-full py-1 px-2'
                                    placeholder='mobile'
                                    name='mobile'
                                    value={user.mobile}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Roll No</label><br />
                                <input
                                    type="text"
                                    className=' rounded border outline-none w-full py-1 px-2'
                                    placeholder='rollnumber'
                                    name='rollNumber'
                                    value={user.rollNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Course</label>
                                <select onChange={handleInputChange} name="course" id="" className=' rounded border outline-none w-full py-1 px-2'>
                                    <option value="">Course</option>
                                    <option value="">Course</option>
                                </select>

                            </div>
                            <div>
                                <label htmlFor="">Branch</label>
                                <select onChange={handleInputChange} name="branch" id="" className=' rounded border outline-none w-full py-1 px-2'>
                                    <option value="">Course</option>
                                    <option value="">Course</option>
                                </select>

                            </div>
                            
                            
                            <div>
                                <p></p>
                            </div>
                        </div>

                        <div className='  w-[48%] '>
                            <div>
                                <label htmlFor="">Father Name</label><br />
                                <input
                                    type="text"
                                    className=' rounded border  outline-none w-full py-1 px-2'
                                    placeholder='Fother name'
                                    name='fatherName'
                                    value={user.fatherName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Mother Name</label><br />
                                <input
                                    type="text"
                                    className=' rounded border  outline-none w-full py-1 px-2'
                                    placeholder='Mother Name'
                                    name='motherName'
                                    value={user.motherName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Address</label><br />
                                <input
                                    type="text"
                                    className=' rounded border  outline-none w-full py-1 px-2'
                                    placeholder='Address'
                                    name='address'
                                    value={user.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Password</label><br />
                                <input
                                    type="text"
                                    className=' rounded border  outline-none w-full py-1 px-2'
                                    placeholder='Password'
                                    name='password'
                                    value={user.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input type="file" />
                            </div>


                            <button type='submit' className=' btn btn-primary mt-4'>Submit</button>

                        </div>
                        
                    </form>
                </div>
            </dialog>
            <div className=' w-full bg-blue-700 py-2 px-3'>
                <div>
                    dd
                </div>
            </div>
            <table className="table">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>

                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>

                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddStudent
