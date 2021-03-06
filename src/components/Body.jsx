import React, { useRef } from 'react'
import cart2 from '../../assets/cartw.svg'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
import { useState } from 'react'
import img from '../../assets/shoe1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper";

import Image1 from '../../assets/shoe1.jpg'
import Image2 from '../../assets/shoe2.jpg'
import Image3 from '../../assets/shoe3.jpg'
import Image4 from '../../assets/shoe4.jpg'
function Body() {

  const swipweNavPrevRef=useRef(null);
   const swipweNavNextRef=useRef(null);

    const images=[
        {id:1,source: Image1},
        {id:2,source:Image2},
        {id:3,source:Image3},
        {id:4,source:Image4}
    ]
    console.log(images[0].source);
    const [current,setCurrent]=useState(images[0].source);
  return (
    <>
    <Swiper
      modules={[Navigation,EffectFade]}
      navigation
     speed={800}
     effect
     loop
     slidesPerView={1}
      className="w-11/12 mt-12 h-72 block md:hidden  "

      >        {images.map((img)=>{
        return(
        <>
        <SwiperSlide>
           <img  className=' object-cover w-full h-full rounded active:border-2 active:border-orange-500 active:opacity-50
                transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
                ' src={img.source}/>
          </SwiperSlide>

           
              </>
              )})}
      </Swiper>
          <div className=' block  md:flex m-20 justify-center'>
         <div className=' hidden md:block md:w-1/2  md:p-12'>
           <img className=' w-11/12 rounded' src={current} />
           <div className='w-11/12 flex  p-4 justify-between'>
              {images.map((img)=>{return(
                <img onClick={()=>setCurrent(img.source)} className='w-20 h-20 rounded active:border-2 active:border-orange-500 active:opacity-50
                transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
                ' src={img.source}/>
              )})}
           </div>

         </div>




         <div className='md:w-1/2 p-2'>
          <p className='  font-bold py-4  ' style={{color:'#ff7c1a'}}>SNEAKER COMPANY</p>
          <p className='md:w-1/2 text-3xl font-bold  py-4 text-justify'>Fall Limited Edition Sneakers</p>
          <p className='text-justify  md:w-3/4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis ullam harum vitae voluptates officiis ex repellat aspernatur in mollitia ipsa
             nihil sequi tenetur sit expedita, quasi ipsam assumenda quo.</p>
         
         <p className='text-2xl font-bold py-4'>$123.00
          <span style={{backgroundColor:'#ffb688',color:'#ff7c1a'}} className=' ml-4 rounded p-1 font-bold text-sm'>50%</span></p>
         <p className='text-sm font-semibold text-gray-400 line-through'>$250.00</p>
         
         <div className="md:flex mt-12 ">
          <div className="flex my-4 justify-evenly p-4 mx-4 md:w-1/4 bg-gray-200 rounded cursor-pointer
           transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
          
           <img className='w-4' src={minus} alt="" />
           <p className='font-bold text-sm'>0</p>
           <img  className='w-4' src={plus} alt="" />
          </div>
          <div className="flex my-4 justify-evenly p-4 mx-4 cursor-pointer rounded md:w-1/4
          transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" style={{backgroundColor:'#ff7c1a'}}>
            <img  className='w-4' src={cart2} alt="" />
            <p className='text-white font-semibold text-sm'>Add to cart</p>
          </div>
         </div>
         </div>
      </div>
    </>
  )
}

export default Body

