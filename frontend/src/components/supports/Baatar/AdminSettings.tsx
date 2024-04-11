import { instance } from '@/functions/TravelUtilities'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useState } from 'react'

export const AdminSettings = () => {
    const [userData, setUserData] = useState({
        email:"",
        name:"",
        phone:"",
        information:"",
        date:"",
        gender:'',

    })
    const updateUser = async()=>{
        try {
            const update = await instance.post("/user/post", userData);
            alert("Save Data")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className=' p-5'>
        <div className=' bg-white rounded-lg p-5'>
            <h1 className='my-5 text-2xl text-black font-bold'>Personal Information</h1>
            <hr />
            <div className=' w-full flex flex-col sm:flex-row gap-5 my-5'>
                <div className=' flex flex-col sm:w-6/12 w-full'>
                    <label className='text-black text-lg'>Full Name</label>
                    <input type="text" className='rounded p-2 bg-white border border-gray-300 mb-3' onChange={(e)=>setUserData({...userData,name:e.target.value})}/>
                    <label className='text-black text-lg'>Phone</label>
                    <input type="number" className='rounded p-2 bg-white border border-gray-300 mb-3' onChange={(e)=>setUserData({...userData,phone:e.target.value})} />
                </div>
                <div className=' flex flex-col sm:w-6/12 w-full'>
                    <label className='text-black text-lg'>Email</label>
                    <input type="text" className='rounded p-2 bg-white border border-gray-300 mb-3' onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                    <label className='text-black text-lg'>Gender</label>
                    <select className='rounded p-2 bg-white border border-gray-300 mb-3' onChange={(e)=>setUserData({...userData,gender:e.target.value})}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className=' mb-5 flex flex-col'>
                    <label className='text-black text-lg'>Address</label>
                    <textarea className='rounded p-2 bg-white border border-gray-300 mb-3' onChange={(e)=>setUserData({...userData,information:e.target.value})} ></textarea>
                    <button className=' rounded-lg p-3 mt-5 text-white px-5 bg-blue h-fit w-40' disabled={!userData.date || !userData.email || !userData.gender || !userData.information || !userData.name || !userData.phone} onClick={updateUser}>Save Changes</button>
                </div>
            </div>
        </div>
    </div>
  )
}
