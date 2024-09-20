import React from 'react'

function Navbar() {
  return (
    <div className='lg:px-[50px] px-5 flex items-center shadow justify-between w-full h-20'>
      <div className="logo">
        <h2 className='text-3xl font-bold text-gray-900'>Post<span className='text-[#6941c6]'>It</span></h2>
      </div>

      {/* <div className='lg:block hidden'>
        <ul className="flex items-center gap-7 text-gray-950 justify-between cursor-pointer">
            <li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Home</li>
            <li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Services</li>
            <li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Pricing</li>
            <li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Contact</li>
            <li className='hover:scale-105 transition-all hover:text-[#6941c6]'>Blog</li>
        </ul>
      </div> */}

      <div className="">
        <button className='bg-[#6941c6] rounded-md px-5 py-2 text-white transition-all hover:bg-purple-900'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar
