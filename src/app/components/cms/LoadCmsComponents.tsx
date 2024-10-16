import { use } from 'react';
import { Page } from '@/models/cms/pages';
import RenderComponents from '@/components/cms/RenderComponents';
import { notFound } from 'next/navigation';
import { fetchEntryByTitle } from '@/app/services/cms/getEntryService';

export const fetchCache = 'default-no-store';

export default function LoadCmsComponents({ uid }: Page) {

    const data = use(fetchEntryByTitle(uid));

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