"use client";

import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)


    useEffect(() => {
        const fetchUsageData = async () => {
            if (user && user.primaryEmailAddress?.emailAddress) {
                try {
                    const response = await fetch(`/api/usage?email=${encodeURIComponent(user.primaryEmailAddress.emailAddress)}`);
                    const data = await response.json();
    
                    if (response.ok && data.totalUsage !== undefined) {
                        setTotalUsage(data.totalUsage);
                        console.log(`Total word count: ${data.totalUsage}`);
                    } else {
                        console.error('Error fetching usage or totalUsage is undefined:', data.error || 'No totalUsage field');
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            } else {
                console.error("User's primary email address is missing or undefined.");
            }
        };
    
        fetchUsageData();
    }, [user, setTotalUsage]);
    
    const IsUserSubscribed = () => {
        
    }

    return (
        <div className='m-5'>
            <div className="bg-primary text-white rounded-lg p-3">
                <h2 className='font-medium'>Credit</h2>
                <div className="h-2 bg-[#9981f9] rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full" 
                        style={{ 
                            width: `${(totalUsage / 10000) * 100}%` 
                        }}                        
                    ></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/10,000 Credits Used</h2>
            </div>
            <Link href='/dashboard/billing'>
                <Button variant={'secondary'} className='w-full hover:border my-3 text-primary'>Upgrade</Button>
            </Link>
        </div>
    );
}

export default UsageTrack;
