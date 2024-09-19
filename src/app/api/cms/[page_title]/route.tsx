import { getEntryByUrl } from "../../../../../contentstack-sdk";
import getConfig from "next/config";
import { Page } from "@/models/cms/pages";
import { addEditableTags } from "@contentstack/utils";


const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;

const liveEdit = envConfig.CONTENTSTACK_LIVE_EDIT_TAGS === "true";

export async function GET(request: Request, { params }: { params: { page_title: string } }) {

  const response = (await getEntryByUrl({
    contentTypeUid: "page",
    entryUrl: `${params.page_title}`,
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as Page[];
  liveEdit && addEditableTags(response[0], "page", true);

  return Response.json(response[0]);

}