import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';

const initialState =[];

export const addCourse = createAsyncThunk('/add/course',async(data)=>{
    try {
        const res = axios.post(`http://localhost:5000/api/v1/course`, {course:data})
        toast.promise(res,{
          loading: "Wait! create course..",
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
export const getaddCourse = createAsyncThunk('/get/course',async()=>{
    try {
        const res = axios.get(`http://localhost:5000/api/v1/course`)
        
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})

export const deleteCourseById = createAsyncThunk('/add/course',async(id)=>{
    try {
        const res = axios.delete(`http://localhost:5000/api/v1/course/${id}`)
        toast.promise(res,{
          loading: "Wait! delete course..",
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


export const getCourseById = createAsyncThunk('/get',async(id)=>{
    try {
        const res = axios.get(`http://localhost:5000/api/v1/course/${id}`)
        
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})


export const CourseUpdateById = createAsyncThunk('/edit/course',async(data)=>{
    try {
        
        const res = axios.put(`http://localhost:5000/api/v1/course/${data.id}`,{course:data.course})
        toast.promise(res,{
          loading: "Wait! delete course..",
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