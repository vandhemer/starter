import LayoutCheckout from "@/app/components/layout/LayoutCheckout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutCheckout>
            {children}
        </LayoutCheckout>
    )
}