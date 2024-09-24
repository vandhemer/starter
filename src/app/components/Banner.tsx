import { Banner as BannerModel} from "@/models/cms/component";
import Image from 'next/image';
import { use } from "react";
import { Page } from "@/models/cms/pages";

export const fetchCache = 'default-no-store';

async function fetchContent() {

    let data: Page;

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOSTED_URL + '/api/cms/Home', {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        data = await response.json();
        return data.page_components[0].hero_banner;
   
    }

    catch (error: any) {
        console.error(error.message);
    }
}

export default function Banner() {

    const data = use(fetchContent());

    if (!data) {
        return <div>Loading...</div>;
    }

    const { banner_image, banner_title } = data;

    return (
        <div className="banner mx-auto text-center absolute overflow-hidden -z-10 top-0 w-full">
            <div className="">
                {banner_image ?
                    <Image
                        src={ banner_image.url }
                        alt={ banner_title }
                        className="-z-20 w-full object-cover h-[611px] sd:h-[565px]"
                        width="1200"
                        height="600"
                    />
                    : ''
                }

                <div className="absolute bg-gray-400/40 p-6 rounded-lg bottom-6 left-6 md:bottom-12 md:left-12">
                    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <p className="max-w-lg uppercase text-white text-2xl">
                            {banner_title}
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