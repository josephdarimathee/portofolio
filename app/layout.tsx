

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "../components/main/StarBackground";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import ClientWorkedLearnDialog from "../components/sub/ClientWorkedLearnDialog";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // Empêche l'injection automatique du CSS

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <meta name="google-site-verification" content="FXbCaQQG0JrwrQkbZAnZ5eazH2Je6WmnKxwWjU-d52I" />
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <ClientWorkedLearnDialog />

        {children}

        <Footer />
      </body>
    </html>
  );
}
