import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 flex-col flex items-center justify-center text-white bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border bg-white my-5 rounded-md lg:w-[50%]">
          <Search className='text-primary' />
          <input 
            type="text" 
            placeholder='Search' 
            onChange={(event) => onSearchInput(event.target.value)}
            className='bg-transparent outline-none w-full text-black' 
          />
        </div>
      </div>
    </div>

  )
}

export default SearchSection