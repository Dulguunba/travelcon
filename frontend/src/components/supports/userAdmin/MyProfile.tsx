import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { CompletedBook } from '../Baatar/mybook/CompletedBook';
import { UpcomingBook } from '../Baatar/mybook/UpcomingBook';
import { useBooking } from '../Baatar/mybook/MyBookZustand';
import { CancelledBook } from '../Baatar/mybook/CancelledBook';

export const MyProfile = () => {
  return (
    <div className=' py-10 px-5 bg-white rounded-xl'>
        <div className=' flex justify-between'>
            <div className='flex gap-3'>
                <img src='./place.png' alt="place" className=' w-32 h-36 rounded-lg border border-black p-1' />
                <div className='mt-5'>
                    <h1 className='text-3xl text-black font-bold'>Erica Stocklin</h1>
                    <p>Paris, France</p>
                </div>
            </div>
            <div>
                <label>Email</label>
                <div className='flex gap-5 my-3
                '>
                    <div className=' bg-blue rounded-md p-1'>
                        <EmailIcon/> 
                    </div>
                    <p className=' mt-1'>+12 345 6789 0</p>
                </div>
            </div>
        </div>
        <div className='w-full h-full bg-white p-8 my-10  rounded-lg'>
        <h1 className='text-black text-2xl  font-semibold mb-3'>Booking Summary</h1> 
        <hr />
        <div className='flex justify-center gap-5 mt-3 mb-5' >
          <button onClick={()=>useBooking.setState({count:1})} className=' hover:text-blue font-semibold'>Upcoming Booking</button>
          <button onClick={()=>useBooking.setState({count:2})} className=' hover:text-blue font-semibold'>Cancelled Booking</button>
          <button onClick={()=>useBooking.setState({count:3})} className=' hover:text-blue font-semibold'>Completed Booking</button>
        </div>
        <UpcomingBook/>
        <CancelledBook/>  
        <CompletedBook/>
      </div>
    </div>
  )
}
