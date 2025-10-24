import React from "react";
import Rectangle26 from "../../assets/Images/Rectangle 26.webp";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "../Footer/Footer";
import Headers from "../Header/Header";

function Projects() {
  const projects = [
    {
      title: "E-com website 1",
      description:
        "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart, and checkout seamlessly.",
      link: "#",
      caseStudy: "#",
      image: Rectangle26,
    },
    {
      title: "E-com website 2",
      description:
        "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart, and checkout seamlessly.",
      link: "#",
      caseStudy: "#",
      image: Rectangle26,
    },
    {
      title: "E-com website 3",
      description:
        "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart, and checkout seamlessly.",
      link: "#",
      caseStudy: "#",
      image: Rectangle26,
    },
    {
      title: "E-com website 4",
      description:
        "A fully responsive e-commerce web application built with React that allows users to browse products, add items to the cart, and checkout seamlessly.",
      link: "#",
      caseStudy: "#",
      image: Rectangle26,
    },
  ];

  return (
   

      <section className="py-16 sm:py-20 bg-white" id="projects">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#535353] mb-10 sm:mb-12">
            Featured Projects
          </h2>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 hover:cursor-pointer">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col shadow-md hover:shadow-xl rounded-2xl bg-white overflow-hidden transition-all duration-300"
              >
            
                <div className="w-full p-4 sm:p-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 sm:h-60 md:h-64 lg:h-72 object-cover rounded-xl"
                  />
                </div>

            
                <div className="p-4 sm:px-6 pb-6 flex flex-col justify-between flex-grow">
           
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-[#242424] hover:text-gray-900 transition-colors"
                    >
                      Go to Website
                      <FiArrowUpRight className="ml-1 mt-[1px]" />
                    </a>
                  </div>

               
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                    {project.description}
                  </p>

                
                  <div className="flex justify-center">
                    <a
                      href={project.caseStudy}
                      className="inline-block px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-sm transition-colors"
                    >
                      View Case Study
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
  );
}

export default Projects;
