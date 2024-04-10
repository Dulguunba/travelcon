import React from 'react'

export const Play = () => {
    return (
        <div className='flex'>
            <svg className='relative w-[100px] h-[100px] lg:w-full lg:h-full' width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="99.5" stroke="white" />
                <path d="M129.63 100L85.1854 125.66V74.34L129.63 100Z" fill="white" />
            </svg>
            <svg className='absolute animate-ping bg-white opacity-75 rounded-full w-[100px] h-[100px] lg:w-full lg:h-full' width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="99.5" stroke="white" />
                <path d="M129.63 100L85.1854 125.66V74.34L129.63 100Z" fill="white" />
            </svg>
        </div>
    )
}
