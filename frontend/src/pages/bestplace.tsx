import { About } from '@/components/supports/destinationPage/About'
import { BestPlace } from '@/components/supports/destinationPage/BestPlace'
import { Footer } from '@/components/supports/destinationPage/Footer'
import React from 'react'

const bestplace = () => {
    return (
        <>
            <About home='About ' destination='About' />
            <BestPlace />
            <Footer />
        </>
    )
}

export default bestplace