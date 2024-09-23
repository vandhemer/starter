import AutoPromo from "@/components/autopromo/Autopromo";
import Header from "@/components/header/Header";

interface LayoutProps {
    children?: React.ReactNode;
    isHeaderTransparent?: boolean;
}

export default function Layout({ children, isHeaderTransparent }: LayoutProps) {
    return (
        <main>
            <AutoPromo text="EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire" />
            <div className="w-full mx-auto relative container">
                <Header isHeaderTransparent={isHeaderTransparent} />
                {children}
            </div>
        </main>
    )
}