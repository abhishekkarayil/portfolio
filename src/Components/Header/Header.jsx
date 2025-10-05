import React,{useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";



function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='flex justify-between items-center bg-white px-6 py-5 md:px-15 lg:px-50 shadow-md'>
        <div className='text-xl font-poppins tracking-widest text-gray-600'>PORTFOLIO</div>
        <nav className='hidden md:block' >
          
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
 

          <div
        className="md:hidden text-2xl text-gray-700 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>


      {menuOpen && (
        <div className="absolute top-16 left-0 w-full h-screen bg-amber-500 shadow-md md:hidden">
          <ul className="flex flex-col items-center py-5 space-y-4">
            <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition ">
              Home
            </li>
            <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition">
              About
            </li>
            <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition">
              Works
            </li>
            <li className="text-gray-700 font-medium hover:text-black cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header