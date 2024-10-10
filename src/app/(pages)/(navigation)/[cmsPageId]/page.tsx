import LoadCmsComponents from "@/components/cms/LoadCmsComponents";
import { Suspense } from "react";
import TextLoading from "@/skeletons/TextLoading";

export const dynamic = "force-dynamic";

export default function CmsPage({ params }: { params: { cmsPageId: string } }) {

    const pageId = params?.cmsPageId;

    return (
        <Suspense fallback={<TextLoading />}>
            <LoadCmsComponents 
                uid={pageId} 
                page_components={[]}
                locale={""}
                url={""}
                seo={{
                    enable_search_indexing: false
                }} 
                title={""} />
        </Suspense>
    )      
}