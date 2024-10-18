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
                    {children}
                </Providers>
            </body>
        </html>
    );
}