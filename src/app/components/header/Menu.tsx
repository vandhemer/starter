'use client'

import iconMenu from '@/assets/icons/menu-burger.svg';
import Image from 'next/image';
import Link from 'next/link';
import { MenuDrawer } from '@/components/header/drawer/MenuDrawer';
import { useDrawer } from '@/hooks/useDrawer';

export default function Menu() {

    const { isOpen, setToggleDrawer } = useDrawer();

    function handleOpenMenu() {
        setToggleDrawer((toggle) => !toggle);
    }

    return (
        <div className="menu flex self-center place-self-end md:place-self-start cursor-pointer select-none block md:py-3 [grid-area:menu]">
            <div onClick={handleOpenMenu} className="flex md:text-white md:bg-black md:rounded-3xl md:p-3">
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
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/productslist">Nos promotions</Link>
                </li>
                <li>
                    <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-red-500" href="/products/770491">Redirection</a>
                </li>
                <li>
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/tv-son-multimedia/gaming/chaise-gaming/fauteuil-gaming-bicolore-predator-antares/p/782896">Fauteuil</Link>
                </li>
            </ul>
            {isOpen && <MenuDrawer />}
        </div>
    )
}