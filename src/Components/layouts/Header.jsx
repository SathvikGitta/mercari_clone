import React, { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { FiChevronDown, FiBell, FiShoppingCart } from 'react-icons/fi'
import { CiMenuBurger } from "react-icons/ci"



function Header({ bannerRef }) {
    const [isActive, setActive] = useState(false);
    const ListView = useRef();
    // DropDown
    function handleList() {
        return (
            ListView.current.classList.add(setActive(!isActive))
        )
    }

    function handleNone() {
        return (
            ListView.current.classList.remove(setActive(isActive))
        )
    }


    // Scroll to Footer Banner Section 
    return (
        <>
            <div className="header-container select-none ">
                <nav className="navbar bg-[#8971dc]">
                    <ul className="flex justify-between items-center h-20 border-b-border-thin border-borderGrey px-6  text-sm text-white ">
                        <div className="left-container sm:p-2 sm:flex sm:items-center hidden ">
                            <li className='text-3xl font-bold cursor-pointer'>
                                <Link to='/'>
                                    Mercari
                                </Link>
                            </li>

                            <li className="flex items-center px-5 hover:cursor-pointer relative  group" onClick={handleList} onMouseLeave={handleNone}>
                                <div className='flex items-center' >
                                    shop by category <FiChevronDown className='mx-1' />
                                </div>
                                <div className={`absolute bottom-[-85px] right-[-7px] bg-white text-black w-[170px] h-[80px] items-center rounded-lg justify-center ${isActive ? "block" : "hidden"} shadow-md`} ref={ListView}
                                >
                                    <div className='flex flex-col items-center justify-center h-full'>
                                        <Link to="/men">Men</Link>
                                        <Link to="/women">Woman</Link>
                                        <Link to="/kids">Kids</Link>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="right-container sm:flex sm:items-center group">
                            <li className='sm:block hidden px-2 hover:cursor-pointer'><a href="#footerBanner" >Get the app</a></li>
                            <li className='sm:block hidden px-2 hover:cursor-pointer border-t-borderGrey'>Sign up</li>
                            <li className='sm:block hidden px-2 border-r-2 rounded-sm hover:cursor-pointer pr-3'>Log in</li>
                            <li className='sm:block hidden px-2'><FiBell className='text-xl hover:cursor-pointer' /></li>
                            <li className='sm:block hidden px-2'><FiShoppingCart className='text-xl hover:cursor-pointer' /></li>
                            <li className='sm:block hidden mx-2 rounded-lg p-2 bg-white text-colorBorder font-semibold hover:bg-white/90  hover:cursor-pointer hover:transition-all hover:duration-300 hover:delay-200'>List an item</li>
                        </div>
                        <button className='inline-block sm:hidden'>
                            <CiMenuBurger size={28} fontWeight="bold" />
                        </button>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </>
    )
}

export default Header