import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import Header from "@/components/header/Header";
import { DrawerProvider } from "@/app/contexts/DrawerContext";
import { HeaderProps } from "@/models/cms/layout";
import { Suspense } from "react";
import PageLoading from '@/app/components/skeletons/PageLoading';

export const metadata: Metadata = {
    title: "Conforama",
    description: "Site Web Conforama",
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
                            <Suspense fallback={<PageLoading />}>
                                {children}
                            </Suspense>
                        </div>
                    </main>
                </DrawerProvider>
                <div id="drawer" />
            </body>
        </html>
    );
}