import Drawer from '@/components/Drawer';
import menuMock from '__mocks__/menuMock.json';
import Link from 'next/link';
import Image from 'next/image';

export default function MenuDrawer() {

    const menuData = menuMock;

    return (
        <Drawer>
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
        </Drawer>
    )
}