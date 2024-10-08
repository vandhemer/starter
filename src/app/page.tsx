import LoadCmsComponents from "@/components/cms/LoadCmsComponents";
import { Suspense } from "react";
import TextLoading from "@/skeletons/TextLoading";
import LayoutNavigation from "@/components/layout/LayoutNavigation";

export const dynamic = "force-dynamic";

export default function Homepage() {

    return (
        <LayoutNavigation>
            <Suspense fallback={<TextLoading />}>
                <LoadCmsComponents 
                    uid="Home" 
                    page_components={[]}
                    locale={""}
                    url={""}
                    seo={{
                        enable_search_indexing: false
                    }} 
                    title={""} />
            </Suspense>
        </LayoutNavigation>
    )     
}