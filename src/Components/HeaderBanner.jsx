import React from 'react'
import { FiSearch } from "react-icons/fi"
// import LandingpageImage from "../assets/images/landingpage_banner.jpg"
function HeaderBanner() {
    const suggestion_list = ["Retro Video Games", "Organisation", "Workout gear"]
    return (
        <>
            <div className="banner-container h-[87vh]  w-full bg-landingPage bg-cover">
                <div className="cta-text-container p-16 ">
                    <h1 className="font-bold text-6xl w-1/2 text-white">Make secondhand your first choice</h1>
                    <div className="search-container mt-6 bg-white w-1/2 h-[52px] flex items-center rounded-3xl">
                        <input type="search" name="searchInput" id="input-holder" placeholder='Shop one-of-a-kind finds' className=' rounded-full border-none outline-none ml-3 px-3 w-11/12 text-colorBorder ' />
                        <h1 className='text-black'><FiSearch className='text-xl cursor-pointer' /></h1>
                    </div>
                    <div className="container-search-input-suggestions flex">
                        {
                            suggestion_list.map((item, index) => {
                                return (
                                    <div className="suggestion-box mt-3 " key={index} >
                                        <span className='bg-white ml-2 text-black rounded-3xl p-[7px] text-sm cursor-pointer hover:bg-[#e2e1e4]'>{item}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBanner