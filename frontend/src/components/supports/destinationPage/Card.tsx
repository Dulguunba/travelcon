import React from 'react'

import { Dollar, LocationWhite } from '@/components/icons/destinationPage'
import { FetchDataProps } from '@/types/fetchDataProps'

export const Card = ({ travelDatas, toursData, destinationDatas, categoryDatas, state }: FetchDataProps) => {
  const allData = travelDatas.result ? travelDatas.result.filter(item => item.destination.destinationCategory) : [];
  const widerName = travelDatas.result ? travelDatas.result.map((data) => data.name.length > 25) : [];
  const filteredData = travelDatas.result ? travelDatas.result.filter(item => item.destination.destinationCategory === state)
    : [];
  const mapData = state === 'All' ? allData : filteredData;

  const LearnMore = () => {
    console.log("first")
  }
  return (
    <>
      {mapData.map((item, index) => (
        <div key={index} id='card' className={`card`}>
          <img className='rounded-3xl w-full h-full absolute -z-[1]' src={`${item?.image?.mainImage}`} alt="gazriin zurag" />
          <div className="image">
            <h1> {item.name}</h1 >
            <div id='p' className='flex items-center w-[356px] gap-5'>
              <div className='flex items-center w-[132px] gap-2'>
                <LocationWhite />
                <p>20 Packages</p>
              </div>
              <p>|</p>
              <div className='flex items-center w-[132px] gap-2'>
                <Dollar />
                <p>500 1000</p>
              </div>
            </div>
          </div >
          <div className="details">
            <div className="center">
              <h1>Place name</h1>
              <div className='flex items-center w-[356px] gap-5'>
                <div className='flex items-center w-[132px]'>
                  <LocationWhite />
                  <p>20 Packages </p>
                </div>
                <p>|</p>
                <div className='flex items-center w-[132px]'>
                  <Dollar />
                  <p>500 1000</p>
                </div>
              </div>
              <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
              <button className='button'>Learn more</button>
            </div>
          </div>

        </div >

      ))}
    </>

  )
}
