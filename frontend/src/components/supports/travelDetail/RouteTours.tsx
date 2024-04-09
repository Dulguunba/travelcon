import React, { ReactElement } from 'react'
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { BusIcon } from '@/components/icons/travelDetail/BusIcon'
import { PlaneIconTourDetail } from '@/components/icons/travelDetail/PlaneIconTourDetail'
import { Travel } from '@/types/travelTypes'

interface RouteToursProps {
    day: string
    busIcon?: ReactElement
    planeIcon?: ReactElement
    startDay: string
    endDay: string
}

const RouteTours = ({ day, busIcon, planeIcon, startDay, endDay }: RouteToursProps) => {
    return (

        <div className='w-full bg-grayColor rounded-3xl h-[140px] px-8 py-4'>
            <div className='lg:text-2xl text-xl font-bold'>
                {day}
            </div>
            <div className='w-full mt-14 border-dashed border-2 border-blue relative'>
                <div className='w-5 h-5 bg-blue rounded-full absolute -left-2 -bottom-3'></div>
                <div className='absolute bottom-3 -left-5'>{startDay}</div>
                <div className='absolute left-[115px] lg:left-[260px] -bottom-4'>{busIcon}</div>
                <div className='absolute left-[115px] lg:left-[260px] -bottom-5'>{planeIcon}</div>
                <div className='absolute bottom-3 -right-5'>{endDay}</div>
                <div className='w-5 h-5 bg-blue rounded-full absolute -right-2 -bottom-3'></div>
            </div>
        </div>
    )
}

export { getServerSideProps };

export default RouteTours;

