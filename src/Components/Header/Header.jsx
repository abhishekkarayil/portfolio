import React from 'react'


function Header() {
  return (
    <header className='flex justify-between items-center m-0 bg-white px-50 py-6 shadow-md'>
        <div className='text-xl font-poppins tracking-widest text-gray-600'>PORTFOLIO</div>
        <nav >
            <ul className='flex justify-between items-center gap-7 '>
                <li className='text[#333] font-medium hover:cursor-pointer border-2 rounded-full border-gray-700 hover:text-gray-700 hover:bg-grey-900 px-5 py-1.5 t text-gray-600'>Home</li>
                <li className='text[#333] font-medium hover:cursor-pointer  rounded-full border-grey-700 px-5 py-1.5  text-gray-600'>About</li>
                <li className='text[#333] font-medium hover:cursor-pointer  rounded-full border-grey-700 px-5 py-1.5  text-gray-600'>Works</li>
                <li className='text[#333] font-medium hover:cursor-pointer  rounded-full border-grey-700 px-5 py-1.5  text-gray-600'>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header