import React, { useEffect } from 'react'
import Footer from './Footer'

function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    
    <>
    <div className=' absolute top-0 left-0 min-h-screen w-full bg-radial from-white to-[#999999] -z-50' />
            <div className='-mt-52 md:mt-24 mb-36 max-w-[1100px] mx-auto px-5'>
                <h1 className=' text-[40px] md:text-[64px] text-center md:text-left'>
                    Privacy Policy
                </h1>
                <p className=' text-[20px] md:text-[24px] text-center md:text-left mt-8'>
                Lorem ipsum dolor sit amet consectetur. Malesuada quis nisi platea condimentum. Velit pharetra ut aliquam adipiscing nulla vel eu. Leo eget egestas arcu lectus at. Molestie integer neque ornare etiam enim auctor id orci.
                </p>
            </div>
           
    </>
  )
}

export default Terms