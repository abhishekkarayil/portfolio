import React from 'react'
import { FaBeer } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import bgImage from "../../assets/Images/gb4.jpg";


import { FaInstagram } from "react-icons/fa";





const Home = () => {
  return (
    <section className='w-full relative flex flex-col  justify-center px-50'>
      <div className='flex justify-between items-start'>

        <div className='flex  flex-col pt-25 '>
          <h1 className='text-grey-500 text-5xl font-medium leading-snug'>Hi there! I'm Abhishek.</h1>
          <p className='text-xl max-w-130 leading-relaxed mt-4 '><span className='font-semibold'>Web Developer</span> with 1 year of expeariance creating responsive, user-friendly app using react.</p>
          <div className='mt-6 flex gap-6 ml-8 text-xl text-grey-300 rounded-br-3xl bg-white'>
            <a href="https://instagram.com" target='_blank' rel='noreferrer'>
              <FaInstagram className='hover:text-black' /> </a>
            <a href="https://twitter.com" target='_blank' rel='noreferrer'>
              <FaXTwitter className='hover:text-black' /></a>
            <a href="https://linkedin.com" target='_blank' rel='noreferrer'>
              <FaLinkedinIn className='hover:text-black' /></a>
          </div>
        </div>
        <div className='flex flex-col items-end pt-25 text-right text-grey-300 text-sm space-y-2 font-mono'>
        <p>CURENT LOCATION: INDIA</p>
        <p className='flex items-center '>
          <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>LOCAL TIME: 6:18PM</p>

        </div>
        </div>
      <div className='w-full relative max-w-5xl mx-auto '>
          <img src={bgImage} alt="Abhishek"  className='bg-cover gb-centr grayscale-100 rounded-3xl w-[2000px] h-70' />
          
        </div>
    </section>
  )
}

export default Home