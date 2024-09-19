import { UserButton } from '@clerk/clerk-react'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search/>
        <input type="text" placeholder='Search...' className='outline-none' />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary p-1 rounded-full text-xs px-2 text-orange-400">
        ️‍🔥 <span className='text-white'>Join Membership for just $9.99/Month</span> 
        </h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header