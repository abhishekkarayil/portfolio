import React from 'react'
import { FaBeer } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import bgImage from "../../assets/Images/Subtract.webp";
import ptImage from "../../assets/Images/abhishek.webp"
import { FaAnglesDown } from "react-icons/fa6";
import Time from './Time';





const Home = () => {
  // local socials with icons (don't import from Header)
  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com', icon: <FaInstagram /> },
    { label: 'X', link: 'https://twitter.com', icon: <FaXTwitter /> },
    { label: 'LinkedIn', link: 'https://linkedin.com', icon: <FaLinkedinIn /> },
  ];

  return (
    <section className='w-full relative flex flex-col justify-center md:px-15 lg:px-50 px-5 mt-20'>
      <div className='flex flex-col justify-between items-start'>
        <div className='flex pt-25 w-full md:flex-row flex-col items-center lg:space-x-20 lg:space-y-0 space-y-6'>
          <div className='flex flex-col items-end text-sm md:hidden w-full text-right text-[#5B5B5B] space-y-2 font-mono'>
            <p>CURENT LOCATION: INDIA</p>
            <div className='flex items-center'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-2' />LOCAL TIME: <Time/>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <h1 className='text-gray-600 lg:text-5xl text-3xl font-medium leading-snug'>Hi there! <br /> I'm Abhishek.</h1>
            <p className='lg:text-xl text-sm max-w-130 text-[#131313] leading-relaxed mt-4'><span className='font-semibold'>Web Developer</span> with 1 year of experience creating responsive, user-friendly app using react.</p>
          </div>

          <div className='md:flex flex-col items-end text-sm hidden w-full text-right text-[#5B5B5B] space-y-2 font-mono'>
            <p>CURENT LOCATION: INDIA</p>
            <div className='flex items-center'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-2' />LOCAL TIME: <Time/>
            </div>
          </div>
        </div>

        <div className='w-full flex relative mt-5'>
          <img src={bgImage} alt="Background" loading="lazy" decoding="async" className='bg-cover grayscale-100 w-full lg:h-70' />

          <div className='absolute flex '>
            <ul className='flex gap-[9px] ml-2 mt-1 text-[6px] md:gap-5 md:ml-3 lg:gap-10 md:text-base md:mt-1 text-gray-600 lg:ml-6 rounded-3xl lg:p-2'>
              {socialItems.map((social, index) => (
                <li key={index}>
                  <a href={social.link} target='_blank' rel='noreferrer' className='inline-flex items-center'>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <img src={ptImage} alt="abhishek" loading="lazy" decoding="async" className='absolute lg:w-[300px] h-26 ml-45 md:w-50 md:h-[245px] md:ml-100 bottom-[1px] lg:h-[350px] lg:ml-180 lg:bottom-[0.5px]' />

          <button className='absolute bg-[#4A4A4A] text-white text-[6px] px-3 py-1.5 md:text-xs md:px-6 md:py-1 md:right-2 lg:text-xl lg:px-10 lg:py-1 rounded-4xl bottom-0 right-1 hover:bg-[#464444] hover:cursor-pointer'>
            Say Hello
          </button>
        </div>
      </div>

      <div className="text-center mt-6 flex flex-col items-center gap-1">
        <p className="text-sm text-gray-600">Scroll Down</p>
        <div className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <FaAnglesDown className='lg:text-xl md:text-lg text-base text-gray-600 mt-2 animate-bounce' />
      </div>
    </section>
  )
}

export default Home