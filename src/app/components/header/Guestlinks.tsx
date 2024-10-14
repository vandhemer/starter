'use client'

import Image from 'next/image';
import Obfuscate from 'react-obfuscate';

import iconLogin from '@/assets/icons/login.svg';
import iconCart from '@/assets/icons/cart.svg';
import iconStore from '@/assets/icons/store.svg';

export default function Guestlinks() {
    return (
        <div className="md:order-3 flex gap-8 items-center self-center place-self-end [grid-area:guestlinks]" id="nav-content">
            <a className="flex no-underline hover:text-black" href="#">
                <Image
                    priority
                    src={iconStore}
                    alt="Login"
                />
                <span className="hidden leading-5 lg:block lg:pl-4">Choisissez <br />votre magasin</span>
            </a>
            <a className="flex no-underline hover:text-black" href="#">
                <Image
                    priority
                    src={iconLogin}
                    alt="Login"
                />
                <span className="hidden lg:block lg:pl-4">Connectez-vous</span>
            </a>
            <Obfuscate linkText="#" href="/checkout/cart">
                <Image
                    priority
                    src={iconCart}
                    alt="Panier"
                    className=""
                />
            </Obfuscate>
        </div>
    )
}