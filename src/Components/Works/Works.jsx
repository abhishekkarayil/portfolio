import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import Rectangle26 from '../../assets/Images/Rectangle 26.webp';

const portfolioProjects = [
  {
    id: 1,
    title: "E-com website 1",
    description: "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart...",
    image: Rectangle26,
    buttonText: "See More",
    link: "/project/ecom-1"
  },
  {
    id: 2,
    title: "E-com website 2",
    description: "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart...",
    image: Rectangle26,
    buttonText: "See More",
    link: "/project/ecom-2"
  },
  {
    id: 3,
    title: "E-com website 3",
    description: "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart...",
    image: Rectangle26,
    buttonText: "See More",
    link: "/project/ecom-3"
  },
  {
    id: 4,
    title: "E-com website 4",
    description: "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart...",
    image: Rectangle26,
    buttonText: "See More",
    link: "/project/ecom-4"
  }
];

const ProjectCard = ({ project }) => (
  <div className='flex flex-col shadow-lg hover:shadow-2xl transition-shadow p-4 md:p-3 rounded-lg bg-white'>
    <img 
      src={project.image} 
      alt={project.title}
      className='w-full rounded-lg select-none'
      draggable="false"
    />
    <p className='font-medium text-xl mt-3 md:mt-1'>{project.title}</p>
    <p className='text-gray-600 text-sm md:text-base mt-2'>{project.description}</p>
    <button className='bg-[#F5F5F5] hover:bg-[#e9e7e7] rounded-2xl text-[#5D5D5D] px-4 py-1.5 md:py-0 md:w-25 md:h-7 mt-4 w-fit transition-colors'>
      {project.buttonText}
    </button>
  </div>
);

const MobileSlider = ({ projects, currentSlide, setCurrentSlide }) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => touchStartX.current = e.touches[0].clientX;
  const handleTouchMove = (e) => touchEndX.current = e.touches[0].clientX;
  
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (distance > threshold) {
      setCurrentSlide((prev) => prev === projects.length - 1 ? 0 : prev + 1);
    } else if (distance < -threshold) {
      setCurrentSlide((prev) => prev === 0 ? projects.length - 1 : prev - 1);
    }
  };

  return (
    <div
      className="block md:hidden px-4 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
    >
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {projects.map((project) => (
          <div key={project.id} className="w-full flex-shrink-0 px-2">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-[#535353]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const DesktopSwiper = ({ projects, swiperRef }) => (
  <div className='hidden md:block'>
    <Swiper
      modules={[Navigation]}
      spaceBetween={12}
      slidesPerView={3}
      onSwiper={(swiper) => swiperRef.current = swiper}
      breakpoints={{
        768: { slidesPerView: 3, spaceBetween: 12 },
        1024: { slidesPerView: 3, spaceBetween: 12 },
      }}
      className="px-3"
      style={{ paddingBottom: '25px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '12px' }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

function Works() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className='lg:px-50 md:px-15'>
      <div className='flex w-full justify-center mt-15 mb-5 px-5 relative'>
        <h1 className='font-medium text-2xl lg:text-5xl text-[#535353]'>
          Latest Works
        </h1>
        
        <div className='md:flex absolute right-0 gap-3 mt-5 hidden'> 
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className='bg-[#EFEFEF] lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full flex justify-center items-center hover:bg-[#e9e7e7] transition-colors'
            aria-label="Previous slide"
          >
            <IoIosArrowBack />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className='bg-[#EFEFEF] lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full flex justify-center items-center hover:bg-[#e9e7e7] transition-colors'
            aria-label="Next slide"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <MobileSlider 
        projects={portfolioProjects} 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />

      <DesktopSwiper 
        projects={portfolioProjects}
        swiperRef={swiperRef}
      />

      <div className='flex lg:mt-8 mt-8 justify-center items-center'>
        <Link to="/works">
          <button className="bg-[#4A4A4A] text-[#FFFFFF] text-sm md:text-base rounded-4xl md:w-49 md:h-10 w-35 h-8 hover:bg-[#5b5959] transition-colors">
            View All Works
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Works;
