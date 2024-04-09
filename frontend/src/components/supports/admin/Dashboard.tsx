import React, { useState } from 'react'
import { Header } from './Header'
import { AdminDashboard } from './dahsboard/AdminDashboard'

export const Dashboard = () => {

  return (
    <div className='bg-gray-50 h-full w-full flex flex-col'>
      <Header/>
      <AdminDashboard/>
    </div>
  )
}
