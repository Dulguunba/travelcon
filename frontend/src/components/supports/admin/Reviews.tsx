import React from 'react'
import { Header } from './Header'
import { AdminReview } from '../Baatar/AdminReview'

export const Reviews = () => {
  return (
    <div className='bg-gray-50 h-full w-full flex flex-col'>
      <Header/>
      <div className='w-full h-full bg-gray-100 p-5'>
        <AdminReview/>
      </div>
    </div>
  )
}
