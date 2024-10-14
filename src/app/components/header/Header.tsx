import Menu from '@/components/header/Menu';
import Logo from '@/components/header/Logo';
import Guestlinks from '@/components/header/Guestlinks';
import Searchbar from '@/components/header/Searchbar';

import AutoPromo from '@/components/cms/Autopromo';
import { Autopromo } from '@/models/cms/layout';


export default function Header(props: Autopromo) {
        
    let headerCssClass = 'cf-header container sticky z-30 top-0 py-1 backdrop-blur';

    // if(headerTransparent) {
    //     headerCssClass += ' drop-shadow-md text-white bg-gradient-to-b from-black/40 via-transparent via-100%';
    // }
    
    return (    
        <>
            <AutoPromo autopromo={ props } />
            <header className={headerCssClass}>
                <div className="navbar w-full mx-auto grid grid-cols-8 mt-0 px-6 md:px-10 py-3 
                    [grid-template-areas:'menu_logo_logo_logo_empty_guestlinks_guestlinks_guestlinks''search_search_search_search_search_search_search_search']
                    md:[grid-template-areas:'logo_search_search_search_guestlinks_guestlinks_guestlinks_guestlinks''menu_menu_menu_menu_menu_menu_menu_menu']
                ">  
                    <Menu />
                    <Logo />
                    <Guestlinks />
                    <div className="search py-3 [grid-area:search]">
                        <Searchbar />
                    </div>
                </div>
            </header>
        </>
    )
}