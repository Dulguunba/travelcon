import { DownArrow } from '@/components/icons/homePage'
import React from 'react'
import Link from 'next/link';
export const Highlights = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-1/3 h-[full] bg-white rounded-xl shadow-lg shadow-cyan-500/50 p-8'>
                <h1 className='text-black text-oswald text-[40px] leading-[50px] font-bold' >Highlights</h1>
                <ul className='flex flex-col'>
                    <li className='text-black text-[20px] leading-[30px] list-disc' ><a href="/guide">Mongolian travel guide</a></li>
                    <li className='text-black text-[20px] leading-[30px] list-disc' ><a href="/blog">Mongolian travel blog</a></li>
                    <li className='text-black text-[20px] leading-[30px] list-disc' ><a href="/place">Best place</a></li>
                    <li className='text-black text-[20px] leading-[30px] list-disc' ><a href="/time">Best time</a> </li>
                </ul>
            </div>
        </div>
    )
}
