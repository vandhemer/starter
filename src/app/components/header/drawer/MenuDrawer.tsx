import Drawer from '@/components/Drawer';
import menuMock from '__mocks__/menuMock.json';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';

type MenuItem = {
    code: string;
    name: string;
    picto: string;
    url: string;
};

export const fetchCache = 'default-no-store';

async function fetchMenuContent() {

    const response = await fetch('https://run.mocky.io/v3/72599e44-cc6e-480b-a245-4e2b1b33e368', {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}

export default function MenuDrawer() {

    const data = Object.entries(use(fetchMenuContent()));
    const menuData: MenuItem[] = data[0][1] as MenuItem[];

    return (
        <Drawer>
            <h1 className="text-2xl font-semibold">Menu</h1>
            <ul className="mt-4">
                {menuData.map((menu: MenuItem) => (
                    <li key={menu.code} className="mb-2 flex gap-3 items-center">
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
        </Drawer>
    )
}