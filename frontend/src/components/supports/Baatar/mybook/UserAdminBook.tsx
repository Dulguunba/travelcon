import React from 'react'
import { UpcomingBook } from './UpcomingBook'
import { CancelledBook } from './CancelledBook'
import { CompletedBook } from './CompletedBook'
import { useBooking } from './MyBookZustand'
import { Header } from '../../admin/Header'

export const UserAdminBooking = () => {
  return (
    <div className='bg-gray-100 h-full w-full'>
      <Header/>
      <div className='w-full h-full bg-white p-8 my-10  rounded-lg'>
        <h1 className='text-black text-2xl  font-semibold mb-3'>Booking Summary</h1> 
        <hr />
        <div className='flex justify-center gap-5 mt-3 mb-5' >
          <button onClick={()=>useBooking.setState({count:1})} className=' hover:text-blue font-semibold'>Upcoming Booking</button>
          <button onClick={()=>useBooking.setState({count:2})} className=' hover:text-blue font-semibold'>Cancelled Booking</button>
          <button onClick={()=>useBooking.setState({count:3})} className=' hover:text-blue font-semibold'>Completed Booking</button>
        </div>
        <hr />
        <UpcomingBook/>
        <CancelledBook/>
        <CompletedBook/>
      </div>
    </div>
  )
}
