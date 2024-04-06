import React from 'react'
import TourPackageCard from './TourPackageCard'

export const TourPackages = () => {
    return (
        <div className='flex items-center flex-col mt-20 mb-20'>
            <h1 className='font-oswald text-[40px] font-bold'>AVAILABLE TOUR PACKAGES</h1>
            <div className='w-full justify-between flex mt-10'>
                <TourPackageCard image='PersonWithEagle.jpg' title='blabla' time={8} destinationName='Govisumber' startPrice={2000000} duration='10 Days' />
                <TourPackageCard image='PersonWithEagle.jpg' title='blabla' time={8} destinationName='Govisumber' startPrice={2000000} duration='10 Days' />
                <TourPackageCard image='PersonWithEagle.jpg' title='blabla' time={8} destinationName='Govisumber' startPrice={2000000} duration='10 Days' />
            </div>
            <button className='font-primary text-blue text-[20px] font-medium underline mt-10'>See More Packages</button>
        </div>
    )
}
