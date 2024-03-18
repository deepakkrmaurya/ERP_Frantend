import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {toast} from 'react-hot-toast'
export const createStudent = createAsyncThunk('/student',async(data)=>{
      try {
        const res = axios.post('http://localhost:5000/api/v1/user/register',data)
        toast.promise(res,{
          loading:'Registering...',
          success:'Registration Successful!',
          error:(err)=>JSON.stringify(err.message),
        })
        return (await res).data;
      } catch (error) {
         toast.error(error?.response?.data?.message)
      }
      
})






