import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import Header from "@/components/header/Header";

export const dynamic = "force-dynamic";

export default function Homepage() {

    return (
        <Layout Header={<Header isHeaderTransparent = {true} />}>
            <Banner />   
        </Layout>
    )     

}