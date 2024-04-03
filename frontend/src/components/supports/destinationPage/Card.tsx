import React, { useState } from 'react'
import { Dollar, LocationWhite } from '@/components/icons/destinationPage'
import { ListCard } from './ListCard'
import { DestinationCategory } from '@/types/destinationCategoryTypes'
import { Destination } from '@/types/destinationTypes'
import { Tours } from '@/types/toursTypes'
import { Travel } from '@/types/travelTypes'
interface Props {
  travelDatas: Travel
  toursData: Tours
  destinationDatas: Destination
  categoryDatas: DestinationCategory
}
export const Card = ({ travelDatas, toursData, destinationDatas, categoryDatas }: Props) => {
  const LearnMore = () => {
    console.log("first")
  }
  return (
    <>
      {travelDatas.result.map((item, index) => (
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
