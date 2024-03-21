import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div>

            <div className=' bg-white w-full '>
                <div className=' xl:hidden flex flex-col items-center'>
                    <div className='  flex items-center justify-center gap-16 py-2 px-4'>
                        <img className=' h-20' src="azadi75.jpg" alt="" />
                        <img className=' h-20' src="logo.png" alt="" />
                        <img className='h-20' src="sir-apjn.png" alt="" />
                    </div>
                    <div className=' w-[100%] px-4'>
                        <img className=' mx-auto' src="AKTU Logo.png" alt="" />
                        <div className=' flex items-center justify-center gap-5'>
                            <img className=' h-11' src="Facebook.png" alt="" />
                            <img className=' h-11' src="Twitter.png" alt="" />
                            <img className=' h-11' src="Linkedin.png" alt="" />
                            <img className=' h-11' src="youtube.png" alt="" />
                        </div>
                        <div className='  w-full text-center font-bold py-2'>
                            <input type="text" className=' bg-white border-[#8E0000] outline-none border-1 px-3 w-96 py-1 rounded-full' placeholder='Search...' />
                        </div>
                    </div>

                    <div className=' w-full'>
                        <Navbar />
                    </div>
                </div>
                <div>
                    <div className=' w-full hidden xl:flex flex-col p-4'>
                        <div className=' w-full flex items-center justify-between' >
                            <div className='  flex items-center'>
                                <img className=' h-20' src="azadi75.jpg" alt="" />
                                <img className=' h-20' src="logo.png" alt="" />
                                <img className=' w-[580px] h-[70px]' src="AKTU Logo.png" alt="" />
                            </div>

                            <div >
                                <div className=' flex items-center mx-auto justify-center gap-2'>
                                    <img className=' h-11' src="Facebook.png" alt="" />
                                    <img className=' h-11' src="Twitter.png" alt="" />
                                    <img className=' h-11' src="Linkedin.png" alt="" />
                                    <img className=' h-11' src="youtube.png" alt="" />
                                </div>
                                <div>
                                    <input type="text" className=' bg-white border-[#8E0000] outline-none border-1 px-3 w-96 py-1 rounded-full mt-2' placeholder='Search...' />
                                </div>
                            </div>
                            <div>
                                <img className='h-20' src="sir-apjn.png" alt="" />
                            </div>

                        </div>
                        <div className=' w-full mt-4'>
                            <Navbar />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
