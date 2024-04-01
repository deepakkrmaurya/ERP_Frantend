import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';
export const addSession = createAsyncThunk('/add/course',async(data)=>{
    try {
        const res = axios.post(`http://localhost:5000/api/v1/session`,data)
        toast.promise(res,{
          loading: "Wait! create session..",
          success: (data) => {
            return data.data.message
          },
          error: "faild!",
        })
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})

export const getAllSession = createAsyncThunk('/add/course',async()=>{
    try {
        const res = axios.get(`http://localhost:5000/api/v1/session`)
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})