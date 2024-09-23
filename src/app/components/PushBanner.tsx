import { Image, Action } from "@/models/cms/action";

type AdditionalParam = {
    banner_title: string;
    banner_description: string;
}

type Banner = {
    bg_color: string;
    text_color: string;
    banner_title: string;
    banner_description: string;
    call_to_action: Action;
    banner_image: Image;
    $: AdditionalParam;
}

type BannerProps = {
    banner: Banner;
}

export default function PushBanner(props: BannerProps) {

    const banner = props.banner;

    return (
        <div className="absolute bottom-12 left-12">
            <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                <p className="max-w-lg uppercase text-white text-2xl">
                    {banner.banner_title}
                </p>
                <h1 className="uppercase font-extrabold text-white text-[128px]">
                    <strong className="block font-extrabold text-yellow-100">-40%</strong>
                </h1>
                <p className="max-w-lg text-white text-2xl">
                    Sur une sélection salon, <br />ça donne le sourire !
                </p>
            </div>
        </div>
    )
}