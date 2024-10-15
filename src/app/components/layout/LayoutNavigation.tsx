import { clientFetcher } from "@/utils/http/fetch";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { use } from "react";

export const metadata: Metadata = {
    title: "Conforama : meuble, cuisine, électroménager, décoration",
    description: "Conforama, achat en ligne de meuble et mobilier, cuisine, articles de décoration, électroménager, image et son, informatique. Tout pour l'équipement et ameublement de la maison à prix discount.",
    keywords: [
        "Conforama, achat en ligne de meuble et magasins"
    ],
    alternates: {
        canonical: "https://www.conforama.fr"
    }
};

export default function LayoutNavigation( { children }: { children: React.ReactNode }) {

    const headerData = use(clientFetcher('/api/v1/cms/header'));

    return (
        <div className="w-full mx-auto relative container">
            <Header autopromo={headerData?.notification_bar?.autopromo || []} />
            {children}
        </div>
    )
    
}