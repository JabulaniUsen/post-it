"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface MobileNavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, toggleMenu }) => {
    const router = useRouter();
    const handleNavigate = () => {
    router.push('/dashboard');
  };
    return (
    <div className={`fixed inset-0 py-[10rem] mt-20 z-50 bg-[#6941c6] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col items-center justify-center h-full">
        {/* <button className="absolute top-5 right-5" onClick={toggleMenu}>
          ✖
        </button> */}
        <ul className="flex flex-col items-center gap-7 text-white">
          <Link href='/'><li className='hover:scale-105 transition-all hover:text-[#6941c6]' onClick={toggleMenu}>Home</li></Link>
          <Link href='#services'><li className='hover:scale-105 transition-all hover:text-[#6941c6]' onClick={toggleMenu}>Services</li></Link>
          <Link href='#pricing'><li className='hover:scale-105 transition-all hover:text-[#6941c6]' onClick={toggleMenu}>Pricing</li></Link>
          <Link href='#contact'><li className='hover:scale-105 transition-all hover:text-[#6941c6]' onClick={toggleMenu}>Contact</li></Link>
          {/* <Link href="#"><li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Blog</li></Link> */}
          <button onClick={handleNavigate} className='bg-[#301e5a] rounded-md px-5 py-2 text-white transition-all hover:bg-purple-900'>Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
