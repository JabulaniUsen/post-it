"use client"

import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

function Layout({ 
  children, 
} : { children: React.ReactNode }) {

  const [totalUsage, setTotalUsage] = useState<number>(0);  // Use 'number' instead of 'Number'

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}> 
      <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
          <SideNav />
        </div>
        <div className='md:ml-64'>
          <Header />
          {children}
        </div>
      </div>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
