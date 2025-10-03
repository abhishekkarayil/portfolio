import React from 'react'
import { FaBeer } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import bgImage from "../../assets/Images/gb4.jpg";


import { FaInstagram } from "react-icons/fa";





const Home = () => {
  return (
    <section className='w-full relative flex flex-col  justify-center px-50 '>
      <div className='flex flex-col justify-between items-start'>

        <div className='flex pt-25 w-full '>
          <div className='flex flex-col w-full space-y-4 max-w-3xl'>
            <h1 className='text-grey-500 text-5xl font-medium leading-snug'>Hi there! I'm Abhishek.</h1>
            <p className='text-xl max-w-130 leading-relaxed mt-4 '><span className='font-semibold'>Web Developer</span> with 1 year of expeariance creating responsive, user-friendly app using react.</p>
          </div>
          <div className='flex flex-col items-end w-full text-right text-grey-300 text-sm space-y-2 font-mono'>
            <p>CURENT LOCATION: INDIA</p>
            <p className='flex items-center '>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>LOCAL TIME: 6:18PM</p>

          </div>
        </div>

        <div className='w-full flex  relative  mt-5 '>
          <img src={bgImage} alt="Abhishek" className='bg-cover grayscale-100 rounded-4xl w-full h-70' />
          <div className=' absolute  flex gap-6 text-xl text-gray-600 bg-white rounded-3xl p-3'>
            <a href="https://instagram.com" target='_blank' rel='noreferrer'>
              <FaInstagram className='hover:text-black' /> </a>
            <a href="https://twitter.com" target='_blank' rel='noreferrer'>
              <FaXTwitter className='hover:text-black' /></a>
            <a href="https://linkedin.com" target='_blank' rel='noreferrer'>
              <FaLinkedinIn className='hover:text-black' /></a>
          </div>
          <button className='absolute bg-[#4A4A4A] text-white px-8 py-2 outline-10 outline-white rounded-4xl bottom-0 right-1'>Say Hello</button>


        </div>
        
      </div>
      <div class="text-center mt-6">
    <p class="text-sm text-gray-600">Scroll Down</p>
  </div>



    </section>
  )
}

export default Home