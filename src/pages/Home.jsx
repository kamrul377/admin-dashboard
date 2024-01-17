import React from 'react'
import { IoMdArrowDown } from "react-icons/io";
import AnalyticsCharts from '../components/AnalyticsCharts.jsx'

import { userData } from '../data.js'

const Home = () => {
  return (
    <div className='w-3/4 p-5 bg-white'>

      <div className='status flex justify-between gap-5'>
        {
          [1, 2, 3].map(() => {
            return <div className="card bg-white shadow-sm border w-1/3 py-3 px-3 rounded">
              <h1 className='text-gray-700'>Revanue</h1>
              <div className='font-bold my-2 text-xl flex gap-2'>
                $2,415
                <span className='font-normal text-[12px]'>-11.4
                </span>
                <IoMdArrowDown color='red' />
              </div>
              <p className='text-[15px] text-gray-500'>Compared to last month</p>
            </div>
          })
        }
      </div>

      <AnalyticsCharts title="User Analytics" data={userData} datakey="Active User" />


    </div>
  )
}

export default Home