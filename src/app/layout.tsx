import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import StoreProvider from "./contexts/StoreProvider";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Conforama",
  description: "Site Web Conforama",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="fr">
        <body className={`${inter.className} antialiased`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
