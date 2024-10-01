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
    const drawerBackgroundRef = useRef<HTMLDivElement>(null);

    let drawerClass = loading ?
        // Open
        'z-50 top-0 bg-white shadow-2xl w-4/5 md:w-96 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300'
        :
        // Close
        'z-50 top-0 bg-white w-4/5 md:w-96 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300';

    let drawerBackgroundClass = loading ? 
        // Open
        'absolute z-30 bg-black/50 top-0 left-0 w-full min-h-screen transition-opacity'
        :
        // Close
        'absolute z-30 bg-black/50 top-0 left-0 w-full min-h-screen transition-opacity opacity-0';

    function handleClickOutside () {
        setLoading(() => false);
        setTimeout(() => setToggleDrawer(() => false), 300);
    }
        
    useEffect(() => {

        setTimeout(() => setLoading(() => true), 300);

    }, [setToggleDrawer]);

    return (
        <ClientOnlyPortal selector="#drawer">
            <div className={drawerBackgroundClass} ref={drawerBackgroundRef} onClick={handleClickOutside}>
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