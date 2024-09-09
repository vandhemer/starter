import Image from "next/image";
import iconChevron from '../../../public/assets/icons/chevron.svg';
import iconHome from '../../../public/assets/icons/home.svg';

export default function Header() {
    return (
        <nav aria-label="Breadcrumb" className="bg-gray-50">
            <ol className="flex items-center gap-1 px-6 py-3 text-sm text-gray-600">
                <li>
                    <a href="#" className="block transition hover:text-gray-700">
                        <span className="sr-only">Accueil</span>
                        <Image
                            priority
                            src={iconHome}
                            alt="Accueil"
                        />
                    </a>
                </li>
                <li>
                    <Image
                        priority
                        src={iconChevron}
                        alt="Chevron"
                    />
                </li>
                <li>
                    <a href="#" className="block transition hover:text-gray-700">Canapé, salon, séjour</a>
                </li>
                <li>
                    <Image
                        priority
                        src={iconChevron}
                        alt="Chevron"
                    />
                </li>
                <li>
                    <a href="#" className="block transition hover:text-gray-700">Canapé 3 places</a>
                </li>
            </ol>
        </nav>
    )
}