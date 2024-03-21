import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const StudentDaisboard = () => {
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }
    function myAccFunc() {
        var x = document.getElementById("demoAcc");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-green";
        } else {
            x.className = x.className.replace(" w3-show", "");
            x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-green", "");
        }
    }

    function myDropFunc() {
        var x = document.getElementById("demoDrop");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-green";
        } else {
            x.className = x.className.replace(" w3-show", "");
            x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-green", "");
        }
    }
    return (

        <div>

            <div class=" w3-sidebar w3-light-grey w3-card w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left bg-[#86A7FC]" id="mySidebar">


                <div class="bg-[#86A7FC] w3-sidebar w3-bar-block  w3-card" style={{ width: "200px" }}>
                    <button class="w3-bar-item w3-button w3-large w3-hide-large " onClick={w3_close}>Close &times;</button>
                    <h1 className=' text-2xl text-center font-semibold'>Student</h1>
                    <Link class="w3-bar-item w3-button" to='abc'>Link 1</Link>
                    <a href="#" class="w3-bar-item w3-button">Link 1</a>
                    <button class="w3-button w3-block w3-left-align" onClick={myAccFunc}>
                        Accordion <i class="fa fa-caret-down"></i>
                    </button>
                    <div id="demoAcc" class="w3-hide w3-white w3-card">
                        <a href="#" class="w3-bar-item w3-button">Link</a>
                        <a href="#" class="w3-bar-item w3-button">Link</a>
                    </div>

                    <div class="w3-dropdown-click">
                        <button class="w3-button" onClick={myDropFunc}>
                            Dropdown <i class="fa fa-caret-down"></i>
                        </button>
                        <div id="demoDrop" class="w3-dropdown-content w3-bar-block w3-white w3-card">
                            <a href="#" class="w3-bar-item w3-button">Link</a>
                            <a href="#" class="w3-bar-item w3-button">Link</a>
                        </div>
                    </div>
                    <a href="#" class="w3-bar-item w3-button">Link 2</a>
                    <a href="#" class="w3-bar-item w3-button">Link 3</a>
                </div>

            </div>

            <div class="w3-main ml-[200px]" >
                <div class="w3-teal">
                    <button class="w3-button w3-teal w3-xlarge w3-hide-large" onClick={w3_open}>&#9776;</button>

                </div>

                <div class="w3-container">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default StudentDaisboard