import { Destination } from '@/types/destinationTypes'
import { useRouter } from 'next/router'
import React from 'react'

export const DestinationDetailMain = ({ destinationDatas }: { destinationDatas: Destination }) => {
    const router = useRouter();
    const { destination } = router.query;
    return (
        <div className='w-full flex gap-10 font-openSans'>
            {destinationDatas.result.map((dest) => (
                dest.english === destination
                    ? <p>{dest.english}</p>
                    : null
            ))}
            <p></p>
            {/* <p>Welcome to Greece, a country of beautiful contradictions. Walk through the country’s groves and archaeological sites, visit groups of islands, get to know the beaches, gorges and mountains, and enjoy nature’s breathtaking scenery. The country’s rich history, culture and coastline have made it one of the world’s favourite tourist destinations.  In winter, Greece is ideal for winter sports. Ski resorts with ultra-modern facilities offer an unforgettable experience down spectacular ski runs.</p> */}
        </div>
    )
}
