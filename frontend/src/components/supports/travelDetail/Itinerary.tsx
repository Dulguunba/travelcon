import React from 'react'
import ItineraryCard from './ItineraryCard'
import { getServerSideProps } from '../../../utils/fetchTravelDatas'
import { FetchDataProps } from '@/types/fetchDataProps';



const Itinerary = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {
    const tour = travelDatas.result.filter(travel => travel._id === "66100067d0b3d401b5e0e2d8");

    return (
        <div className='w-full flex flex-col gap-10 mt-14'>
            <div className='text-[40px] font-oswald font-bold'>
                ITINERARY
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:justify-between w-full'>
                {tour.map((data) => data.route.slice(0, 3).map((route) => < ItineraryCard image={route.sectionImage} title={route.endPoint} time={route.sectionDuration} description={route.activity} />))}
            </div>
        </div>
    )
}

export { getServerSideProps };

export default Itinerary