import React from 'react'

const Login = () => {
  return (
    <div>
      <div className=' bg-[#51829B] w-full h-screen flex flex-col items-center justify-center  '>
        <div className=' bg-[#FFFFFF] w-96 shadow-[0_0_10px_black] p-4 rounded-md '>
              <h1 className=' text-2xl font-semibold lato-regular'>Login</h1>
              <div>
                <div>
                  <label htmlFor="">Email</label><br />
                  <input type="text" className=' rounded border border-[#8E0000] outline-none w-full py-1 px-2' placeholder='Email' />
                </div>
                <div>
                  <label htmlFor="">Password</label><br />
                  <input type="text" className=' rounded border border-[#8E0000] outline-none w-full py-1 px-2' placeholder='Password' />
                </div>
                <div className=' flex justify-between'>
                    <span className=' cursor-pointer rounded border py-1 px-4 inline-block mt-2  border-[#8E0000]'>Login</span>
                    <p className=' cursor-pointer'>forgoot password?</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Login