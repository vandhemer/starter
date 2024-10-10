import Drawer from '@/components/Drawer';
import Link from 'next/link';
import Image from 'next/image';
import { useFetcherClientImmutable } from '@/app/hooks/useFetcherClientImmutable';
import { MenuItem } from '@/models/cms/menu';

export const MenuDrawer = function MenuDrawer() {

    const { data, isLoading, isError } = useFetcherClientImmutable('https://run.mocky.io/v3/0546cd09-5851-4022-959e-ca8335b3b965');

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
                        <Link href={menu.url} prefetch={false} className="block hover:text-red-400">{menu.name}</Link>
                    </li>
                ))}
            </ul>
        </Drawer>
    )
}