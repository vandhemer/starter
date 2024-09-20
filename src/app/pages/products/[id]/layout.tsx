import Layout from "@/app/components/Layout";
import Breadcrumb from "@/app/components/Breadcrumb";
import Header from "@/app/components/header/Header";

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