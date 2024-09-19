import PushBanner from "@/components/PushBanner";

export default function Banner({imageUrl, title}) {
    return (
        <div className="banner mx-auto text-center absolute overflow-hidden -z-10 top-0 w-full">
            <div className="">
                <img
                    alt=""
                    src={imageUrl}
                    className="-z-20 w-full object-cover min-h-[611px] sd:min-h-[565px]"
                />

                <div className="absolute bg-gray-400/40 p-6 rounded-lg bottom-12 left-12">
                    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <p className="max-w-lg uppercase text-white text-2xl">
                            {title}
                        </p>
                        <h1 className="uppercase font-extrabold text-white text-[128px]">
                            <strong className="block font-extrabold text-yellow-100">-40%</strong>
                        </h1>
                        <p className="max-w-lg text-white text-2xl">
                            Sur une sélection salon, <br />ça donne le sourire !
                        </p>
                    </div>
                </div>

                
            </div>
        </div>
    )
}