import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import bgImage from "../../assets/Images/bgHeroBig.webp";
import bgImage1 from "../../assets/Images/bgHeroPhone.webp";
import { FaAnglesDown } from "react-icons/fa6";
import Time from './Time';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../useDarkMode/useDarkMode';

const Home = () => {
  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com', icon: <FaInstagram /> },
    { label: 'X', link: 'https://twitter.com', icon: <FaXTwitter /> },
    { label: 'LinkedIn', link: 'https://linkedin.com', icon: <FaLinkedinIn /> },
  ];

  const [isDarkMode] = useDarkMode();

  return (
    <section
      className={`w-full relative flex flex-col justify-center md:px-15 lg:px-50 px-5 transition-colors duration-300 
        ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
    >
      <div className="flex flex-col justify-between items-start">
        
        {/* Location + Intro Section */}
        <div className="flex pt-25 w-full md:flex-row flex-col items-start lg:space-x-20 lg:space-y-0 space-y-6">

          {/* Mobile Location */}
          <div className={`flex flex-col items-end text-sm md:hidden w-full text-right space-y-1 font-mono flex-shrink-0 
            ${isDarkMode ? "text-gray-400" : "text-[#5B5B5B]"}`}>
            <p className="tracking-wide">CURRENT LOCATION: INDIA</p>
            <div className="flex items-center justify-end">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <span className="tracking-wide inline-flex items-center">
                LOCAL TIME: <Time />
              </span>
            </div>
          </div>

          {/* Intro Text */}
          <div className="flex flex-col w-full md:w-auto flex-1">
            <h1 className={`lg:text-5xl text-3xl font-medium leading-snug transition-colors duration-300 
              ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
              Hi there! I'm Abhishek.
            </h1>
            <p className={`lg:text-xl text-sm max-w-130 leading-relaxed mt-4 transition-colors duration-300 
              ${isDarkMode ? "text-gray-300" : "text-[#131313]"}`}>
              <span className="font-semibold">Web Developer</span> with 1 year of experience creating responsive, user-friendly apps using React.
            </p>
          </div>

          {/* Desktop Location */}
          <div className={`hidden md:flex flex-col items-end text-xs w-auto text-right space-y-1 font-mono flex-shrink-0 
            ${isDarkMode ? "text-gray-400" : "text-[#5B5B5B]"}`}>
            <p className="tracking-wide">CURRENT LOCATION: INDIA</p>
            <div className="flex items-center justify-end gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="tracking-wide inline-flex items-center">
                LOCAL TIME: <Time />
              </span>
            </div>
          </div>
        </div>

        {/* Background Images + Social Links + Contact Button */}
        <div className="w-full flex relative mt-8">
          {/* Desktop Image */}
          <img
            src={bgImage}
            alt="Background Desktop"
            loading="lazy"
            decoding="async"
            className={`hidden md:block w-full h-auto object-cover rounded-lg transition-opacity duration-300 
              ${isDarkMode ? "opacity-70" : "opacity-100"}`}
          />

          {/* Mobile Image */}
          <img
            src={bgImage1}
            alt="Background Mobile"
            loading="lazy"
            decoding="async"
            className={`md:hidden w-full h-auto object-cover rounded-lg transition-opacity duration-300 
              ${isDarkMode ? "opacity-70" : "opacity-100"}`}
          />

          {/* Social Media */}
          <div className="absolute bottom-45 sm:bottom-55 left-2 md:bottom-41 md:left-0 lg:bottom-73">
            <ul className="flex gap-5 md:gap-4 lg:gap-8 rounded-full px-3 py-2 md:px-4 md:py-2 lg:px-10 lg:py-2.5">
              {socialItems.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center text-sm md:text-base lg:text-xl transition-colors duration-300 
                      ${isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-[#4B4B4B] hover:text-[#1e1d1d]"}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button */}
          <Link to="/contact">
            <button
              className={`absolute text-xs md:text-sm lg:text-base px-4 py-1 md:px-5 md:py-1 lg:px-12 lg:py-2.5 rounded-full bottom-1 right-2 md:bottom-0 lg:bottom-0 lg:right-5 transition-colors duration-300 font-medium 
                ${isDarkMode
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
                  : "bg-[#4A4A4A] text-white hover:bg-[#3c3c3c]"}`}
            >
              Say Hello
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Down Section */}
      <div className="text-center mt-8 lg:mt-12 flex flex-col items-center gap-2">
        <p className={`text-sm font-medium transition-colors duration-300 
          ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Scroll Down
        </p>
        <div
          className={`w-24 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent to-transparent 
            ${isDarkMode ? "via-gray-500" : "via-gray-400"}`}
        />
        <FaAnglesDown
          className={`text-base md:text-lg lg:text-xl mt-2 animate-bounce transition-colors duration-300 
            ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        />
      </div>
    </section>
  );
};

export default Home;
