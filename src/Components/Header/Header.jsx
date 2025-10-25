import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu/StaggeredMenu';

function Header() {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Works', ariaLabel: 'View our works', link: '/works' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
  ];

  return (
    <header className="flex justify-between items-center bg-white px-6 py-5 md:px-15 lg:px-50 shadow-md fixed top-0 left-0 w-full z-10">
      
      <div className="text-xl font-poppins tracking-widest text-gray-600">
        PORTFOLIO
      </div>

   
      <nav className="hidden md:block">
        <ul className="flex items-center">
          {menuItems.map((item, index) => (
            <li key={index} className="px-5">
              <Link
                to={item.link}
                aria-label={item.ariaLabel}
                className={`font-medium cursor-pointer transition-all text-[#A5A5A5] 
                  hover:text-gray-700 hover:bg-gray-100 px-4 py-1 rounded-full 
                  ${
                    location.pathname === item.link
                      ? 'text-black border  border-[#1d1c1c]'
                      : ''
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

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
