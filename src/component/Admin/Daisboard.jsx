import React from 'react'
import { NavLink } from "react-router-dom";
import {Outlet} from 'react-router-dom'
const Daisboard = () => {
    return (
        <div>
            <div className=' w-full flex'>
            <ul className="menu bg-base-200 w-72 rounded-box">
                <li className=' text-2xl'>Daisboard</li>
                <li>
                    <details open>
                        <summary>Student Management</summary>
                       
                        <ul className=' flex flex-col gap-1'>
                            <li><NavLink to='addStudent'>Add Student</NavLink></li>
                            <li><NavLink to=''>k</NavLink></li>
                            <li><a>Submenu 2</a></li>
                            
                        </ul>
                    </details>
                </li>
                <li>
                <details open>
                        <summary>Classes</summary>
                        <ul className=' flex flex-col gap-1'>
                            <li><NavLink to='classes'>Manage Classes</NavLink></li>
                            
                        </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            <div className="overflow-x-auto w-full">
            <Outlet/>
            </div>
            <div>
               
            </div>
        </div>
        </div>
    )
}

export default Daisboard
