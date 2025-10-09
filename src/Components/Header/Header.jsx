// import React,{useState} from 'react'
// import { FaBars, FaTimes } from "react-icons/fa";



// function Header() {
//    const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <header className='flex justify-between items-center bg-white px-6 py-5 md:px-15 lg:px-50 shadow-md fixed top-0 left-0 w-full z-10'>
//         <div className='text-xl font-poppins tracking-widest text-gray-600'>PORTFOLIO</div>
//         <nav className='hidden md:block' >

//         <ul className="flex items-center ">
//           <li className="text-[#333] font-medium sm-text-l px-5 py-1.2 cursor-pointer border-gray-700 hover:text-gray-700 md:px-5 md:py-1.5 hover:bg-gray-100 ">
//             Home
//           </li>
//           <li className="text-[#333] font-medium cursor-pointer px-5 py-1.2 md:px-5 md:py-1.5  hover:text-gray-700">
//             About
//           </li>
//           <li className="text-[#333] font-medium cursor-pointer px-5 py-1.2 md:px-5 md:py-1.5 hover:text-gray-700">
//             Works
//           </li>
//           <li className="text-[#333] font-medium cursor-pointer px-5 py-1.2 md:px-5 md:py-1.5  hover:text-gray-700">
//             Contact
//           </li>
//         </ul>
//         </nav>


//           <div
//         className="md:hidden text-2xl text-gray-700 cursor-pointer"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>


//       {menuOpen && (

//         <div className="absolute top-16 left-0 w-full h-screen bg-white shadow-md md:hidden z-10 
//                 transition-all duration-700 ease-in-out 
//                 transform translate-y-0 opacity-100">
//   <ul className="flex flex-col items-center py-5 space-y-4 ">
//     <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition shadow-md w-full flex justify-center items-center py-5">
//       Home
//     </li>
//     <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition shadow-md w-full flex justify-center items-center py-2">
//       About
//     </li>
//     <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition shadow-md w-full flex justify-center items-center py-2">
//       Works
//     </li>
//     <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition shadow-md w-full flex justify-center items-center py-2">
//       Contact
//     </li>
//   </ul>
// </div>


//       )}
//     </header>
//   );
// }

// export default Header

import React from 'react';
import StaggeredMenu from './StaggeredMenu/StaggeredMenu';

function Header() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Works', ariaLabel: 'View our works', link: '/works' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <header className='flex justify-between items-center bg-white px-6 py-5 md:px-15 lg:px-50 shadow-md fixed top-0 left-0 w-full z-10'>
      <div className='text-xl font-poppins tracking-widest text-gray-600'>PORTFOLIO</div>
      <nav className='hidden md:block'>
        <ul className="flex items-center ">
          <li className="text-[#333] font-medium sm-text-l px-5 py-1.2 cursor-pointer border-gray-700 hover:text-gray-700 md:px-5 md:py-1.5 hover:bg-gray-100 ">
            Home
          </li>
          <li className="text-[#333] font-medium cursor-pointer px-5 py-1.2 md:px-5 md:py-1.5  hover:text-gray-700">
            About
          </li>
          <li className="text-[#333] font-medium cursor-pointer px-5 py-1.2 md:px-5 md:py-1.5 hover:text-gray-700">
            Works
          </li>
          <li className="text-[#333] font-medium cursor-pointer px-5 py-1.2 md:px-5 md:py-1.5  hover:text-gray-700">
            Contact
          </li>
        </ul>
      </nav>

      {/* Only show StaggeredMenu on mobile */}
      <div className="md:hidden w-full h-full fixed top-0 flex z-40">
        <StaggeredMenu
          position="left"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#111111"
          openMenuButtonColor="#111111"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
      
          accentColor="#ff6b6b"
          isFixed={true}
        />
      </div>
    </header>
  );
}

export default Header;