import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';
export const addSubject = createAsyncThunk('/add/subject',async(data)=>{
    try {
        const res = axios.post(`http://localhost:5000/api/v1/subject`,data)
        toast.promise(res,{
          loading: "Wait! create subject..",
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
export const lodSubject = createAsyncThunk('/get/subject',async()=>{
    try {
        const res = axios.get(`http://localhost:5000/api/v1/subject`)
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})