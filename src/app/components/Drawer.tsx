'use client'

import Link from "next/link";
import Image from 'next/image';
import { useContext, useState } from "react";
import menuMock from '__mocks__/menuMock.json';
import { DrawerContext } from "@/contexts/drawerContext";

export default function Drawer() {

    const { toggleDrawer } = useContext(DrawerContext);

    let drawerClass = toggleDrawer ? 
        // Open
        'absolute top-0 bg-white shadow-2xl w-72 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300' 
        :
        // Close
        'absolute top-0 bg-white shadow-2xl w-72 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300';

    const menuData = menuMock;
    return (
        <div className={drawerClass}
            id="sidebar">
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Menu</h1>
                <ul className="mt-4">
                    {menuData.map((menu) => (
                        <li key={menu.code} className="mb-2 flex gap-3">
                            <Image
                                width="40"
                                height="40"
                                src={menu.picto}
                                alt={menu.name}
                            />
                            <Link href={menu.url} className="block hover:text-red-400">{menu.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}