import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';
export const createSection = createAsyncThunk('/add/course',async(data)=>{
    try {
        const res = axios.post(`http://localhost:5000/api/v1/section`,data)
        toast.promise(res,{
          loading: "Wait! create section..",
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
export const loadSection = createAsyncThunk('/add/course',async()=>{
    try {
        const res = axios.get(`http://localhost:5000/api/v1/section`)
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})