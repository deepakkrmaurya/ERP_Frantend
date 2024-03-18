import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className=' flex gap-5 bg-[#8E0000] py-1 px-4 text-white'>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink to="/daisboard">Admin</NavLink>
            <NavLink to='/login'>Login</NavLink>
            
        </div>
    )
}

export default Navbar