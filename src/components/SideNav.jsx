import React, { useState } from 'react'
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiHomeSmileLine } from "react-icons/ri";

const SideNav = () => {

    const [activeNav, setActiveNav] = useState(1)

    return (
        <div className='border-r shadow-sm px-5 py-6 w-1/4 sticky top-[70px] left-0 h-[calc(100%-70px)] bg-[#ecebee4d] overflow-y-scroll scroll'>
            <div className="dashboard flex flex-col">
                <h3 className='text-base text-[#777] capitalize'>Dashboard</h3>
                <li onClick={() => setActiveNav(1)} className={`items flex gap-1 hover:bg-[rgb(209,21,193)] focus:bg-yellow-200 px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer border ${activeNav === 1 && "bg-[rgb(231,248,248)]"}`}>
                    <RiHomeSmileLine size={20} />
                    <span className='text-md'>Home</span>
                </li>

                <li onClick={() => setActiveNav(2)} className={`items flex gap-1 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1 cursor-pointer ${activeNav === 2 && "bg-[rgb(234,245,253)]"}`}>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-md'>Analytics</span>
                </li>
                <li onClick={() => setActiveNav(3)} className='items flex gap-1 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1 cursor-pointer'>
                    <FaArrowTrendUp size={20} />
                    <span className='text-md'>Service</span>
                </li>


            </div>
            <div className="dashboard flex flex-col">
                <h3 className='text-base text-[#777] capitalize'>Dashboard</h3>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1 cursor-pointer'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>


            </div>
            <div className="dashboard flex flex-col">
                <h3 className='text-base text-[#777] capitalize'>Dashboard</h3>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1 cursor-pointer'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>


            </div>
            <div className="dashboard flex flex-col">
                <h3 className='text-base text-[#777] capitalize'>Dashboard</h3>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1 cursor-pointer'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>
                <li className='flex gap-3 hover:bg-[rgb(234,245,253)] px-5 py-1 rounded text-[#7e8081] items-center mt-1'>
                    <IoAnalyticsOutline size={20} />
                    <span className='text-lg'>Home</span>
                </li>


            </div>
            
        </div>
    )
}

export default SideNav