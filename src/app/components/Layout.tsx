import AutoPromo from "@/components/autopromo/Autopromo";

interface LayoutProps {
    children?: React.ReactNode;
    Header?: React.ReactNode;
}

export default function Layout({ children, Header }: LayoutProps) {
    return (
        <main>
            <AutoPromo text="EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire" />
            <div className="w-full mx-auto relative container">
                {Header}
                {children}
            </div>
        </main>
    )
}