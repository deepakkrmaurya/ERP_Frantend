import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';
export const addsemester = createAsyncThunk('/add/semester',async(data)=>{
    try {
        const res = axios.post(`http://localhost:5000/api/v1/semester`,data)
        toast.promise(res,{
          loading: "Wait! create semester..",
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

export const Getsemester = createAsyncThunk('/get/semester',async()=>{
    try {
        const res = axios.get(`http://localhost:5000/api/v1/semester`)
        
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})