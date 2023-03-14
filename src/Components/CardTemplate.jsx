import React from 'react'
import { useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import DataStore from "../DataStore.json";



function CardTemplate() {
  // prev slider
  const prevSlider = () => {
    scrollRef.current.scrollLeft -= ImageWidthRef;
  }

  // next slider
  const nextSlider = () => {
    scrollRef.current.scrollLeft += ImageWidthRef;
  }

  const scrollRef = useRef();

  const widthRef = useRef();
  let ImageWidthRef = scrollRef.current.scrollWidth / 2;

  return (
    <>
      <main className="CardTemplate w-full h-auto  ">
        <section className='pt-9 px-3'>
          <div className='flex justify-between items-center px-2 '>
            <div className="title_section flex items-center">
              <h1 className='text-xl font-semibold'>Tops & t-shirts</h1>
              <a href="" className='hover:underline px-3'>See all</a>
            </div>
            <div className='btn-section flex gap-2'>
              <button className="left-btn bg-white border-2 border-colorBorder  p-2 rounded-full cursor-pointer hidden sm:block" onClick={prevSlider} >
                <BsArrowLeft color='black' />
              </button>
              <button className="right-btn bg-white border-2 border-colorBorder p-2 rounded-full cursor-pointer hidden sm:block" onClick={nextSlider}>
                <BsArrowRight color='black' />
              </button>
            </div>
          </div>

         
        </section>
      </main>
    </>
  )
}

export default CardTemplate

