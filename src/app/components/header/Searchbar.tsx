import Image from 'next/image';
import iconSearch from '../../../../public/assets/icons/search.svg';

export default function Searchbar() {
    return (
        <form className="flex items-center w-full">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full flex border border-gray-300 text-gray-900 text-sm rounded-3xl block w-full p-2.5">
                <input type="text" id="simple-search" className="w-full pl-2 focus:outline-none" placeholder="Rechercher votre meuble, canapé, ..." required />
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
