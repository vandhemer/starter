import LoadCmsComponents from "@/components/cms/LoadCmsComponents";
import { Suspense } from "react";
import TextLoading from "@/skeletons/TextLoading";
import '@/styles/home.css';
import Bento from "@/components/cms/Bento";
import NavigationLayout from "./(pages)/(navigation)/layout";

export const dynamic = "force-dynamic";

export default function Homepage() {

    return (
        <NavigationLayout>
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

                <Bento />
            </Suspense>
        </NavigationLayout>
    )
}