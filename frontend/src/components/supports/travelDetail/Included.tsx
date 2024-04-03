import React from 'react'
import { getServerSideProps } from './TourDetailHero'
import { Props } from '@/pages';


const Included = ({ toursData, travelDatas }: Props) => {
    const tourDatas = toursData.result;
    const slicedData = tourDatas.slice(0, 8)
    const notIncludedData = tourDatas.slice(8, 13)
    return (
        <div className='mt-14 flex lg:flex-row flex-col lg:justify-between'>
            <div className='flex flex-col gap-5 lg:mb-0 mb-5'>
                <div className='lg:text-[40px] text-3xl font-oswald font-bold'>
                    INCLUDED
                </div>
                <ul className='list-disc ml-5 font-primary'>
                    {slicedData.map((data) => <li>{data.english}</li>)}
                </ul>
            </div>
            <div className='flex flex-col gap-5 lg:w-[615px]'>
                <div className='lg:text-[40px] text-2xl font-oswald font-bold'>
                    NOT INCLUDED
                </div>
                <ul className='list-disc font-primary ml-5'>
                    {notIncludedData.map((data) => <li>{data.english}</li>)}
                </ul>
                <div className='relative'>
                    <img src="Pic2.jpg" className='w-full lg:h-[204px] rounded-3xl' alt="" />
                    <div className='w-full lg:h-[204px] rounded-3xl bg-[#D9D9D9] absolute top-0 opacity-30'>
                    </div>
                    <div className='absolute flex top-12 left-10 items-start flex-col gap-5 justify-center '>
                        <h1 className='font-oswald text-black font-bold lg:text-3xl'>  Ready for an adventure?</h1>
                        <button className='p-3 bg-black font-normal text-white lg:text-[20px] font-primary rounded-xl border border-black btn'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { getServerSideProps }

export default Included