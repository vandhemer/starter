import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import { DrawerProvider } from "@/app/contexts/DrawerContext";

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="fr">
            <body className={`${inter.className} antialiased`}>
                <DrawerProvider>
                    <main className="relative">
                        {children}
                    </main>
                </DrawerProvider>
                <div id="drawer" />
            </body>
        </html>
    );
}