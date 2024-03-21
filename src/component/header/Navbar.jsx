import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Onlogout } from '../stoer/slice/auth.slice';
import { MdAdminPanelSettings } from "react-icons/md";
const Navbar = () => {
    const dispatch = useDispatch()
    const islogin = useSelector((state) => state.auth.isLoggedIn)
    const role = useSelector((state) => state.auth.role)
    const onlogout = async()=>{
        const res = await dispatch(Onlogout())
    }
    // date
    var myDate = new Date();

let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];


let date = myDate.getDate();
let month = monthsList[myDate.getMonth()];
let year = myDate.getFullYear();
let day = daysList[myDate.getDay()];

let today = `${date} ${month} ${year}, ${day}`;

let amOrPm;
let twelveHours = function (){
    if(myDate.getHours() > 12)
    {
        amOrPm = 'PM';
        let twentyFourHourTime = myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`

    }else {
        amOrPm = 'AM';
        return `${myDate.getHours()}`}
};
let hours = twelveHours();
let minutes = myDate.getMinutes();

let currentTime = `${hours}:${minutes} ${amOrPm}`;

console.log(today + ' ' + currentTime);
    return (
        <div>
            <p className=' text-right text-[#8E0000] '>
                {today + ' ' + currentTime}
            </p>
        <div className=' flex gap-4 bg-[#8E0000] py-1 px-4 text-white'>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            {
                role == "superAdmin" && (
                    <NavLink to="/superAdminDaisboard">SuperAdmin</NavLink>
                )
            }

            {
                role == "user" && (
                    <NavLink to="/studentDaisboard">Student</NavLink>
                )
            }

            {
                role == "admin" && (
                    <NavLink to="/adminDaisboard" className=' flex items-center gap-0' ><MdAdminPanelSettings className=' text-xl'/>Admin</NavLink>
                )
            }

            {
                islogin && (
                    <NavLink to='/' onClick={onlogout}>Logout</NavLink>
                ) 
            }
            
            

        </div>
        </div>
    )
}

export default Navbar