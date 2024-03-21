import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';
const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem("role") || " ",
  data: JSON.parse(localStorage.getItem('data')) || {}

}

export const Onlogin = createAsyncThunk('/auth/login', async(data) => {
    try {
      const res = axios.post(`http://localhost:5000/api/v1/user/login`, data)
      toast.promise(res,{
        loading: "Wait!..",
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

  export const Onlogout = createAsyncThunk('/logout', async() => {
    try {
      const res = axios.post(`http://localhost:5000/api/v1/user/logout`)
      toast.promise(res,{
        loading: "Wait!..",
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

 export const newPasswordSave = createAsyncThunk('/logout', async(data) => {
    try {
      
     const res = axios.put(`http://localhost:5000/api/v1/user/new-password/${data.id}`,{password:data.password})
      toast.promise(res,{
        loading: "Wait! create your password..",
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

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(Onlogin.fulfilled,(state,action)=>{
            
            localStorage.setItem('isLoggedIn','true');
            localStorage.setItem('role', action?.payload?.user?.role);
            localStorage.setItem('data',JSON.stringify(action?.payload?.user))
        })
        .addCase(Onlogout.fulfilled,(state,action)=>{
          localStorage.clear();
          state.token= "";
          state.user= {};
          state.role= "";
          state.isLoggedIn= false;
        })
    }
  })

  export default authSlice.reducer