import Breadcrumb from "@/components/Breadcrumb";

export default function CMSPageLayout({
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