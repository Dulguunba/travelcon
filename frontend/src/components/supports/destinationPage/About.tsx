import React from 'react'

export const About = (props: { home: string, destination: string, }) => {
    return (
        <>
            <div className="flex relative flex-col items-center justify-center  bg-no-repeat bg-cover">
                <img className='absolute w-full h-full' src='/place.png' alt="place image" />
                <div className='flex max-w-[1520px] w-[90%] py-5 flex-col h-[600px] md:h-[950px] z-10'>
                    <div className='flex items-center justify-center h-full flex-col'>
                        <p className='text-white'> Home    |   {props.destination}</p>
                        <h1 className='font-oswald text-white font-bold  md:text-[200px] md:leading-[200px]  text-[40px] leading-[50px]'>{props.home}</h1>
                    </div>
                </div>
            </div>
        </>

    )
}
