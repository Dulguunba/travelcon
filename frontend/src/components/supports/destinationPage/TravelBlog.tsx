import React from 'react'
import { TravelCard } from './TravelCard'
import { Play } from '@/components/icons/destinationPage/Play'
export const TravelBlog = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-white'>
                <div className='flex max-w-[1520px] w-[90%] py-5 flex-col gap-[80px]'>
                    <div className='lg:flex w-full justify-between gap-[40px] lg:gap-0'>
                        <TravelCard name='Ayla Khan' day='August 15 , 2023' img="https://images.surferseo.art/3b811463-700c-41c4-b67d-def8354ce87b.png" category="BLOG" detail="Into the Heart of the Steppe: A Nomadic Adventure in Mongolia" />
                        <TravelCard name='Alexei Petrov' day='November 27 , 2019' img="https://img.freepik.com/premium-photo/sand-dunes-during-sunset-gobi-desert-mongolia_180392-313.jpg" category="BLOG" detail="Unveiling the Secrets of the Gobi: A Desert Odyssey" />
                        <TravelCard name='Tuya Batbold' day='March 02 , 2017' img="https://news.mn/en/wp-content/uploads/sites/3/2021/01/A4979CE1-897A-485B-9034-6FC045EC4C6B.jpeg" category="BLOG" detail="Embracing Nomadic Hospitality: A Cultural Immersion in Mongolia" />
                    </div>
                    <div className='lg:flex w-full justify-between gap-[40px] lg:gap-0'>
                        <TravelCard name='Baatar Erdene' day='June 12 , 2021' img="https://discovery.cathaypacific.com/wp-content/uploads/2018/07/Hero-In-Season-1.jpg" category="BLOG" detail="Riding the Winds of Freedom: Exploring Mongolia on Horseback" />
                        <TravelCard name=' Sarangerel Dorjpalam' day='August 22 , 2020' img="https://montsame.mn/files/60add5a2a5a0b.png" category="BLOG" detail="Seeking Enlightenment: A Journey through Mongolia's Sacred Sites" />
                        <TravelCard name='Enkhbat Ganbold' day='July 15 , 2020' img="https://ich.unesco.org/img/photo/thumb/02723-BIG.jpg" category="BLOG" detail="Roaming Free: A Journey into the Heart of Mongolia" />
                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center h-[420px] lg:h-[840px] w-full'>
                <img className='h-[420px] lg:h-[840px] w-full left-0' src="HomeBackground.jpg" alt="" />
                <a className='absolute' target='blank' href="https://youtu.be/wNK2HBQT6pI?si=k-AIXn_cK4jkLXvd"><Play /></a>
            </div>
        </>
    )
}