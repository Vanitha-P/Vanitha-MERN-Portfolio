import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineArrowRight } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='bg-black text-gray-200 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold primary-color ml-4'>VANITHA P</h1>
            <ul className='hidden md:flex underline text-xl'>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#work'>Work</a></li>
                <li className='p-5'><a href='#contact'>Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden mr-6'> {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%] ease-out duration-500'}>
                <h1 className={`text-3xl font-bold m-4 ${nav ? 'primary-color' : 'hidden'}`}>VANITHA P</h1>
                <ul className={`underline p-8 text-2xl ${nav ? '' : 'hidden'}`}>
                    <li className='p-2' onClick={handleNav}><a href='#about'>About</a></li>
                    <li className='p-2' onClick={handleNav}><a href='#work'>Work</a></li>
                    <li className='p-2' onClick={handleNav}><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar