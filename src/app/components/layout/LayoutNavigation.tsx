import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { use } from "react";
import { fetchHeaderRes } from "@/app/services/cms/getEntryService";

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

    const headerData = use(fetchHeaderRes());

    return (
        <div className="w-full mx-auto relative container">
            <Header autopromo={headerData?.notification_bar?.autopromo || []} />
            {children}
        </div>
    )
    
}