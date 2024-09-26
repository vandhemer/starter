'use client'

import { useContext } from 'react';
import { DrawerContext } from '@/app/contexts/DrawerContext';
import iconMenu from '@/public/assets/icons/menu-burger.svg';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

export default function Menu() {

    const { toggleDrawer, setToggleDrawer } = useContext(DrawerContext);
    const MenuDrawer = dynamic(() => import ('@/components/header/drawer/MenuDrawer'));

    function openMenu() {
        setToggleDrawer(!toggleDrawer);
    }

    return (
        <div className="menu flex self-center place-self-end md:place-self-start cursor-pointer select-none block md:py-3 [grid-area:menu]">
            <div onClick={openMenu} className="flex md:text-white md:bg-black md:rounded-3xl md:p-3">
                <Image
                    priority
                    src={iconMenu}
                    alt="Menu"
                    className="md:[filter:invert(100%)]"
                />
                <span className="pl-3 hidden md:flex">
                    Produits
                </span>
            </div>
            <ul className="hidden md:flex md:self-center">
                <li>
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Nos promotions</Link>
                </li>
                <li>
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-red-500" href="/about">Soldes</Link>
                </li>
                <li>
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/about">Cuisines</Link>
                </li>
            </ul>
            {toggleDrawer && <MenuDrawer />}
        </div>
    )
}