import React from 'react'
import { FaBeer } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import bgImage from "../../assets/Images/Subtract.webp";
import ptImage from "../../assets/Images/abhishek.webp"
import { FaAnglesDown } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Time from './Time';





const Home = () => {
  return (
    <section className='w-full relative flex flex-col  justify-center md:px-15 lg:px-50 px-5 mt-20 '>
      <div className='flex flex-col justify-between items-start'>

        <div className='flex pt-25 w-full md:flex-row lg:flex-row flex-col lg:space-x-20 lg:space-y-0 space-y-6 '>
          <div className='flex flex-col w-full space-y-4'>
            <h1 className=' text-gray-600 lg:text-5xl text-3xl font-medium leading-snug'>Hi there! I'm Abhishek.</h1>
            <p className='lg:text-xl text-l max-w-130 text-[#131313] leading-relaxed mt-4 '><span className='font-semibold'>Web Developer</span> with 1 year of expeariance creating responsive, user-friendly app using react.</p>
          </div>
          <div className='flex flex-col lg:items-end w-full md:items-end md:text-right lg:text-right text-[#5B5B5B] text-sm space-y-2 font-mono'>
            <p>CURENT LOCATION: INDIA</p>
            <p className='flex items-center '>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>LOCAL TIME: <Time/></p>

          </div>
        </div>

        <div className='w-full flex  relative  mt-5 '>
          <img src={bgImage} alt="Background"  loading="lazy"decoding="async" className='bg-cover grayscale-100 w-full lg:h-70' />

          <div className=' absolute  flex gap-2 ml-2 text-xs  md:gap-6 md:ml-3 lg:gap-8 lg:text-base  md:mt-1 text-gray-600 lg:ml-6 rounded-3xl lg:p-2'>
            <a href="https://instagram.com" target='_blank' rel='noreferrer'>
              <FaInstagram className='hover:text-black' /> </a>
            <a href="https://twitter.com" target='_blank' rel='noreferrer'>
              <FaXTwitter className='hover:text-black' /></a>
            <a href="https://linkedin.com" target='_blank' rel='noreferrer'>
              <FaLinkedinIn className='hover:text-black' /></a>
          </div>
          <img src={ptImage} alt="abhishek" oading="lazy"decoding="async" className='absolute lg:w-[300px] h-35 ml-60 md:w-50 md:h-[245px] md:ml-100 bottom-[.8px] lg:h-[350px] lg:ml-180 lg:bottom-[0.5px]' />
          <button className='absolute bg-[#4A4A4A] text-white text-[9px] px-3 py:1.5 outline-5 md:text-xs md:px-6 md:py-1 md:right-2 lg:text-xl lg:px-10 lg:py-1 rounded-4xl bottom-0 right-1 outline-white md:outline-7 lg:outline-5 hover:bg-[#464444] hover:cursor-pointer'>Say Hello</button>
          
        </div>
        
      </div>
      <div class="text-center mt-6 flex flex-col items-center gap-1">
    <p class="text-sm text-gray-600">Scroll Down</p>
    <div className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
    <FaAnglesDown className='text-xl text-gray-600 mt-2 animate-bounce' />
  </div>
    </section>





  )
}

export default Home