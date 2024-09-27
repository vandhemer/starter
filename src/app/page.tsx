import LoadCmsComponents from "@/components/LoadCmsComponents";
import Layout from "@/components/Layout";
import Header from "@/components/header/Header";
import { Suspense } from "react";
import TextLoading from "@/skeletons/TextLoading";

export const dynamic = "force-dynamic";

export default function Homepage() {

    return (
        <Layout Header={<Header isHeaderTransparent = {true} />}>
            <Suspense fallback={<TextLoading />}>
                <LoadCmsComponents />
            </Suspense>
        </Layout>
    )     
}