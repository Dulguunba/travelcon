import React from 'react'



export const TotalCard = () => {
    const Total = ["Total Tour Packages","Total Earlings","Total Destination","Booked Tour"]
  return (
    <div className='bg-gray-200 p-5'>
        <div className='flex gap-3 '>
            {
            Total.map((total:String)=>{
                return(
                <div className=' bg-white rounded-lg w-3/12 p-5'>
                    <div>

                    </div>
                    <h1>{total}</h1>
                    <div>
                        <h1 className=' text-xl'>
                            256
                        </h1>
                  </div>
                    <div className='bg-blue h-10 w-full rounded-lg p-2'>
                    than last month
                    </div>
                </div>
                )
            })
            }
        </div>
        <div>
            
        </div>
        <div>

        </div>
    </div>
  )
}
