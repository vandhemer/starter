import Breadcrumb from "@/components/Breadcrumb";

export default function ProductDetailLayout({
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <Breadcrumb />
            {children}
        </>
    )
}