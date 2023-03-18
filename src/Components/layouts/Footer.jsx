import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer--container bg-[#272b61] w-full h-auto pt-5">
                <div className='flex flex-col sm:flex-row sm:justify-around text-white pt-9 '>
                    <div className='sm:pb-3'>
                        <h1 className='font-semibold pb-2'>SHOP</h1>
                        <ul className='leading-relax'>
                            <li className='text-sm pb-2'><a href="#">Categories</a></li>
                            <li className='text-sm pb-2'><a href="#">Brands</a></li>
                            <li className='text-sm pb-2'><a href="#">Deals</a></li>
                            <li className='text-sm pb-2'><a href="#">Shop Local</a></li>
                            <li className='text-sm pb-2'><a href="#">Keywords    </a></li>
                        </ul>
                    </div>

                    <div className='sm:pb-3'>
                        <h1 className='font-semibold pb-2'>ALL FROM HOME</h1>
                        <ul >
                            <li className='pb-2 text-sm'><a href="#" >Mercari Local</a></li>
                            <li className='pb-2 text-sm'><a href="#" >Buy Now,Pay Later</a></li>
                            <li className='pb-2 text-sm'><a href="#" >Shipping</a></li>
                            <li className='pb-2 text-sm'><a href="#" >Packing Guideliens</a></li>
                            <li className='pb-2 text-sm'><a href="#" >Authenticate</a></li>
                            <li className='pb-2 text-sm'><a href="#" >Instant Pay</a></li>
                            <li className='pb-2 text-sm'><a href="#" >Sell from Home</a></li>
                        </ul>
                    </div>

                    <div className='sm:pb-3'>
                        <h1 className='font-semibold pb-2'>SUPPORT</h1>
                        <ul>
                            <li className='text-sm pb-2'><a href="#">Contact Us</a></li>
                            <li className='text-sm pb-2'><a href="#">Help Center</a></li>
                            <li className='text-sm pb-2'><a href="#">Market Guidelines</a></li>
                            <li className='text-sm pb-2'><a href="#">Safety Guidelines</a></li>
                            <li className='text-sm pb-2'><a href="#">Seller Protection</a></li>
                            <li className='text-sm pb-2'><a href="#">Buyer Protection</a></li>
                            <li className='w-32 leading-relaxed text-sm pb-2'><a href="#">Request From the Law Enforcement</a></li>
                        </ul>
                    </div>

                    <div className='sm:pb-3'>
                        <h1 className='font-semibold pb-2'>POLICY CENTER</h1>
                        <ul>
                            <li className='text-sm pb-2'><a href="#">Terms of Service</a></li>
                            <li className='text-sm pb-2'><a href="#">Privacy</a></li>
                            <li className='text-sm pb-2'><a href="#">Prohibited Items</a></li>
                            <li className='text-sm pb-2'><a href="#">Prohibited Conduct</a></li>
                            <li className='text-sm pb-2'><a href="#">Electronic Communications</a></li>
                            <li className='text-sm pb-2'><a href="#">Electronic Communicationz</a></li>
                            <li className='text-sm pb-2'><a href="#">Mercari SMS Policy</a></li>
                            <li className='text-sm pb-2'><a href="#">DMCA/Copyright</a></li>
                            <li className='text-sm pb-2'><a href="#">Sales Tax</a></li>
                            <li className='text-sm pb-2'><a href="#">1099-K Reporting and Disclosure Information</a></li>
                            <li className='text-sm pb-2'><a href="#">Refunds and Returns</a></li>
                            <li className='text-sm pb-2'><a href="#">Minors</a></li>
                        </ul>
                    </div>

                    <div className='sm:pb-3'>
                        <h1 className='font-semibold pb-2'>Company </h1>
                        <ul>
                            <li className='text-sm pb-2'><a href="#">About Us</a></li>
                            <li className='text-sm pb-2'><a href="#">Blog</a></li>
                            <li className='text-sm pb-2'><a href="#">Carrers</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex items-center ml-3 text-white'>
                    <h1><a href="" className='font-semibold text-lg'>MERCARI</a></h1>
                    <span className='text-xs pl-2 text-zinc-400 font-sans'>NMLS ID: 1486447 PO Box 60178, Palo Alto, CA 94306</span>
                </div>
            </div>
        </>
    )
}

export default Footer