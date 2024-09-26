
import getConfig from 'next/config';
import { Page } from '@/models/cms/pages';
import { addEditableTags } from '@contentstack/utils';
import { getEntryByUrl } from '@/lib/contentstack-sdk';


const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
    ? process.env
    : publicRuntimeConfig;

const liveEdit = envConfig.CONTENTSTACK_LIVE_EDIT_TAGS === 'true';

export const fetchEntryByTitle = async (page_title: string): Promise<Page> => {
    const response = (await getEntryByUrl({
        contentTypeUid: 'page',
        entryUrl: `${page_title}`,
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    })) as Page[];
    liveEdit && addEditableTags(response[0], 'page', true);

    return response[0];
};