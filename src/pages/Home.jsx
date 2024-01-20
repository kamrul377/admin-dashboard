import React from 'react'
import { IoMdArrowDown } from "react-icons/io";
import AnalyticsCharts from '../components/AnalyticsCharts'

import { userData } from '../data.js'
import { ElderlyWoman, VisibilityOutlined } from '@mui/icons-material';
import { colorDetection } from '../utils/buttonColorDetection.js';

const Home = () => {
  return (
    <div className='w-full md:w-3/4 p-5 bg-white'>

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



      {/* charts */}
      <AnalyticsCharts title="User Analytics" data={userData} datakey="Active User" />

      <div className="members md:flex gap-4 my-8">
        <div className="member w-full  sm:w-1/3">
          <div className="heading mb-4">New join members</div>

          {
            [1, 2, 3, 4, 5].map(() => {
              return <div className='flex gap-3  md:justify-between items-center my-4 '>
                <img className='h-10 w-10 rounded-full object-cover cursor-pointer' src="./images/kamrul.jpg" alt="kamrul" />
                <div className="title text-gray-700">
                  <h1 className='text-sm font-medium text-slate-900'>Kamrul Islam</h1>
                  <p className='text-sm text-slate-500 truncate'>Software Engineer</p>
                </div>
                <div className="watch bg-indigo-100 p-1 rounded text-sm flex justify-center items-center gap-1 text-gray-700 cursor-pointer">
                  <VisibilityOutlined style={{ fontSize: "16px" }} />
                  <span className='text-[14px]'>Display</span>
                </div>
              </div>
            })
          }


        </div>
        <div className="transaction w-full sm:w-2/3 shadow-sm">
          <div className="heading mb-4">Transaction</div>

          <div className="trns-table">
            <table class="table-auto border-collapse  w-full">
              <thead className='text-left py-1'>
                <tr className=''>
                  <th className='py-2'>Customer</th>
                  <th>Data</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  [1, 2, 3, 4, 5].map(() => {
                    return <tr className='border-b py-2 my-2 first:border-t'>
                      <td className='py-2'>
                        <div className='flex items-center  gap-1'>
                          <img className='h-10 w-10 rounded-full object-cover cursor-pointer' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kamrul" />
                          <h1 className='text-sm font-medium text-slate-900'>Kamrul Islam</h1>
                        </div>
                      </td>
                      <td>31 Jan 2024</td>
                      <td>1,200</td>
                      <td>
                        <button className={`${colorDetection('pending')}`}>active </button>
                      </td>
                    </tr>
                  })
                }

              </tbody>
            </table>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Home