import { Banner } from '@/models/cms/component';
import Image from 'next/image';

type BannerProps = {
    banner: Banner;
}

export default function PushBanner({ banner }: BannerProps) {

    return (
        <div className="banner relative mx-auto text-center overflow-hidden -z-10 w-full">
            {banner.banner_image ?
                <Image
                    src={ banner.banner_image.url }
                    alt={ banner.banner_title }
                    className="-z-20 w-full object-cover h-[611px] sd:h-[565px]"
                    width="1200"
                    height="600"
                />
                : ''
            }
            <div className="absolute bg-gray-400/40 p-6 rounded-lg bottom-6 left-6 md:bottom-12 md:left-12">
                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                    <p className="max-w-lg uppercase text-white text-2xl">
                        {banner.banner_title}
                    </p>
                    <h1 className="uppercase font-extrabold text-white text-[96px] leading-tight">
                        <strong className="block font-extrabold text-yellow-100">-40%</strong>
                    </h1>
                    <p className="max-w-lg text-white text-2xl">
                        Sur une sélection salon, <br />ça donne le sourire !
                    </p>
                </div>
            </div>
        </div>
    )
}