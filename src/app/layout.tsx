import type { Metadata } from "next";
import "./styles/globals.css";
import Page from "./page";

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
        <body>
            <Page />
        </body>
    </html>
  );
}
