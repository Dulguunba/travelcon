import React from 'react'

export const GuideCard = (props: { img: String, detail: String, name: string, No: string }) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-white'>
                <div className='flex max-w-[1520px] w-[90%] py-5 flex-col gap-[60px]'>
                    <div className='flex items-center'>
                        <h1 className='font-medium text-[32px] text-blue'>{props.No}</h1>
                        <h1 className='font-medium text-[32px]'>
                            {props.name}
                        </h1>
                    </div>
                    <img className='rounded-xl' src={`${props.img}`} alt="guide image" />
                    <p className='font-light text-[20px] leading-[30px]'>{props.detail}</p>
                </div>
            </div>
        </>
    )
}