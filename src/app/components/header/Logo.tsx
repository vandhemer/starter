import Image from 'next/image';
import logoConforama from '@/assets/icons/logo-conforama.svg';

export default function Logo() {
    return (
        <div className="logo justify-center content-center [grid-area:logo]">
            <Image
                priority
                src={logoConforama}
                height={25}
                alt="Logo Conforama"
            />
        </div>
    );
}
