import React from 'react'
import myPhoto from "../../assets/Images/Rectangle 31.webp"
import { MdOutlineArrowOutward } from "react-icons/md";

function AboutMe() {
    const skills = ["My Expertise", "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
    
    return (
        <div className='lg:px-50 md:px-15 mt-15 px-2.5'>
            <div className='flex justify-center flex-col items-center relative shadow-2xl rounded-2xl gap-3.5 '>
               
                <div className='w-full hidden md:flex justify-end md:mt-8 md:pr-8 lg:mt-10 lg:pr-10'>
                    <a href="Resume\ABHISHEK-K-CV.pdf"  download className='flex items-center gap-2 text-[#1E1E1E] bg-[#F5F5F5] px-4 py-1 rounded-full hover:cursor-pointer hover:bg-[#e1dddd] transition-all'>
                        View Resume <MdOutlineArrowOutward />
                    </a>
                </div>
                
                <div className='flex md:flex-row flex-col mt-4 lg:gap-15 gap-5 px-3.5 lg:px-25 md:px-10  lg:mt-8'>
                    <div className='flex flex-col items-center lg:items-start gap-5'>
                        <h2 className='text-5xl lg:text-5xl md:text-3xl text-[#535353] font-medium'>About Me</h2>
                        <div className='lg:w-65 w-65 md:w-50 '>
                            <img src={myPhoto} alt="myPhotos"  
                                className="w-full h-full object-cover select-none"
                                draggable="false"/>
                        </div>
                        
                      
                        <div className='w-full flex md:hidden justify-center  '>
                          <a href="Resume\ABHISHEK-K-CV.pdf"  download className='flex items-center gap-2 text-[#1E1E1E] bg-[#F5F5F5] px-4 py-1 rounded-full hover:cursor-pointer hover:bg-[#e1dddd] transition-all'>
                        View Resume 
                    </a>
                        </div>
                    </div>
                    
                    <div className='md:mt-13 lg:mt-18 flex flex-col items-start'>
                        <p className="text-gray-700 leading-relaxed text-sm lg:text-lg">
                            I'm a passionate Web Developer specializing in React and modern front-end technologies.
                            I enjoy turning complex problems into simple, elegant digital experiences. With a strong
                            focus on responsive design and clean code, I create web applications that are fast,
                            accessible, and visually engaging.
                        </p>
                        <p className="text-gray-700 mt-1 leading-relaxed text-sm lg:text-lg">
                            I'm constantly exploring new tools and frameworks to improve my workflow and deliver
                            better user experiences. My goal is to build products that not only look great but also
                            perform seamlessly across all devices.
                        </p>
                    </div> 
                </div>
                
                <div className='flex flex-wrap gap-3.5 md:mt-5 p-2'>
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className={`lg:px-7 md:px-2 px-4 py-1.5 text-sm rounded-md shadow-sm hover:cursor-pointer ${
                                index === 0
                                    ? "bg-[#333] text-white hover:bg-[#4b4b4b] transition-all"
                                    : "bg-[#F5F5F5] text-[#4B4B4B] border hover:bg-[#e8e5e5] border-gray-200"
                            }`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                
                <div className='flex lg:mt-8  justify-center items-center p-5'>
                    <button className='bg-[#4A4A4A] text-[#FFFFFF] text-sm md:text-base rounded-4xl md:w-35 md:h-10 w-35 h-8 hover:bg-[#5b5959]'>
                        Read More
                    </button>            
                </div>
            </div>
        </div>
    )
}

export default AboutMe
