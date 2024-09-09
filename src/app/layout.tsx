import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Page from "./page";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
            <Page />
        </body>
    </html>
  );
}
