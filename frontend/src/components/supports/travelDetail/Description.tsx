import React, { useState } from 'react'
import { LocationIcon } from '@/components/icons/homePage'
import { TimeIcon, CalendarIcon, PlaneIcon, BusIcon } from '@/components/icons/travelDetail'
import Included from './Included'
import Itinerary from './Itinerary'
import Reviews from './Reviews'
import { getServerSideProps } from './TourDetailHero'
import { FetchDataProps } from '@/types/fetchDataProps'
import { useRouter } from 'next/router'
import RouteTours from './RouteTours'


const Description = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {
    const [isTextShown, setIsTextShown] = useState(false);
    const toggleText = () => {
        setIsTextShown(!isTextShown);
    };
    const router = useRouter();
    const { tour } = router.query;
    return (
        <>
            {travelDatas.result.map((data) => data._id === tour
                ? <div className='flex items-center justify-center lg:mt-20'>
                    <div className='max-w-[1520px] w-[90%]'>
                        <div className='w-full flex flex-col lg:flex-row lg:items-start lg:gap-10 items-center gap-2'>
                            <div className='flex w-full gap-20 flex-col'>
                                <div className='lg:w-[615px] h-[310px] flex justify-center items-center lg:p-10 lg:justify-start lg:items-start bg-grayColor rounded-3xl'>
                                    <div className='flex flex-col gap-5'>
                                        <div>
                                            <h1 className='font-bold font-oswald text-2xl lg:text-4xl'>Tour Package Details</h1>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col gap-4'>
                                                <div className='flex gap-4 capitalize'>
                                                    <LocationIcon width='24' height='24' fill='#4997D3' />
                                                    {data.destination.english}
                                                </div>
                                                <div className='flex gap-4'>
                                                    {/* <Dollar width='24' height='24' fill='#4997D3' /> */}
                                                    <div className='p-2 bg-blue w-[24px] h-[24px] font-openSans text-white flex justify-center items-center rounded-full'>₮</div>                                         <div className='flex gap-2'>
                                                        {data.price.adultPrice.toLocaleString()} <p className='font-semibold font-openSans'>(Adult)</p>

                                                        {data.price.childPrice.toLocaleString()} <p className='font-semibold font-openSans'>(Child)</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <TimeIcon />
                                                    <div className='flex gap-1'>
                                                        {data.duration}
                                                        <p>Days</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <CalendarIcon />
                                                    {data.calendar.map((cal) => {
                                                        const startDay = new Date(cal.startDay);
                                                        const endDay = new Date(cal.endDay);
                                                        const formatter = new Intl.DateTimeFormat('default', { month: 'long', day: 'numeric' });
                                                        return formatter.format(startDay) + " - " + formatter.format(endDay) + " ";
                                                    })}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='font-openSans font-medium lg:h-full lg:text-lg lg:w-[693px]'>
                                    {isTextShown
                                        ? data.additionalInfo
                                        : data.additionalInfo.substring(0, 300) + "..."
                                    }
                                    <button className='ml-5 text-gray-500' onClick={toggleText}>
                                        {isTextShown ? "See Less" : "See More"}
                                    </button>
                                </div>
                                <Included destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} travelDatas={travelDatas} />
                            </div>
                            <div className='w-full flex flex-col lg:mt-0 mt-10 lg:mb-0 mb-10 lg:w-[1000px] gap-5'>
                                {data.route.map((routes, index) => {
                                    return data.calendar.map((time) => {
                                        const vehicleIcon = routes.vehicle === 'Airplane'
                                            ? { planeIcon: <PlaneIcon width='45' height='45' fill='#4997D3' /> }
                                            : { busIcon: <BusIcon width='45' height='45' fill='#4997D3' /> };

                                        return (
                                            <RouteTours
                                                startTime={time.startTime}
                                                endTime={time.endTime}
                                                startPoint={routes.startPoint}
                                                endPoint={routes.endPoint}
                                                day={`Day ${index + 1}`}
                                                {...vehicleIcon}
                                            />
                                        );
                                    })
                                })}
                            </div>
                        </div>
                        <Itinerary destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} travelDatas={travelDatas} />
                        <Reviews toursData={toursData} travelDatas={travelDatas} />
                    </div>
                </div>
                : null
            )}

        </>
    )
}

export { getServerSideProps };

export default Description;