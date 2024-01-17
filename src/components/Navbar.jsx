import React, { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
const Navbar = () => {

    // const [nav, setNav] = useState(false)


    // window.onscroll = () => {
    //     if (window.scrollY >= 400) {
    //         setNav(true)
    //         return
    //     } else {
    //         setNav(false)
    //     }
    // }

    return (
        <div className='w-full h-14 bg-white shadow-sm flex justify-between px-10 items-center top-0 left-0 fixed  z-50'>
            <div className="left text-2xl font-bold text-blue-500 first-letter:text-red-600 ">
                ADMIN
            </div>
            <div className="right flex gap-4 items-center ">
                <div className="notification relative cursor-pointer">
                    <IoMdNotificationsOutline color='#444' className='relative' size={25} />
                    <span className='absolute bg-red-600 text-white h-4 w-4 rounded-full flex justify-center items-center top-[-10px] right-[-4px]'>2</span>
                </div>

                <div className="web relative cursor-pointer">
                    <FaEarthAmericas color='#444' size={25} />
                    <span className='absolute bg-red-600 text-white h-4 w-4 rounded-full flex justify-center items-center top-[-10px] right-[-4px]'>5</span>
                </div>

                <IoSettingsOutline color='#444' size={25} />

                <div className="profile rounded-full   cursor-pointer ">
                    <img className='rounded-full  h-8 w-8 object-cover ring-2 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhmTe4FGFtGAgbIwVBxoD3FmED3E5EE99UGPItI0xnQ&s" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar