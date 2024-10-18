
import getConfig from 'next/config';
import { Page } from '@/models/cms/pages';
import { addEditableTags } from '@contentstack/utils';
import { getEntryByUrl, getEntry } from '@/lib/contentstack-sdk';
import { HeaderProps } from '@/app/models/cms/layout';


const { publicRuntimeConfig } = getConfig();
const envConfig = process?.env.CONTENTSTACK_API_KEY
    ? process?.env
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

export const fetchHeaderRes = async (): Promise<HeaderProps> => {
    const response = (await getEntry({
        contentTypeUid: "header",
        referenceFieldPath: ["notification_bar.autopromo"],
        jsonRtePath: ["notification_bar"],
    })) as HeaderProps[][];

    liveEdit && addEditableTags(response[0][0], "header", true);
    return response[0][0];
};