"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import MobileNavbar from './MobileNav'; // Adjust the path if necessary
import { MenuSquare, XSquare } from 'lucide-react';
import Logo from './Logo';

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    router.push('/dashboard');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sticky top-0 z-50 backdrop-blur-md bg-white/30 lg:px-[50px] px-5 flex items-center shadow justify-between w-full h-20'>
      <Logo/>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className='text-gray-900 focus:outline-none'>
          {isOpen ? <XSquare className='w-7 h-7 text-[#6941c6]'/> : <MenuSquare className='w-7 h-7 text-[#6941c6]'/>}
        </button>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex items-center gap-7 text-gray-950 justify-between cursor-pointer">
          <Link href='/'><li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Home</li></Link>
          <Link href='#services'><li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Services</li></Link>
          <Link href='#pricing'><li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Pricing</li></Link>
          <Link href='#contact'><li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Contact</li></Link>
          {/* <Link href="#"><li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Blog</li></Link> */}
        </ul>
      </div>

      <div className="lg:block hidden">
        <button onClick={handleNavigate} className='bg-[#6941c6] rounded-md px-5 py-2 text-white transition-all hover:bg-purple-900'>Get Started</button>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Navbar;
