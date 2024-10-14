export const dynamic = "force-dynamic";

export default function BasketPage() {

    return (
        <>
            <section className="relative z-10 after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
                <div className="w-full px-4 md:px-5 lg-6 mx-auto relative z-10">
                    <div className="grid grid-cols-12">
                        <div
                            className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 w-full max-xl:max-w-3xl max-xl:mx-auto">
                            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                                <h2 className="font-bold text-3xl leading-10 text-black">Panier</h2>
                                <h2 className="font-bold text-xl leading-8 text-gray-600">3 articles</h2>
                            </div>
                            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                                <div className="col-span-12 md:col-span-7">
                                    <p className="font-normal text-lg leading-8 text-gray-400">Détails du produit</p>
                                </div>
                                <div className="col-span-12 md:col-span-5">
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-3">
                                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantité</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                                <div className="w-full md:max-w-[126px]">
                                    <img src="https://media.conforama.fr/m/export/Medias/700000/80000/8000/200/90/G_788290_Y.jpg" alt="image de flacon de parfum"
                                        className="mx-auto rounded-xl object-cover" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                                    <div className="md:col-span-2">
                                        <div className="flex flex-col max-[500px]:items-center gap-3">
                                            <h6 className="font-semibold text-base leading-7 text-black">Table basse ronde</h6>
                                            <h6 className="font-normal text-base leading-7 text-gray-500">FRIDA</h6>
                                            <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">120,00 €</h6>
                                        </div>
                                    </div>
                                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                        <div className="flex items-center h-full">
                                            <button
                                                className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                    viewBox="0 0 22 22" fill="none">
                                                    <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                                        strokeLinecap="round" />
                                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                                        strokeLinecap="round" />
                                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                                        strokeLinecap="round" />
                                                </svg>
                                            </button>
                                            <input type="text"
                                                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                                                placeholder="1" />
                                                <button
                                                    className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        viewBox="0 0 22 22" fill="none">
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                                            strokeLinecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                                                            strokeWidth="1.6" strokeLinecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                                                            strokeWidth="1.6" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                        <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">120,00 €</p>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat the above div for other products */}

                            <div className="flex items-center justify-end mt-8">
                                <button
                                    className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                                    Ajouter un code promo
                                    <svg className="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                        fill="none">
                                        <path
                                            d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                                            stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 pt-14">
                            <h2 className="font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                                Résumé de la commande</h2>
                            <div className="mt-8">
                                <div className="flex items-center justify-between pb-6">
                                    <p className="font-normal text-lg leading-8 text-black">3 articles</p>
                                    <p className="font-medium text-lg leading-8 text-black">480,00 €</p>
                                </div>
                                <form>
                                    <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Code Promo
                                    </label>
                                    <div className="flex pb-4 w-full">
                                        <div className="relative w-full ">
                                            <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                                            </div>
                                            <input type="text"
                                                className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                                placeholder="xxxx xxxx xxxx" />
                                                <button id="dropdown-button" data-target="dropdown"
                                                    className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                                                    type="button"><svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                                                            stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div id="dropdown"
                                                    className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                        aria-labelledby="dropdown-button">
                                                        <li>
                                                            <a href="#"
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b border-gray-200">
                                        <button
                                            className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">Appliquer</button>
                                    </div>
                                    <div className="flex items-center justify-between py-8">
                                        <p className="font-medium text-xl leading-8 text-black">3 articles</p>
                                        <p className="font-semibold text-xl leading-8 text-black-600">485,00 €</p>
                                    </div>
                                    <button
                                        className="w-full text-center bg-black rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-red-700">Valider votre panier</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}