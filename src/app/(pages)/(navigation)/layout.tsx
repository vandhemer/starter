import LayoutNavigation from "@/app/components/layout/LayoutNavigation";

export default function NavigationLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative">
            <div className="w-full mx-auto relative container">
                <LayoutNavigation>
                    {children}
                </LayoutNavigation>
            </div>
        </main>
    )
}