import type { Metadata } from "next";
import type { Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Font 
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

// set viewport and scale 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

// Metadata of site
export const metadata: Metadata = {
  title: "Jack",
  description: "Information",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
