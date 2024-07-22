import type { Metadata } from "next";
import { Inter, Roboto, Sanchez } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const sanchez = Sanchez({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jack",
  description: "information about Jack",
  icons: {
      icon: "/favicon.ico"
    }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
