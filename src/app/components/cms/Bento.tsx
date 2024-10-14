export default function Bento() {
    return (
        <div className="mx-auto mt-6 grid gap-3 sm:px-6 lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:mt-12">
            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                <img
                    alt="lomoco"
                    src="https://media.conforama.fr/m/webmaster/page-libre/marques/lomoco/visuel-fond-farandole-6-lomoco.jpg"
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="grid gap-3 lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                        alt="predator"
                        src="https://media.conforama.fr/m/webmaster/page-libre/marques/predator/visuel-slide-predator3.jpg"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                        alt="lomoco"
                        src="https://media.conforama.fr/m/webmaster/page-libre/marques/lomoco/visuel-fond-farandole-6-lomoco.jpg"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                    alt="predator"
                    src="https://media.conforama.fr/m/webmaster/page-libre/marques/predator/visuel-slide-predator3.jpg"
                    className="h-full w-full object-cover object-center"
                />
            </div>
        </div>
    )
}