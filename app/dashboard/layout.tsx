"use client"

import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';

function Layout({ 
  children, 
} : { children: React.ReactNode }) {

  const [totalUsage, setTotalUsage] = useState<number>(0);  // Use 'number' instead of 'Number'
  const [userSubscription, setUserSubscription] = useState<boolean>(false)

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}> 
      <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
        <div className='bg-slate-100 h-screen'>
          <div className='md:w-64 hidden md:block fixed'>
            <SideNav isOpen={false} toggleMenu={function (): void {
              throw new Error('Function not implemented.');
            } } />
          </div>
          <div className='md:ml-64'>
            <Header toggleMenu={function (): void {
              throw new Error('Function not implemented.');
            } } />
            {children}
          </div>
        </div>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
