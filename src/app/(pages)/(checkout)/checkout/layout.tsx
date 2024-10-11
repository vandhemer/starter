import LayoutCheckout from "@/app/components/layout/LayoutCheckout";

export default function NavigationLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutCheckout>
            {children}
        </LayoutCheckout>
    )
}