import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSession, getAllSession } from '../component/stoer/slice/session.slice'
const Session = () => {
    const dispatch = useDispatch()
    const [session, setSession]=useState()
    const [Session, setsession]=useState([])
    const saveSassion=async(e)=>{
        e.preventDefault()
        const res = await dispatch(addSession({session:session}))
        if(res.payload.success)
        loadingSession()
    }

    const loadingSession = async()=>{
        const res = await dispatch(getAllSession())
       
        setsession(res.payload)
    }
    useEffect(()=>{
      loadingSession()
    },[])
  return (
    <div>
      <div className=' w-full border bg-blue-600 py-2 rounded my-2 mx-0 px-0'>
        <h1 className=' text-white px-2 font-semibold'>Session</h1>

      </div>
      <form onSubmit={saveSassion}  className=' w-[100%]  border flex items-center gap-2  py-2 my-2  px-2'>
        
        <input type="text" onChange={(e)=>{setSession(e.target.value)}}   className=' outline-none w-[35%] border-1 py-1 px-2 ' placeholder=' Enter course name' />
        <button type='submit' className=' px-3 py-[4px] rounded text-white border-1  cursor-pointer bg-green-600'>Save</button>
      </form>
      {/* model */}

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title text-2xl font-semibold ">Branch</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>


            <div class="modal-body">
              <div className=' w-full border  py-2 my-2 mx-0 px-2'>
                <label htmlFor="">Branch</label>
                <input
                  type="text"
                 
                  className=' outline-none border-1 py-1 px-2 ml-2' />
                <button  className=' px-3 py-[6px] rounded text-white border-1 ml-1 cursor-pointer bg-green-600'>Save</button>
              </div>
            </div>


            <div class="modal-footer">
              <button type="button" class="btn btn-danger bg-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
      {/* model */}
      
      <div class="container mt-3">
  
  <table  class="table border w-full">
    <thead>
      <tr>
        <th >Session</th>
        <th >Action</th>
        
      </tr>
    </thead>
    <tbody>
       {
        Session.map((e)=>{
            return(
                <tr >
                    <td >{e.session}</td>
                    <td  >
                        <span>edit</span>
                        <span>delete</span>
                    </td>
                </tr>
            )
        })
       }
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Session