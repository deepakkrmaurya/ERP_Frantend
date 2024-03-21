import React from 'react'
import Header from '../header/Header'
import Login from './Login'
import { useSelector } from 'react-redux'
const Home = () => {
  const islogin = useSelector((state) => state.auth.isLoggedIn)
  return (
    <div id='bg' className=' h-[100vh'>
        <Header/>
        {
          !islogin &&(
            <Login/>
          )
        }
        
    </div>
  )
}

export default Home