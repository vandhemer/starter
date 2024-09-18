export default function PushBanner() {
    return (
        <div className="absolute bottom-12 left-12">
            <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                <p className="max-w-lg uppercase text-white text-2xl">
                    Jusqu'au 1er avril
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