import { use } from 'react';
import { Page } from '@/models/cms/pages';
import TextLoading from '@/skeletons/TextLoading';
import RenderComponents from '@/components/cms/RenderComponents';

export const fetchCache = 'default-no-store';

async function fetchContent() {

    let data: Page;

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOSTED_URL + '/api/cms/Home', {
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

export default function LoadCmsComponents() {

    const data = use(fetchContent());

    if (!data) {
        return <TextLoading />;
    }

    return (
        <>
            <RenderComponents
                pageComponents={ data }
                contentTypeUid='page'
                entryUid='Home'
                locale='fr-FR'
            />
        </>
    )
}