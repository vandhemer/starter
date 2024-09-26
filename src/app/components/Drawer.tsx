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

    let drawerClass = loading ?
        // Open
        'absolute z-50 top-0 bg-white shadow-2xl w-4/5 md:w-96 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300'
        :
        // Close
        'absolute z-50 top-0 bg-white w-4/5 md:w-96 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300';

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setLoading(false);
                setTimeout(() => setToggleDrawer(false), 300);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        setTimeout(() => setLoading(true), 200);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [setToggleDrawer]);

    return (
        <ClientOnlyPortal selector="#drawer">
            <div
                className={drawerClass}
                id="sidebar"
                ref={drawerRef}
            >
                <div className="p-4">
                    {children}
                </div>
            </div>
        </ClientOnlyPortal>
    )
}