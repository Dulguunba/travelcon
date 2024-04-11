import { About } from '@/components/supports/destinationPage/About'
import { BestTime } from '@/components/supports/destinationPage/BestTime'
import { Footer } from '@/components/supports/destinationPage/Footer'
import React from 'react'

const besttime = () => {
    return (
        <>
            <About home="Summer" destination='Summer' />
            <BestTime />
            <Footer />
        </>
    )
}

export default besttime