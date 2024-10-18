import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import { Providers } from "@/contexts/Providers";

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="fr">
            <body className={`${inter.className} antialiased`}>
                <Providers>
                    <main className="relative">
                        <div className="w-full mx-auto relative container">
                            {children}
                        </div>
                    </main>
                </Providers>
            </body>
        </html>
    );
}