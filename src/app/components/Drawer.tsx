'use client'

import { useEffect, useRef } from 'react';
import ClientOnlyPortal from '@/components/ClientOnlyPortal';
import { useToggle } from '@/hooks/useToggle';
import { useDrawer } from '@/hooks/useDrawer';

interface DrawerProps {
    children?: React.ReactNode;
}
export default function Drawer({ children }: DrawerProps) {

    const { setToggleDrawer } = useDrawer();
    const [isLoading, setLoading] = useToggle();
    const drawerRef = useRef<HTMLDivElement>(null);

    let drawerClass = 'z-50 top-0 bg-white w-4/5 md:w-96 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300';
    drawerClass += isLoading ?
        // Open
        ' shadow-2xl cursor-default'
        :
        // Close
        ' -translate-x-full';

    let drawerBackgroundClass = 'fixed z-30 bg-black/50 top-0 left-0 w-full min-h-screen overflow-hidden transition-opacity';
    drawerBackgroundClass += isLoading ?
        // Open
        ' cursor-pointer'
        :
        // Close
        ' opacity-0';

    function handleClickOutside (event: React.MouseEvent<HTMLDivElement>) {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            setLoading();
            setTimeout(() => setToggleDrawer(false), 300);
        }
    }
        
    useEffect(() => {
        setTimeout(() => {
            setLoading();
        }, 300);
    }, [setToggleDrawer]);

    return (
        <ClientOnlyPortal selector="#drawer">
            <div className={drawerBackgroundClass} onClick={handleClickOutside}>
                <div
                    className={drawerClass}
                    data-rnx="drawer"
                    ref={drawerRef}
                >
                    <div className="p-4 md:p-12">
                        {children}
                    </div>
                </div>
            </div>
        </ClientOnlyPortal>
    )
}