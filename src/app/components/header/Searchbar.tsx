import Image from 'next/image';
import iconSearch from '@/assets/icons/search.svg';

export default function Searchbar() {
    return (
        <form className="flex items-center w-full md:ml-12">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full flex border border-gray-600 bg-white/80 text-gray-900 text-sm rounded-3xl block w-full p-2.5">
                <input type="text" id="simple-search" className="w-full pl-2 bg-transparent placeholder-black focus:outline-none" placeholder="Rechercher votre meuble, canapé, ..." required />
                <button type="submit" className="">
                    <Image
                        priority
                        src={iconSearch}
                        height={25}
                        alt="Search icon"
                    />
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </form>
    );
}
