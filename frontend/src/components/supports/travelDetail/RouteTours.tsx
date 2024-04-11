import React, { ReactElement } from 'react'
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { Travel } from '@/types/travelTypes'

interface RouteToursProps {
    day: string
    busIcon?: ReactElement
    planeIcon?: ReactElement
    startPoint: string
    endPoint: string
}

const RouteTours = ({ day, busIcon, planeIcon, startPoint, endPoint }: RouteToursProps) => {
    return (
        <div className='w-full bg-grayColor rounded-3xl h-[160px] pt-4 px-8'>
            <div className='lg:text-2xl text-xl font-bold'>
                {day}
            </div>
            <div className='w-full mt-14 border-dashed border-2 border-blue relative'>
                <div className='w-5 h-5 bg-blue rounded-full absolute -left-2 -bottom-3'></div>
                <div className='absolute bottom-3 -left-5 text-sm lg:text-base'>09:00</div>
                <div className='capitalize absolute -bottom-9 -left-5 text-sm lg:text-base'>{startPoint}</div>
                <div className='absolute left-[135px] lg:left-[255px] -bottom-4'>{busIcon}</div>
                <div className='absolute left-[135px] lg:left-[255px] -bottom-5'>{planeIcon}</div>
                <div className='absolute bottom-3 -right-5 text-sm lg:text-base'>12:00</div>
                <div className='capitalize absolute -bottom-9 -right-5 text-sm lg:text-base'>{endPoint}</div>
                <div className='w-5 h-5 bg-blue rounded-full absolute -right-2 -bottom-3'></div>
            </div>
        </div>
    )
}

export { getServerSideProps };

export default RouteTours;

