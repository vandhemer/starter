import Drawer from '@/components/Drawer';
import Link from 'next/link';
import Image from 'next/image';
import { useFetcherClient } from '@/app/utils/http/client';

type MenuItem = {
    code: string;
    name: string;
    picto: string;
    url: string;
};

export default function MenuDrawer() {

    const { data, isLoading, isError } = useFetcherClient('https://run.mocky.io/v3/0777abe9-8d80-4972-8273-fc6faf239197');

    if (isError) return <Drawer>Echec du chargement</Drawer>
    if (isLoading) return <Drawer>Chargement...</Drawer>

    return (
        <Drawer>
            <h1 className="text-2xl font-semibold">Menu</h1>
            <ul className="mt-4">
                {data['univers'].map((menu: MenuItem) => (
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