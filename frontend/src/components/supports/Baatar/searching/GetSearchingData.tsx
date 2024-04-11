import { instance } from '@/functions/TravelUtilities'
import React, { useMemo } from 'react'
import { getTravelZustand } from './UseGetZustand';

export const GetSearchingData = () => {
  const getTravelInfo = async()=>{
    try {
      const get = (await instance.get("/destination/get")).data.result
      getTravelZustand.setState({destination:get})    
    } catch (error) {
      console.log(error)
    }
  }
  useMemo(()=>{
    getTravelInfo();
  },[])
  return (
    <div>
    </div>
  )
}
