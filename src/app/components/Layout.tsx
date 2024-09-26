import AutoPromo from "@/components/autopromo/Autopromo";
import { DrawerProvider } from "@/app/contexts/DrawerContext";
interface LayoutProps {
    children?: React.ReactNode;
    Header?: React.ReactNode;
}

export default function Layout({ children, Header }: LayoutProps) {
    return (
        <DrawerProvider>
            <main className="relative">
                <AutoPromo text="EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire" />
                <div className="w-full mx-auto relative container">
                    {Header}
                    {children}
                </div>
            </main>
        </DrawerProvider>
    )
}