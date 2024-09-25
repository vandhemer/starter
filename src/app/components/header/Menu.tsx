'use client'

import iconMenu from '@/public/assets/icons/menu-burger.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {

  function openMenu() {

    const sidebar = document.getElementById('sidebar');
    if(sidebar) {
      sidebar.classList.toggle('-translate-x-full');
    }
  }

  return (                
  <div className="menu flex self-center place-self-end md:place-self-start cursor-pointer block md:py-3 [grid-area:menu]">
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
  </div>
  )
}