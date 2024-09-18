import Menu from "@/components/header/Menu";
import Logo from "@/components/header/Logo";
import Image from 'next/image';
import Link from 'next/link';

import iconLogin from '@/public/assets/icons/login.svg';
import iconCart from '@/public/assets/icons/cart.svg';
import iconMenu from '@/public/assets/icons/menu-burger.svg';
import Searchbar from "./Searchbar";

export default function Header({ isHeaderTransparent = false }) {

    let headerCssClass = "w-full z-30 top-0 py-1";

    if(isHeaderTransparent) {
        headerCssClass += " bg-gradient-to-b from-black/60 via-transparent via-80%";
    }
    
    return (
        <header className={headerCssClass}>
            <div className="navbar w-full mx-auto grid grid-cols-3 mt-0 px-10 py-3 
                [grid-template-areas:'logo_header_menu''search_search_search']
                md:[grid-template-areas:'logo_search_header''menu_menu_menu']
            ">
                <Logo />
                <div className="md:order-3 flex items-center self-center place-self-end [grid-area:header]" id="nav-content">
                    <a className="inline-block no-underline hover:text-black" href="#">
                        <Image
                            priority
                            src={iconLogin}
                            alt="Login"
                        />
                    </a>
                    <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                        <Image
                            priority
                            src={iconCart}
                            alt="Panier"
                        />
                    </a>
                </div>
                <div className="menu flex self-center place-self-end md:place-self-start cursor-pointer block [grid-area:menu]">
                    <div className="flex md:text-white md:bg-black md:rounded-3xl md:p-3">
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
                <div className="search py-3 [grid-area:search]">
                    <Searchbar />
                </div>
                <Menu />
            </div>
        </header>
    )
}