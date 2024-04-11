import React from 'react'
import { Header } from './Header'
import { AdminSettings } from '../Baatar/AdminSettings'

export const GenerelSetting = () => {
  return (
    <div className='bg-gray-50 h-full w-full flex flex-col'>
      <Header/>
      <div className='w-full h-full bg-gray-100 p-5'>
        <AdminSettings/>
      </div>
    </div>
  )
}
