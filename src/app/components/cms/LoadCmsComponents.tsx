import { use } from 'react';
import { Page } from '@/models/cms/pages';
import RenderComponents from '@/components/cms/RenderComponents';
import { notFound } from 'next/navigation'
import { clientFetcher } from '@/utils/http/fetch';

export const fetchCache = 'default-no-store';

export default function LoadCmsComponents({ uid }: Page) {

    const data = use(clientFetcher('/api/v1/cms/page/' + uid));

    if (!data) {
        return notFound();
    }

    return (
        <>
            <RenderComponents
                pageComponents={ data.page_components }
                contentTypeUid='page'
                entryUid={ uid }
                locale='fr-FR'
            />
        </>
    )
}