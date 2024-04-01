import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';

const initialState =[];

export const addYear = createAsyncThunk('/add/year',async(data)=>{
    try {
        const res = axios.post(`http://localhost:5000/api/v1/year`, data)
        toast.promise(res,{
          loading: "Wait! create year..",
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
export const getyear = createAsyncThunk('/get/year',async()=>{
    try {
        const res = axios.get(`http://localhost:5000/api/v1/year`)
        
        return (await res).data
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
})

export const deleteYear = createAsyncThunk('/delete/year',async(id)=>{
  try {
      const res = axios.delete(`http://localhost:5000/api/v1/year/${id}`)
      toast.promise(res,{
        loading: "Wait! delete year..",
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

export const GetyearById = createAsyncThunk('/get/year',async(id)=>{
  try {
      const res = axios.get(`http://localhost:5000/api/v1/year/${id}`);
      
      return (await res).data
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
})


export const updateYear = createAsyncThunk('/update/year',async(data)=>{
  try {

      const res = axios.put(`http://localhost:5000/api/v1/year/${data.id}`,{year:data.year})
      toast.promise(res,{
        loading: "Wait! update year..",
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