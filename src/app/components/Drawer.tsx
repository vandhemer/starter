'use client'

import { useContext, useEffect, useRef, useState } from 'react';
import { DrawerContext } from '@/app/contexts/DrawerContext';
import ClientOnlyPortal from '@/components/ClientOnlyPortal';

interface DrawerProps {
    children?: React.ReactNode;
}

export default function Drawer({ children }: DrawerProps) {

    const { setToggleDrawer } = useContext(DrawerContext);
    const [loading, setLoading] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);

    let drawerClass = 'z-50 top-0 bg-white w-4/5 md:w-96 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300';
    drawerClass += loading ?
        // Open
        ' shadow-2xl cursor-default'
        :
        // Close
        ' -translate-x-full';



    let drawerBackgroundClass = 'absolute z-30 bg-black/50 top-0 left-0 w-full min-h-screen overflow-hidden transition-opacity';
    drawerBackgroundClass += loading ? 
        // Open
        ' cursor-pointer'
        :
        // Close
        ' opacity-0';

    function handleClickOutside (event: React.MouseEvent<HTMLDivElement>) {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            setLoading(false);
            setTimeout(() => setToggleDrawer(false), 300);
        }
    }
        
    useEffect(() => {
        setTimeout(() => setLoading(() => true), 300);
    }, [setToggleDrawer]);

    return (
        <ClientOnlyPortal selector="#drawer">
            <div className={drawerBackgroundClass} onClick={handleClickOutside}>
                <div
                    className={drawerClass}
                    data-rnx="drawer"
                    ref={drawerRef}
                >
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </ClientOnlyPortal>
    )
}