import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Website",
  description: "Blog Website using next.js and tailwind.css",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${montserrat.className} bg-light dark:bg-dark `}
    >
     
        <Container>
        <Navbar />
        {children}
        </Container>
        <Footer />
    </body>
  </html>
  );
}
