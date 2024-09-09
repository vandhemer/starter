interface AutoPromoProps {
    text: string;
}

export default function AutoPromo({ text }: AutoPromoProps) {
    return (
        <div className="autopromo w-full grid h-10 content-center justify-center bg-slate-950 text-white text-sm text-center">
            {text}
        </div>
    );
}
