import Menu from '@/components/header/Menu';
import Logo from '@/components/header/Logo';
import Image from 'next/image';

import iconLogin from '@/assets/icons/login.svg';
import iconCart from '@/assets/icons/cart.svg';
import Searchbar from '@/components/header/Searchbar';
import AutoPromo from '@/components/cms/Autopromo';
import { HeaderProps } from '@/app/models/cms/layout';
import { use } from 'react';
import TextLoading from '@/app/skeletons/TextLoading';

async function getHeaderContent() {

    let data: HeaderProps;

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOSTED_URL + '/api/cms/header', {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            next: { 
                revalidate: 120 
            },
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        data = await response.json();

        return data;
   
    }

    catch (error: any) {
        console.error(error.message);
    }
}

export default function Header({ isHeaderTransparent = false }) {

    let headerCssClass = 'w-full z-30 top-0 py-1';

    if(isHeaderTransparent) {
        headerCssClass += ' drop-shadow-md text-white bg-gradient-to-b from-black/40 via-transparent via-100%';
    }

    const data = use(getHeaderContent());

    if (!data) {
        return <TextLoading />;
    }
    
    return (    
        <>
            <AutoPromo autopromo={ data.notification_bar } />
            <header className={headerCssClass}>
                <div className="navbar w-full mx-auto grid grid-cols-3 mt-0 px-6 md:px-10 py-3 
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
                    <Menu />
                    <div className="search py-3 [grid-area:search]">
                        <Searchbar />
                    </div>
                </div>
            </header>
        </>
    )
}