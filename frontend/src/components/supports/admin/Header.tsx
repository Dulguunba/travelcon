import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { travelInfoType } from '../Baatar/mybook/TableMui';

export const Header = () => {
  return (
    <div className='w-full h-fit py-2 sm:py-0 sm:h-28 bg-white flex sm:justify-around items-center  sm:flex-row flex-col-reverse'>
        <div className='bg-gray-100 rounded-full flex items-center justify-center w-1/2 my-7'>
            <label className="input input-bordered flex 
            items-center gap-2 w-full h-full m-3  mx-10">
                <SearchIcon color='primary'/>
                <input type="text" className="grow bg-gray-100" placeholder="Search" />
            </label>
        </div>
        <div className='sm:h-10 sm:w-12 sm:flex sm:my-7 hidden'>
            <div className='relative h-full w-full'>
                <div className='absolute bottom-0 left-0'>
                    <NotificationsIcon fontSize='large'/>
                </div>
                <div className='absolute top-0 right-0 rounded-full bg-blue-500 text-white h-7 flex justify-center items-center w-7 '>{'15'}</div>
            </div>
        </div>
        <div className='hidden sm:flex sm:h-16 sm:my-7 sm:border-r-2'></div>
        <div className='flex h-16 gap-2 items-center'>
            <div className="avatar">
                <div className="w-16 mask mask-squircle">
                    <img  className='rounded-xl' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div>
                <h2>{'Dulguun'}</h2>
                <h2 className='text-gray-400'>{'Dulguun@gmail.com'}</h2>
            </div>
        </div>
    </div>
  )
}

