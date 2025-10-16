import React from 'react'
import myPhoto from "../../assets/Images/Rectangle 31.webp"
import { MdOutlineArrowOutward } from "react-icons/md";



function AboutMe() {

    const skills = ["My Expertise", "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
  return (
    
    <div className='px-50 flex justify-center items-center relative shadow-2xl rounded-2xl gap-20'>
    
        <div className='flex flex-col items-center lg:items-start  gap-3  '>
        <h2 className='text-3xl text-[#535353] font-medium'>About Me</h2>
        <div className='w-50'>
            <img src={myPhoto} alt="myPhotos"  
            className="w-full h-full object-cover select-none"
            draggable="false"/>
        </div>
        </div >
        <div className='mt-8 lg:mt-0 flex flex-col items-start'>
        <div className='w-full flex justify-end mb-2'>
            <button className='flex items-center gap-2 text-[#1E1E1E] bg-[#F5F5F5] px-4 py-1 rounded-full hover:cursor-pointer hover:bg-[#e1dddd] transition-all'>View Resume <MdOutlineArrowOutward /></button>
        </div>
         <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          I’m a passionate Web Developer specializing in React and modern front-end technologies.
          I enjoy turning complex problems into simple, elegant digital experiences. With a strong
          focus on responsive design and clean code, I create web applications that are fast,
          accessible, and visually engaging.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed text-base md:text-lg">
          I'm constantly exploring new tools and frameworks to improve my workflow and deliver
          better user experiences. My goal is to build products that not only look great but also
          perform seamlessly across all devices.
        </p>
       
        <div className='flex flex-wrap gap-3 mt-6'>
            {
                skills.map((skill, index) => (
                     <span
              key={index}
              className={`px-3 py-1.5 text-sm rounded-md  shadow-sm hover:cursor-pointer ${
                index === 0
                  ? "bg-[#333] text-white hover:bg-[#4b4b4b] transition-all"
                  : "bg-[#F5F5F5] text-[#4B4B4B] border hover:bg-[#e8e5e5] border-gray-200"
              }`}
            >
              {skill}
            </span>
           )) }
        </div>
         </div> 
        
    </div>
   
  )
}

export default AboutMe