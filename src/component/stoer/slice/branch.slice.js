import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';
export const addBranch = createAsyncThunk('/add/course',async(data)=>{
    try {
        const res = axios.post(`http://localhost:5000/api/v1/branch`,data)
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

export const getBranchById = createAsyncThunk('/get/branch',async(id)=>{
   
        const res = axios.get(`http://localhost:5000/api/v1/branch/`+id)
        return (await res).data
      
})

export const deleteBranchById = createAsyncThunk('/delete/branch',async(id)=>{
    try {
        const res = axios.delete(`http://localhost:5000/api/v1/branch/${id}`)
        toast.promise(res,{
          loading: "Wait! delete branch..",
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


export const GetBranchFromId = createAsyncThunk('/get/branch',async(id)=>{
   
    const res = axios.get(`http://localhost:5000/api/v1/branch/branch/`+id)
    return (await res).data
  
})


export const updateBranchById = createAsyncThunk('/update/branch',async(data)=>{

    try {
        const res = axios.put(`http://localhost:5000/api/v1/branch/${data.id}`,{branch:data.branch})
        toast.promise(res,{
          loading: "Wait! delete branch..",
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