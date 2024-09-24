import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/header/Header";

export default function ProductDetailLayout({
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <Layout Header={<Header isHeaderTransparent={false} />}>
            <Breadcrumb />
            {children}
        </Layout>
    )
}