import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/app/[lang]/dictionaries';

export const dynamic = "force-dynamic";

export default async function NotFound() {

    const dict = await getDictionary('fr');

    return (
        <div className="relative flex content-center justify-center">
            <div className="flex flex-col bottom-20 left-40 absolute">
                <h2 className="text-[72px] font-bold">{dict.not_found.headline}</h2>
                <span className="pb-4">{dict.not_found.subtext}</span>
                <button className="w-72 group transition-all duration-500 p-4 rounded-full text-white bg-red-500 hover:bg-red-100 hover:text-black hover:shadow-sm hover:shadow-red-300">
                    <Link href="/">{dict.not_found.returnButton}</Link>
                </button>
            </div>
            <Image
                src="https://media.conforama.fr/_ui/desktop/theme-conforama/medias/img/css/404.jpg"
                alt="404.jpg"
                className=""
                width="1200"
                height="600"
            />   
        </div>
    )
}