import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import UsageTrack from './UsageTrack';

function SideNav({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
    const router = useRouter();
    const path = usePathname();

    const MenuList = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'History', icon: FileClock, path: '/dashboard/history' },
        { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
        { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
    ];

    return (
        <div 
        className={`h-screen fixed top-0 left-0 p-5 shadow-sm border bg-white transition-transform transform
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static z-50`}
        >
            <div className="flex justify-center">
                <Image src={'/logo.svg'} alt="postit-logo" width={120} height={100} />
            </div>
            <hr className="my-6 border" />
            <div className="mt-3">
                {MenuList.map((menu, index) => (
                    <div
                        key={index}
                        onClick={() => { router.push(menu.path); toggleSidebar(); }} // Toggle sidebar on click
                        className={`flex cursor-pointer gap-2 mb-2 p-3 hover:bg-primary 
                        hover:text-white rounded-lg items-center
                        ${path === menu.path && 'bg-primary text-white'}
                        `}
                    >
                        <menu.icon />
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-10 left-0 w-full">
                <UsageTrack />
            </div>
        </div>
    );
}

export default SideNav;
