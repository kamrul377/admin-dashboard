import React, { useState } from 'react'
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiHomeSmileLine } from "react-icons/ri";
import { AirplayOutlined, Analytics, AttachMoneyOutlined, ChatBubbleOutlineOutlined, DynamicFeedOutlined, Foundation, Inventory2Outlined, MailOutlineOutlined, PersonOutlineOutlined, ReportOutlined, RoofingOutlined, SignalCellularAltOutlined, TimelineOutlined, TrendingUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SideNav = () => {

    const [activeNav, setActiveNav] = useState(1)

    return (
        <div className='border-r shadow-sm px-5 py-6 w-1/4 sticky top-[70px] left-0 h-[calc(100%-70px)] bg-[#ecebee4d] hidden md:block'>
            {/* dashboard */}
            <div className="dashboard flex flex-col">
                <h3 className='text-base text-[#777] capitalize'>Dashboard</h3>
                <ul className='list-none flex flex-col gap-1'>
                    <Link to={'/'} onClick={() => setActiveNav(1)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 1 && "bg-[rgb(234,245,253)]"}`}>
                        <RoofingOutlined className='m-icon' />
                        <span className='text-md'>Home</span>
                    </Link>

                    <Link to={'/analytics'} onClick={() => setActiveNav(2)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 2 && "bg-[rgb(234,245,253)]"}`}>
                        <TimelineOutlined className='m-icon' />
                        <span className='text-md'>Analytics</span>
                    </Link>
                    <li onClick={() => setActiveNav(3)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 3 && "bg-[rgb(234,245,253)]"}`}>
                        <TrendingUp className='m-icon' />
                        <span className='text-md'>Sales</span>
                    </li>
                </ul>


            </div>

            {/* menu */}
            <div className="dashboard flex flex-col mt-4">
                <h3 className='text-base text-[#777] capitalize'>Quick Menu</h3>
                <ul className='list-none flex flex-col gap-1'>
                    <li onClick={() => setActiveNav(4)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 4 && "bg-[rgb(234,245,253)]"}`}>
                        <PersonOutlineOutlined className='m-icon' />
                        <span className='text-md'>Users</span>
                    </li>
                    <li onClick={() => setActiveNav(5)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 5 && "bg-[rgb(234,245,253)]"}`}>
                        <Inventory2Outlined className='m-icon' />
                        <span className='text-md'>Products</span>
                    </li>
                    <li onClick={() => setActiveNav(6)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 6 && "bg-[rgb(234,245,253)]"}`}>
                        <AttachMoneyOutlined className='m-icon' />
                        <span className='text-md'>Transactions</span>
                    </li>
                    <li onClick={() => setActiveNav(7)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 7 && "bg-[rgb(234,245,253)]"}`}>
                        <SignalCellularAltOutlined className='m-icon' />
                        <span className='text-md'>Reports</span>
                    </li>
                </ul>


            </div>

            {/* notifications */}
            <div className="dashboard flex flex-col mt-4">
                <h3 className='text-base text-[#777] capitalize'>Notifications</h3>
                <ul className='list-none flex flex-col gap-1'>
                    <li onClick={() => setActiveNav(8)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 8 && "bg-[rgb(234,245,253)]"}`}>
                        <MailOutlineOutlined className='m-icon' />
                        <span className='text-md'>Mail</span>
                    </li>
                    <li onClick={() => setActiveNav(9)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 9 && "bg-[rgb(234,245,253)]"}`}>
                        <DynamicFeedOutlined className='m-icon' />
                        <span className='text-md'>Feedback</span>
                    </li>
                    <li onClick={() => setActiveNav(10)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 10 && "bg-[rgb(234,245,253)]"}`}>
                        <ChatBubbleOutlineOutlined className='m-icon' />
                        <span className='text-md'>Message</span>
                    </li>
                </ul>


            </div>

            {/* staff */}
            <div className="dashboard flex flex-col mt-4">
                <h3 className='text-base text-[#777] capitalize'>Staff</h3>
                <ul className='list-none flex flex-col gap-1'>
                    <li onClick={() => setActiveNav(11)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 11 && "bg-[rgb(234,245,253)]"}`}>
                        <AirplayOutlined className='m-icon' />
                        <span className='text-md'>Manage</span>
                    </li>
                    <li onClick={() => setActiveNav(12)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 12 && "bg-[rgb(234,245,253)]"}`}>
                        <TimelineOutlined className='m-icon' />
                        <span className='text-md'>analytics</span>
                    </li>
                    <li onClick={() => setActiveNav(13)} className={`items flex gap-2 hover:bg-[rgb(234,245,253)]  px-5 py-1 rounded text-[#7e8081] items-center cursor-pointer ${activeNav === 13 && "bg-[rgb(234,245,253)]"}`}>
                        <ReportOutlined className='m-icon' />
                        <span className='text-md'>Reports</span>
                    </li>
                </ul>


            </div>

        </div>
    )
}

export default SideNav