import { Travel } from '@/types/travelTypes'
import React, { useState } from 'react'
import { getServerSideProps } from '@/utils/fetchTravelDatas'

const BookCard = ({ travelDatas }: { travelDatas: Travel }) => {
    const tour = travelDatas.result.filter(data => data._id === "660ff3ecfab1c51304eb2117");
    const [checkedIndex, setCheckedIndex] = useState(null);

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const handleCheckboxChange = (index: any) => {
        setCheckedIndex(index);
    }

    return (
        <div className='flex items-center flex-col gap-10 justify-center mt-20'>
            {tour.map((data) => (
                data.calendar.map((cal, index) => (
                    <div className='flex gap-5 items-center'>
                        <input
                            type="checkbox"
                            className="checkbox"
                            onChange={() => handleCheckboxChange(index)}
                            checked={checkedIndex === index}
                        />
                        <div className='w-[1000px] bg-grayColor flex flex-col'>
                            <div className='w-full bg-gray-200 p-5 flex justify-between'>
                                <h1>Check-in</h1>
                                <h1>Check-out</h1>
                                <h1>Adult</h1>
                                <h1>Child</h1>
                                <h1>Total Price</h1>
                            </div>
                            <div className='w-full flex justify-between p-5'>
                                <h1>{cal.startDay}</h1>
                                <h1>{cal.endDay}</h1>
                                <input type="number" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} />
                                <input type="number" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} />
                                <h1>{data.price.childPrice}</h1>
                            </div>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
}

export { getServerSideProps };

export default BookCard;