import React from 'react'
import { Header } from './Header'
import { DashboardCard } from './dashboardInput/DashboardCard'

export const Dashboard = () => {
  return (
    <div className='bg-gray-50 h-full w-full flex flex-col'>
      <Header/>
      <div className='w-full h-full bg-gray-50 p-5 flex flex-col'>
        <div className='w-full grid grid-cols-4 gap-2'>
          <DashboardCard/>
          <DashboardCard/>
          <DashboardCard/>
          <DashboardCard/>
        </div>

      </div>
    </div>
  )
}
