import React from 'react'
import Header from '../homePage/Header'
import { FetchDataProps } from '@/types/fetchDataProps'
import { getServerSideProps } from '@/utils/fetchTravelDatas'

const DestinationDetailHero = ({ travelDatas, toursData, destinationDatas, categoryDatas }: FetchDataProps) => {
    return (
        <>
            <img src="GerWithStars.jpg" className='lg:w-full h-[600px] lg:h-[1042px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header travelDatas={travelDatas} toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} />
                <div className='lg:max-w-[1520px] lg:m-auto lg:w-[90%] lg:h-[600px] mt-8 flex lg:mt-8 justify-center'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='z-10 text-white flex justify-center gap-3 lg:mt-20 lg:text-[20px] lg:leading-[30px] font-primary'>
                                <p className='border-r-2 pr-3'>Home</p>
                                <p className='border-r-2 pr-3'>Destinations</p>
                                <p>Eastern Mongolia</p>
                            </div>
                            <div className='flex flex-col items-center drop-shadow-md'>
                                <h1 className='font-oswald drop-shadow-md font-bold lg:text-[200px] xl:text-[246px] text-[50px] text-white uppercase'>GOvisumber</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='max-w-[1520px] w-[90%]'>
                    asdasd
                </div>
            </div>
        </>
    )
}

export { getServerSideProps };

export default DestinationDetailHero;
