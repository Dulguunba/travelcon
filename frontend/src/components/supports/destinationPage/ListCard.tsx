import { Dollar, DollarBlack, LocationBlue, Time } from '@/components/icons/destinationPage'
import { DestinationCategory } from '@/types/destinationCategoryTypes'
import { Destination } from '@/types/destinationTypes'
import { Tours } from '@/types/toursTypes'
import { Travel } from '@/types/travelTypes'
import React from 'react'

interface Props {
    travelDatas: Travel
    toursData: Tours
    destinationDatas: Destination
    categoryDatas: DestinationCategory
}
export const ListCard = ({ travelDatas, toursData, destinationDatas, categoryDatas }: Props) => {
    const LearnMore = () => {
        console.log("click learn more")
    }
    return (
        <>
            {travelDatas.result.map((item, index) => (
                <div key={index} className='md:flex border border-blue-200 rounded-xl p-3'>
                    <img className='w-[358px] h-[206px] rounded-3xl' src={`${item?.image?.mainImage}`} alt="winter" />
                    <div className='pl-12 pr-[98px]'>
                        <div className='max-w-[659px]'>
                            <div className='flex items-center gap-[10px]'>
                                <LocationBlue />
                                <h3 className='font-normal text-blue text-[20px] leading-[30px]'>{item.name}</h3>
                            </div>
                            <h1 className='font-medium text-[32px] leading-[40px]  pt-[10px] pb-9'>{item.travelCompany}</h1>
                            <p className='font-normal text-[20px] leading-[30px]  text-[#222222] overflow-hidden h-20'>{item.additionalInfo}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <div className='flex items-center gap-4'>
                            <Time />
                            <h3 className='font-normal text-[20px] leading-[30px]  text-[#222222]'>{item.duration}</h3>
                        </div>
                        <div className='flex items-center gap-4 pt-4'>
                            <DollarBlack />
                            <h3 className='font-normal text-[20px] leading-[30px]  text-[#222222]'>{item.price.adultPrice}</h3>
                        </div>
                        <div className='flex gap-4 pt-6' >
                            <button className=' cursor-pointer hover:-translate-y-1 transition ease-in-out rounded-[10px] bg-blue text-white font-medium text-[20px] leading-[30px] py-4 px-8'>Book now</button>
                            <button onClick={LearnMore} className='cursor-pointer hover:-translate-y-1 transition ease-in-out rounded-[10px] border-2 border-blue py-4 px-8 text-blue font-medium text-[20px] leading-[30px]'>Learn more</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
