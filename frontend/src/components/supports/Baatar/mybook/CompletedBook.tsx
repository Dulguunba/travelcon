import React from 'react'
import { useBooking } from './MyBookZustand'

export const CompletedBook = () => {
    const {count} = useBooking((state)=>state)
  return (
    <div className={`${count===3?"":"hidden"}`}>
    {
        <div className="overflow-x-auto m-5 border border-gray-300 rounded-xl p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className='text-lg font-bold text-black'>Check-In</th>
              <th className='text-lg font-bold text-black'>Check-Out</th>
              <th className='text-lg font-bold text-black'>Travel</th>
              <th className='text-lg font-bold text-black'>Guest</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    }
</div>
  )
}