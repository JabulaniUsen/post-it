import { UserButton } from '@clerk/clerk-react'
import { Search, Menu, MenuSquare } from 'lucide-react' // Import Menu icon
import React from 'react'

function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder='Search...' className='outline-none' />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary lg:block hidden p-1 rounded-full text-xs px-2 text-orange-400">
          ️‍🔥 <span className='text-white'>Join Membership for just $9.99/Month</span>
        </h2>
        <div className="lg:block hidden">
          <UserButton />
        </div>
        <div className="md:hidden block" onClick={toggleSidebar}>
          {/* <Menu className="w-6 h-6" /> */}
          <MenuSquare className="w-6 h-6 text-primary"/>
        </div>
      </div>
    </div>
  )
}

export default Header;
