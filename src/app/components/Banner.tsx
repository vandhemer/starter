import PushBanner from "@/components/PushBanner";

export default function Banner() {
    return (
        <div className="banner mx-auto text-center absolute overflow-hidden -z-10 top-0 w-full">
            <div className="">
                <img
                    alt=""
                    src="https://www.conforama.fr/m/webmaster/page-libre/marques/lomoco/visuel-fond-farandole-3-lomoco.jpg"
                    className="-z-20 w-full object-cover min-h-[611px] sd:min-h-[565px]"
                />
                <PushBanner />
            </div>
        </div>
    )
}