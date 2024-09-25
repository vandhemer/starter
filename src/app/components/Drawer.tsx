'use client'
import Link from "next/link";
import Image from 'next/image';

export default function Drawer() {
    const menuData = [
        {
          "code": "020117",
          "name": "Tous les canapés",
          "url": "/canape-salon-sejour/canape/tous-les-canapes/c/020117",
          "picto": "https://media.conforama.fr/medias/sys_master/root/h62/he1/16986850263070/picto-tous-les-canapes/picto-tous-les-canapes.png"
        },
        {
          "code": "020101",
          "name": "Canapé droit",
          "url": "/canape-salon-sejour/canape/canape-droit/c/020101",
          "picto": "https://media.conforama.fr/m/webmaster/img/homepage/menu/canape-salon-sejour/mobile/visuel-canape-droit.png"
        },
        {
          "code": "020111",
          "name": "Canapé d'angle",
          "url": "/canape-salon-sejour/canape/canape-d-angle/c/020111",
          "picto": "https://media.conforama.fr/m/webmaster/img/homepage/menu/canape-salon-sejour/mobile/visuel-canape-angle.png"
        },
        {
          "code": "020112",
          "name": "Canapé convertible",
          "url": "/canape-salon-sejour/canape/canape-convertible/c/020112",
          "picto": "https://media.conforama.fr/m/webmaster/img/homepage/menu/canape-salon-sejour/mobile/visuel-canape-convertible.png"
        }
    ];
    return (
        <div className="absolute top-0 bg-white shadow-2xl w-72 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
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