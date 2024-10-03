import Breadcrumb from "@/components/Breadcrumb";

export default function ProductListLayout({
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