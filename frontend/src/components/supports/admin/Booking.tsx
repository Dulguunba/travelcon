import React from 'react'
import { Header } from './Header'
import { TableMui } from '../Baatar/mybook/TableMui'
import { SettingsBook } from '../Baatar/mybook/SettingsBook'

export const Booking = () => {
  return (
    <div className='bg-gray-100 h-full w-full'>
      <Header/> 
       <div className='p-5'>
       <SettingsBook/>
       </div>
    </div>
  )
}
