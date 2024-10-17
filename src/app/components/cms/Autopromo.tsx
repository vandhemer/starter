import { Autopromo } from '@/models/cms/layout';

export default function AutoPromo({ autopromo }: Autopromo) {

    const data = autopromo[0];

    return (
        <div className="autopromo w-full grid h-10 content-center justify-center bg-slate-950 text-white text-sm text-center">
            {data.autopromo_content}
        </div>
    )
}