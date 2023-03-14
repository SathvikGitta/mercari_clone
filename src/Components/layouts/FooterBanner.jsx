import React from 'react'
import { useRef } from "react"
import { Outlet } from 'react-router-dom';
function FooterBanner() {
    const bannerRef = useRef();
    return (
        <>
            <div className='banner-container w-full h-[350px] sm:bg-footerBanner bg-contain bg-no-repeat bg-right sm:bg-[#a8aef2] text-[#050268] mt-3 bg-none bg-[#a8aef2]' id='#footerBanner' ref={bannerRef}>

                <div className='flex flex-col items-center justify-center sm:w-[50%] h-full  pt-9 w-full '>
                    <div>
                        <h1 className='text-6xl font-bold '>Get the app.</h1>
                        <p className='text-2xl pl-3 pt-2'>Sell or buy.Almost anything</p>
                    </div>
                    <div className="buttons-container mt-5 flex items-center justify-center">
                        <a href="" tabIndex="0" className='pr-4'><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" className='w-[125px] h-[40px]' /></a>
                        <a href="https://apps.apple.com/app/id896130944?mt=8" tabIndex="0" className='w-[150px] h-[40px]'><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FooterBanner