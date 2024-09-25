import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "@/styles/fonts";

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
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
