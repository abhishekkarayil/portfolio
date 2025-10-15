import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Rectangle26 from '../../assets/Images/Rectangle 26.webp';

function Works() {
    const portfolioProjects = [
        {
            id: 1,
            title: "E-com website",
            description: "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart...",
            image: Rectangle26,
            buttonText: "See More",
            link: "/project/ecom-1"
        },
        {
            id: 2,
            title: "E-com website",
            description: "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart...",
            image: Rectangle26,
            buttonText: "See More",
            link: "/project/ecom-2"
        },
        {
            id: 3,
            title: "E-com website",
            description: "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart...",
            image: Rectangle26,
            buttonText: "See More",
            link: "/project/ecom-3"
        }
    ];

    return (
        <div className='lg:px-50 md:px-15'>
            <div className='flex w-full justify-center mt-15 mb-5 px-5 relative'>
                <h1 className='font-medium text-2xl lg:text-5xl text-[#535353]'>Latest Works</h1>
                <div className='md:flex absolute right-0 gap-3 mt-5 hidden'> 
                    <button className='bg-[#EFEFEF] lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full flex justify-center items-center hover:bg-[#e9e7e7] hover:cursor-pointer'>
                        <IoIosArrowBack />
                    </button>
                    <button className='bg-[#EFEFEF] lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full flex justify-center items-center hover:bg-[#e9e7e7] hover:cursor-pointer'>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>

            {/* Swiper for mobile */}
            <div className="block md:hidden px-4">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true 
                    }}
                    style={{ paddingBottom: '50px' }}
                >
                    {portfolioProjects.map((project) => (
                        <SwiperSlide key={project.id} style={{ height: 'auto' }}>
                            <div className='flex flex-col shadow-lg p-4 rounded-lg bg-white'>
                                <img 
                                    src={project.image} 
                                    alt="project-img" 
                                    className='w-full rounded-lg select-none'
                                    draggable="false"
                                />
                                <p className='font-medium text-xl mt-3'>{project.title}</p>
                                <p className='text-gray-600 text-sm mt-2'>{project.description}</p>
                                <button className='bg-[#F5F5F5] rounded-2xl text-[#5D5D5D] px-4 py-1.5 mt-4 w-fit'>
                                    {project.buttonText}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid for larger screens */}
            <div className='hidden md:flex lg:flex-row md:flex-row flex-col lg:justify-evenly gap-3 justify-center'>
                {portfolioProjects.map((project) => (
                    <div key={project.id} className='flex flex-col shadow-lg hover:shadow-2xl hover:cursor-pointer p-3 rounded-lg'>
                        <div>
                            <img src={project.image} alt="project-img" />
                        </div>
                        <p className='font-medium text-xl mt-1'>{project.title}</p>
                        <p>{project.description}</p>
                        <button className='bg-[#F5F5F5] hover:cursor-pointer hover:bg-[#e9e7e7] rounded-2xl text-[#5D5D5D] w-25 h-7 mt-4'>
                            {project.buttonText}
                        </button>
                    </div>
                ))}
            </div>

            <div className='flex lg:mt-12 mt-8 justify-center items-center'>
                <button className='bg-[#4A4A4A] text-[#FFFFFF] text-sm md:text-base rounded-4xl md:w-49 md:h-10 w-35 h-8 hover:bg-[#5b5959]'>
                    View All Works
                </button>            
            </div>
        </div>
    )
}

export default Works
