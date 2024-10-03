import LoadCmsComponents from "@/components/cms/LoadCmsComponents";
import { Suspense } from "react";
import TextLoading from "@/skeletons/TextLoading";

export const dynamic = "force-dynamic";

export default function Homepage() {

    return (
        <Suspense fallback={<TextLoading />}>
            <LoadCmsComponents />
        </Suspense>
    )     
}