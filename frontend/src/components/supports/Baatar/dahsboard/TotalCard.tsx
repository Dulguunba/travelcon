import { instance } from '@/functions/TravelUtilities'
import React, { useMemo, useState } from 'react'
import { travelInfoType } from '../mybook/TableMui'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { WeekChart } from './WeekChart';

export const TotalCard = () => {
    const [travelData, setTravelData] =useState([])
    const [counter,setCounter] =useState(1)
    const Total = ["Total Tour Packages","Total Earlings","Total Destination","Booked Tour"]
    const get = async()=>{
        try {
            const get = (await instance.get("/travel/get")).data.result
            setTravelData(get);
        } catch (error) {
            console.log(error)
        }
    }
    useMemo(()=>{
        get()
    },[])
  return (
    <div className='bg-gray-200 p-5'>
        <div className='flex gap-3 mb-5 flex-col sm:flex-row'>
            {
            Total.map((total:String)=>{
                return(
                <div className=' bg-white rounded-lg sm:w-3/12 w-full p-5'>
                    <h1 className='text-black text-2xl'>{total}</h1>
                    <div className='my-2'> 
                        <h1 className='text-3xl text-black font-bold'>
                            256
                        </h1>
                    </div>
                    <div className='bg-blue h-10 w-full rounded-lg p-2 text-white'>
                    than last month
                    </div>
                </div>
                )
            })
            }
        </div>
        <div className='flex justify-between mb-5'>
            <h1 className=' text-black sm:text-3xl text-lg font-bold'>POPULAR TOUR PACKAGES</h1>
            <button className='text-blue sm:text-xl font-semibold'>VIEW ALL</button>
        </div>
        <div>
            <div >
            {
                travelData.map((e:travelInfoType, index:number)=>{
                    return(
                    <div className={`w-full h- mb-5 bg-white rounded-lg flex justify-between ${index<=counter?"null":"hidden"}`}>
                        <div className='p-3 flex flex-col sm:flex-row gap-3 relative w-10/12'>
                            <img src={`${e.image.mainImage}`} alt="asdas"  className=' rounded-lg w-full sm:w-3/12 h-40'/>
                            <div className='w-9/12'>
                                <h1 className='text-lg sm:text-2xl text-black' >{e.name}</h1>
                                <p className='mb-10 max-h-16 overflow-auto my-2'>{e.additionalInfo}</p>
                                <p className=' absolute text-blue text-xl font-bold bottom-3'>start from {e.price.adultPrice}₮</p>
                            </div>
                        </div>
                        <div className=' relative'>
                            <div className=''>
                                <button className=' bg-blue rounded-lg p-1 mt-5 mr-2' ><MoreVertIcon/></button>
                            </div>
                            <div className='flex gap-2 absolute bottom-5 right-3'>
                                <button className=' bg-blue rounded-lg p-1'><AccessTimeIcon/></button>
                                <button className=' bg-blue rounded-lg p-1'> <EditCalendarIcon/> </button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            <div className='flex justify-center my-10'>
                <button className=' bg-blue p-2 rounded-lg text-white' onClick={()=>setCounter(count=> count+2)}>load more...</button>
            </div>
        </div>
        <div className=' hidden sm:block'>
            <WeekChart/>
        </div>
    </div>
  )
}
