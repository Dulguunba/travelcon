import React from 'react'
import { DollarBlack, LocationBlue, Time } from '@/components/icons/destinationPage'
export const TravelCard = (props: { img: String, category: String, detail: String, name: string, day: string }) => {
    return (
        <div className='flex flex-col gap-2 pt-[40px] lg:pt-0'>
            <img className='rounded-3xl w-full max-w-[465px] h-[339.1px]' src={`${props.img}`} alt="travel blog " />
            <div className='flex justify-between items-center pr-5'>
                <div className='flex items-center gap-3'>
                    <img className='lg:w-16 lg:h-16 w-12 h-12 rounded-full' src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg" alt="" />
                    <div className='flex flex-col '>
                        <h1 className='font-medium text-[20px] leading-[30px]'>{props.name}</h1>
                        <p className='font-light text-[16px] leading-[24px]'>{props.day}</p>
                    </div>
                </div>
                <h1 className='font-light text-blue text-[16px] leading-[24px]'>{props.category}</h1>
            </div>
            <h2 className='font-medium lg:text-[32px] text-[24px] leading-[30px] lg:leading-[40px] max-w-[465px]'>{props.detail}</h2>
        </div>
    )
}
