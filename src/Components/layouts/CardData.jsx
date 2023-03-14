import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"


function CardData({ image, title, desc, price }) {
    return (
        <>
            <div className="max-w-[235px] w-full shrink-0 relative  rounded group " >
                <div className='relative mt-2 h-[350px] '>
                    <a href="" >
                        <img src={image} alt={title} className="h-2/3 w-full object-cover hover:shadow-lg cursor-pointer" />
                        <h3 className='font-bold mt-2 ml-2 w-[150px] text-ellipsis'>{title}</h3>
                        <p className='font-sans font-base ml-2'>{desc}</p>
                        <span className='font-sans font-semibold absolute bottom-2 ml-2'>{`$${price}`}</span>
                    </a>
                </div>
                <div className='bg-white p-[10px] rounded-full absolute top-3 right-2 hidden group-hover:block cursor-pointer'>
                    <AiOutlineHeart color='black' size={20} />
                </div>
            </div>
        </>
    )
}

export default CardData