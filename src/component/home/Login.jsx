import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Onlogin } from '../stoer/slice/auth.slice'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const  [user, setUser] = useState({
        username:"",
        password:""
    })
    const handelInput = (e)=>{
         setUser({
            ...user,
            [e.target.name]:e.target.value
         })
    }
    
    const login = async(e)=>{
        e.preventDefault()
        const res = await dispatch(Onlogin(user))
        if(res.payload.success){
          window.location.reload()
        }
         
        
    }
  return (
    <div className=' w-full flex items-center justify-center mt-[10vh]'>
       <form onSubmit={login}  className='  w-[500px] border-1 border-[#8E0000] p-3'>
         <h1 className=' text-2xl font-semibold text-[#8E0000] '>Login</h1>
         <div className=' mt-4'>
            <label htmlFor="" className=' text-[#8E0000]'>Username</label>
            <input type="text"
            name='username'
            value={user.username}
            onChange={handelInput}
             className='  w-full py-1 px-3 outline-none border-1 border-[#8E0000] bg-white ' />
         </div>
         <div className=''>
            <label htmlFor="" className=' text-[#8E0000]'>Password</label>
            <input type="password"
            name='password'
            value={user.password}
            onChange={handelInput}
             className=' w-full py-1 px-3 outline-none border-1 border-[#8E0000] bg-white ' />
         </div>
         <button type='submit' className=' py-1 px-3  border-1 border-[#8E0000] mt-2 '>Login</button>
       </form>
    </div>
  )
}

export default Login
