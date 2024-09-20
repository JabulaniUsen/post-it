"use client";

import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';

function Layout({ 
  children, 
} : { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
        <div className='bg-slate-100 h-screen poppins'>
          <div className='md:w-64 fixed'>
            {/* Sidebar for mobile and desktop */}
            <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
          <div className='md:ml-64'>
            <Header toggleSidebar={toggleSidebar} />
            {children}
          </div>
        </div>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
