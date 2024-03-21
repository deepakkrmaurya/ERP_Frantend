import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { getaddCourse } from '../component/stoer/slice/course.slice'
import { addBranch, deleteBranchById, getBranchById,GetBranchFromId, updateBranchById} from '../component/stoer/slice/branch.slice'
function CreateBranch() {
  const dispatch = useDispatch()
  const [Branch, setbranch] = useState([])
  const [editBranch, seteditbranch] = useState()
  const [editBranchid, seteditbranchid] = useState()
  const [course, setcourse] = useState([])
  const [branch, setBranch] = useState({
    branch: "",
    course_id: "",
  })
  const loadingCourse = async () => {
    const res = await dispatch(getaddCourse())

    setcourse(res.payload.courselist)
  }

  const handelInput = (e) => {
    e.preventDefault()
    setBranch({
      ...branch,
      [e.target.name]: e.target.value
    })
  }
  const submitForm = async (e) => {
    e.preventDefault();
   
    if (!branch.branch || !branch.course_id) {
      alert('Please fill all fields')
    }

    const res = await dispatch(addBranch(branch))
    
  }

  const grtBranchbyId = async (e) => {
    e.preventDefault();
    const id = e.target.value
    const res = await dispatch(getBranchById(e.target.value))
    setbranch(res.payload)
  }
  const deleteBranch = async (id) => {
    if (window.confirm('Are you sure?')) {
      await dispatch(deleteBranchById(id))
    }
  }

  const getBranchFromId =async (id)=>{
    seteditbranchid(id)
    const res = await dispatch(GetBranchFromId(id))
    seteditbranch(res.payload.branch)
    
  }
  const editBranchSaveById = async() => {
    await dispatch(updateBranchById({id:editBranchid,branch:editBranch}))
  }
  useEffect(() => {
    loadingCourse()
  }, [])
  return (
    <div>
      <div className=' w-full border bg-blue-600 py-2 my-2 mx-0 px-0'>
        <h1 className=' text-white px-2 font-semibold'>Add Branch</h1>

      </div>
      <form onSubmit={submitForm} className=' w-[100%]  border flex items-center gap-2  py-2 my-2  px-2'>
        <div className=' flex  '>

          <select onChange={handelInput} name="course_id" id="" className=' outline-none border-1 py-1 px-2 '>
            <option value="">Select Course</option>
            {
              course.map((e) => {
                return (
                  <option value={e._id}>{e.course}</option>
                )
              })
            }
          </select>
        </div>
        <input type="text" onChange={handelInput} name='branch' value={branch.branch} className=' outline-none w-[35%] border-1 py-1 px-2 ' placeholder=' Enter course name' />
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
                  value={editBranch}
                  onChange={(e)=>{seteditbranch(e.target.value)}}
                  className=' outline-none border-1 py-1 px-2 ml-2' />
                <button onClick={editBranchSaveById} className=' px-3 py-[6px] rounded text-white border-1 ml-1 cursor-pointer bg-green-600'>Save</button>
              </div>
            </div>


            <div class="modal-footer">
              <button type="button" class="btn btn-danger bg-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
      {/* model */}
      {/* table start */}
      <div class=" w-[100%] mt-3 flex justify-center bg-blue-600 rounded py-2 px-3 shadow">
        <select onChange={grtBranchbyId} name="" id="" className=' w-[300px] border outline-none py-1 px-2 '>
          <option >Select Course</option>
          {
            course.map((e) => {
              return (
                <option value={e._id}>{e.course}</option>
              )
            })
          }
        </select>


      </div>

      <div class="container mt-3">


        <table class="table">
          {/* <thead>
            <tr>
              <th>Branch</th>
              <th>Action</th>
             
            </tr>
          </thead> */}
          <tbody>

            {
              Branch.map((e) => {
                return (
                  <tr>
                    <td>{e.branch}</td>
                    <td className=' flex gap-2'>
                      <button onClick={()=>{getBranchFromId(e._id)}} data-bs-toggle="modal" data-bs-target="#myModal"><CiEdit className='text-2xl text-primary' /></button>
                      <button onClick={() => { deleteBranch(e._id) }}><MdDelete className=' text-danger text-2xl' /></button>

                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
      {/* table end */}

    </div>
  )
}

export default CreateBranch