import React from 'react'
import { FaBeer } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";





const Home = () => {
  return (
    <section className='w-full relative flex flex-col  justify-center px-50'>
        <div className='flex justify-between items-start'>
            <div className='flex  flex-col pt-25 '>
                <h1 className='text-grey-300 text-5xl font-medium leading-snug'>Hi there! I'm Abhishek.</h1>
                <p className='text-xl mt-4 '><span className='font-semibold'>Web Developer</span> with 1 year of expeariance creating responsive, user-friendly app using react.</p>
                <div>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer'>
                    <FaInstagram className='hover:text-black'/> </a>
                </div>
            </div>
              </div>
    </section>
  )
}

export default Home