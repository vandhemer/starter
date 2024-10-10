import LayoutNavigation from "@/app/components/layout/LayoutNavigation";
import Breadcrumb from "@/components/Breadcrumb";

export default function NavigationLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutNavigation>
            <Breadcrumb />
            {children}
        </LayoutNavigation>
    )
}