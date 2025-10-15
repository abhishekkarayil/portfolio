import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
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

        <div className='lg:px-50'>
            <div className='flex w-full justify-center mt-20 mb-10 px-5 relative'>
                <h1 className=' font-medium text-5xl text-[#535353] '>Latest Works </h1>
                <div className='flex absolute right-0 gap-3 mt-5'>
                    <button className='bg-[#EFEFEF] w-9 h-9 rounded-full flex justify-center items-center hover:bg-[#e9e7e7] hover:cursor-pointer'><IoIosArrowBack /></button>
                    <button className='bg-[#EFEFEF] w-9 h-9 rounded-full flex justify-center items-center hover:bg-[#e9e7e7] hover:cursor-pointer'><IoIosArrowForward className='' /></button>       </div>


            </div>
            <div className='flex lg:flex-row md:flex-row flex-col lg:justify-evenly gap-3 justify-center'>
                {
                    portfolioProjects.map((project) => (
                        <div key={project.id} className='flex flex-col shadow-lg hover:shadow-2xl hover:cursor-pointer p-3 rounded-lg'>
                            <div><img src={project.image} alt="project-img" /></div>
                            <p className='font-medium text-xl mt-1'>{project.title}</p>
                            <p>{project.description}</p>
                            <button className='bg-[#F5F5F5] hover:cursor-pointer hover:bg-[#e9e7e7] rounded-2xl  text-[#5D5D5D] w-25 h-7 mt-4'>{project.buttonText}</button>

                        </div>
                    ))

                }

            </div>
            <div className='flex mt-12 justify-center items-center'><button className='bg-[#4A4A4A] text-[#FFFFFF] rounded-4xl w-49 h-10 hover:bg-[#5b5959] hover:'>View All Works</button></div>



        </div>





    )
}

export default Works