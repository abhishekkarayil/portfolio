import React from "react";

function Footer() {
    const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Works', ariaLabel: 'View our works', link: '/works' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];
  return (
    
    <footer className="bg-gray-900 text-gray-800 ">
       <div className="bg-gray-100 py-4  flex flex-col md:flex-row justify-between items-center md:px-15 lg:px-50">
       
        <ul className="flex  text-sm mb-3 md:mb-0">
         
{
            menuItems.map((item, index) => (
              <li 
                key={index}
                className="text-[#333] font-medium sm-text-l px-5 py-1.2 cursor-pointer border-gray-700 hover:text-gray-700 md:px-5 md:py-1.5 hover:bg-gray-100 ">
                {item.label}
              </li>
            ))    
          }
          
        </ul>
      

     
        <p className="text-xs text-gray-600">
          © 2025 Abhishek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
