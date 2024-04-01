import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { BsXLg } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import '../superAdmin/section.css'
import { createSection, loadSection } from '../component/stoer/slice/section.slice'
const Section = () => {
    const  dispatch = useDispatch()
    const [section, setSection]=useState()
    const [loadsection, setloadsection]=useState([])
    const saveSection = async()=>{
        
        const res = await dispatch(createSection({section:section}))
    }

    const loadingSection = async()=>{
        const res = await dispatch(loadSection())
        setloadsection(res.payload)
        
    }
    
    useEffect(()=>{
      loadingSection()  
    },[])
    return (
        <div className="container">
            <div className='section'>
                <h1 className='edit-section'>Edit Section</h1>
                <div className='form-group'>
                    <label htmlFor="">Section<span>*</span></label><br />
                    <input onChange={(e)=>{setSection(e.target.value)}} type="text" />
                </div>
                <span onClick={saveSection} className=' button'>Save</span>
            </div>
            <div className=' section-list'>

                <div class="container mt-3">
                    <h1 className='edit-section'>Sections List</h1>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>section</th>
                              
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadsection.map((e)=>{
                                    return(
                                        <tr>
                                            <td>{e.section}</td>
                                            <td className='d-flex gap-2 cursor-pointer '>
                                                <span><CiEdit/></span>
                                                <span><BsXLg/></span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Section