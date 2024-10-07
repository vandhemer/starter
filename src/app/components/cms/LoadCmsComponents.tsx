import { use } from 'react';
import { Page } from '@/models/cms/pages';
import TextLoading from '@/skeletons/TextLoading';
import RenderComponents from '@/components/cms/RenderComponents';
import { notFound } from 'next/navigation'

export const fetchCache = 'default-no-store';

async function fetchContent(uid: string) {

    let data: Page;

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOSTED_URL + '/api/v1/cms/' + uid, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            next: { 
                revalidate: 120 
            },
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        data = await response.json();
        return data.page_components;
    }
    catch (error: any) {
        console.error(error.message);
    }
}

export default function LoadCmsComponents({ uid }: Page) {

    const data = use(fetchContent(uid));

    if (!data) {
        return notFound();
    }

    return (
        <>
            <RenderComponents
                pageComponents={ data }
                contentTypeUid='page'
                entryUid={ uid }
                locale='fr-FR'
            />
        </>
    )
}