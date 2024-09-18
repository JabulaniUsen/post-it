"use client"

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';

function UsageTrack() {
    const { user } = useUser();
    const [totalWordCount, setTotalWordCount] = useState(0);

    useEffect(() => {
        const fetchUsageData = async () => {
            if (user) {
                const response = await fetch(`/api/usage?email=${encodeURIComponent(user.primaryEmailAddress?.emailAddress)}`);
                const data = await response.json();
                if (response.ok) {
                    setTotalWordCount(data.totalWordCount);
                    console.log(`Total word count: ${data.totalWordCount}`);
                } else {
                    console.error(data.error);
                }
            }
        };

        fetchUsageData();
    }, [user]);

    return (
        <div className='m-5'>
            <div className="bg-primary text-white rounded-lg p-3">
                <h2 className='font-medium'>Credit</h2>
                <div className="h-2 bg-[#9981f9] rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full" 
                        style={{ 
                            width: `${(totalWordCount / 10000) * 100}%` 
                        }}                        
                    ></div>
                </div>
                <h2 className='text-sm my-2'>{totalWordCount}/10,000 Credits Used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;
