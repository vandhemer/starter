import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import Header from "@/components/header/Header";
import { DrawerProvider } from "@/app/contexts/DrawerContext";
import { HeaderProps } from "@/models/cms/layout";
import { NextSeo } from 'next-seo';

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

async function getHeaderContent() {

    let data: HeaderProps;

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOSTED_URL + '/api/v1/cms/header', {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        data = await response.json();
        return data;
    }
    catch (error: any) {
        console.error(error.message);
    }
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const headerData = await getHeaderContent();

    return (
        <html lang="fr">
            <body className={`${inter.className} antialiased`}>
                <DrawerProvider>
                    <main className="relative">
                        <div className="w-full mx-auto relative container">
                            <Header autopromo={headerData?.notification_bar?.autopromo || []} />
                            {children}
                        </div>
                    </main>
                </DrawerProvider>
                <div id="drawer" />
            </body>
        </html>
    );
}