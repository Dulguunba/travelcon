import React from 'react'
import { TableMui } from './TableMui'

export const SettingsBook = () => {
  return (
    <div>
      <div className=' bg-blue w-fit p-12 rounded-lg flex flex-wrap gap-5 h-fit'>
        <div className=' w-3/12 h-fit '>
          <h1 className=' text-white text-2xl font-bold mb-4'>Summary</h1>
          <p className=' text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className=' bg-white p-3 w-fit h-full rounded-xl text-black'>
          <h1 className=' text-xl'>New Booking</h1>
          <p className=' text-2xl font-semibold'>
            256
          </p>
        </div>
        <div className=' bg-white p-3 w-fit h-full rounded-xl text-black'>
          <h1 className=' text-xl'>Cancelled Tour</h1>
          <p className=' text-2xl font-semibold'>
            256
          </p>
        </div>
        <div className=' bg-white p-3 w-fit h-full rounded-xl text-black'>
          <h1 className=' text-xl'>On Board</h1>
          <p className=' text-2xl font-semibold'>
            256
          </p>  
        </div>
        <div className=' bg-white p-3 w-fit h- rounded-xl text-black'>
          <h1 className=' text-xl'>On Board</h1>
          <p className=' text-2xl font-semibold'>
            256
          </p>
        </div>
      </div>
      <h1 className=' text-3xl text-black font-bold my-5'>OUR TOUR PACKAGES</h1>
      <div>
        <TableMui/>
      </div>
    </div>
  )
}
