import type { Metadata } from "next";
import "./styles/globals.css";
import { inter } from "./styles/fonts";
import AutoPromo from "./components/autopromo/Autopromo";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "Conforama",
  description: "Site Web Conforama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <main>
              <AutoPromo text="EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire" />
              <div className="w-full mx-auto relative container">
                  <Header />
                  {children}
              </div>
          </main>
        </body>
    </html>
  );
}
