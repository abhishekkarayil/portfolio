import React from 'react'


function Header() {
  return (
    <header className='flex justify-between items-center m-0 bg-white px-50 py-6 shadow-md'>
        <div className='text-xl font-poppins tracking-widest text-grey-700'>PORTFOLIO</div>
        <nav >
            <ul className='flex justify-between items-center gap-7 '>
                <li className='text[#333] font-medium hover:cursor-pointer border-2 rounded-full border-grey-700 hover:text-grey-700 hover:bg-grey-900 px-5 py-1.5 text-grey-500'>Home</li>
                <li className='text[#333] font-medium hover:cursor-pointer  rounded-full border-grey-700 px-5 py-1.5text-grey-500'>About</li>
                <li className='text[#333] font-medium hover:cursor-pointer  rounded-full border-grey-700 px-5 py-1.5 text-grey-500'>Works</li>
                <li className='text[#333] font-medium hover:cursor-pointer  rounded-full border-grey-700 px-5 py-1.5 text-grey-500'>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header