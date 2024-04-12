import { Destination } from '@/types/destinationTypes'
import { useRouter } from 'next/router'
import React from 'react'
import { Highlights } from '@/components/supports/destinationPage/Highlights'


export const DestinationDetailMain = ({ destinationDatas }: { destinationDatas: Destination }) => {
    const router = useRouter();
    const { destination } = router.query;

    return (
        <div className='w-full flex flex-col gap-10 font-openSans justify-center'>
            {destinationDatas.result.map((dest) => {
                if (dest.english === destination) {
                    let midpoint = Math.ceil(dest.additionalInfo.length / 2);
                    midpoint = dest.additionalInfo.indexOf(' ', midpoint);
                    const part1 = dest.additionalInfo.slice(0, midpoint);
                    let part2 = dest.additionalInfo.slice(midpoint + 1);
                    part2 = part2.charAt(0) + part2.slice(1);

                    return (
                        <>
                            <p>{part1}</p>
                            <p>{part2}</p>
                        </>
                    );
                }
                return null;
            })}
            <div className='mt-10 mb-10'>
                <Highlights />
            </div>

        </div>
    )
}