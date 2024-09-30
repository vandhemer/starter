import { Autopromo as AutopromoModel } from '@/models/cms/layout';

type AutopromoProps = {
    autopromo: AutopromoModel;
}

export default function AutoPromo({ autopromo }: AutopromoProps) {

    const data = autopromo['autopromo'][0];

    return (
        <div className="autopromo w-full grid h-10 content-center justify-center bg-slate-950 text-white text-sm text-center">
            {data.autopromo_content}
        </div>
    )
}