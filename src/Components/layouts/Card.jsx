import React from 'react'
import { useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import CardData from './CardData';
import DataStore from "../DataStore.json";

function Card() {
    const scrollRef = useRef();
    // prev slider
    const prevSlider = () => {
        scrollRef.current.scrollLeft -= 800;
    }

    // next slider
    const nextSlider = () => {
        scrollRef.current.scrollLeft += 800;
    }


    return (
        <>
            <main className="CardTemplate w-full h-auto  ">
                <section className='pt-9 px-3'>
                    <div className='flex justify-between items-center px-2 '>
                        <div className="title_section flex items-center">
                            <h1 className='text-xl font-semibold'>Tops&t-shirts</h1>
                            <a href="" className='hover:underline px-3 text-sm  '>See all</a>
                        </div>
                        <div className='btn-section flex gap-2'>
                            <button className="left-btn bg-white border-2 border-colorBorder  p-2 rounded-full cursor-pointer hidden sm:block" onClick={prevSlider}>
                                <BsArrowLeft color='black' />
                            </button>
                            <button className="right-btn bg-white border-2 border-colorBorder p-2 rounded-full cursor-pointer hidden sm:block" onClick={nextSlider}>
                                <BsArrowRight color='black' />
                            </button>
                        </div>
                    </div>


                    {/* Dynamic Data */}
                    <div className="card-container flex gap-3 mt-2 ml-3 basis-full shrink-0 sm:overflow-x-hidden overflow-x-scroll scroll-smooth Card-box" ref={scrollRef}>
                        {DataStore.tshirts.map((e, i) => {
                            return (
                                <>
                                    <CardData title={e.title} desc={e.desc} image={e.image_url} price={e.price} key={i} />
                                </>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Card