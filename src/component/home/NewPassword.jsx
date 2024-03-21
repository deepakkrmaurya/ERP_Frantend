import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { newPasswordSave } from '../stoer/slice/auth.slice'
const NewPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userId= useSelector((state) => state.auth.data._id)

    const [password,setpassword]=useState({
        password:"",
        confirmPassword:""
    })
    const handelInput = (e)=>{
          e.preventDefault()
          setpassword({...password,[e.target.name]: e.target.value}) 
    }
    const  handleSubmit=async(e)=>{
        e.preventDefault()
        if(!password.password){
            alert("Enter new Password")
            return
        }
        if(!password.confirmPassword){
            alert("Enter new Password")
            return
        }
         if (password.password !== password.confirmPassword){
             alert("Passwords do not match")
         }else{
            const res =await dispatch(newPasswordSave({id:userId ,password:password.password}))
            console.log(res)
            
        }
    }
    return (
        <div className=' w-full h-screen  flex justify-center items-center'>
            <div className=' border-1 border-[#8E0000] w-96 p-2'>
                <h1>New Password</h1>
                <form onSubmit={handleSubmit} >
                    <div >
                        <label for="pwd" class="form-label">Password:</label><br />
                        <input type="password"
                            placeholder="Enter password"
                            name="password"
                            value={password.password}
                            onChange={handelInput}
                            className=' outline-none border-1 border-[#8E0000] w-full py-1 rounded  px-2'
                            
                        />
                    </div>
                    <div class="">
                        <label for="pwd" class="form-label">Confirm Password:</label><br />
                        <input type="password"
                            placeholder="Enter Confirm Password"
                            name="confirmPassword"
                            value={password.confirmPassword}
                            onChange={handelInput}
                            className=' outline-none border-1 border-[#8E0000] w-full py-1 rounded  px-2'
                            
                        />
                    </div>
                    <button type="submit" class="btn border-1 border-[#8E0000] mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewPassword