import type { Metadata } from "next";
import "../app/globals.css";
import { Barlow } from "next/font/google";
const barlow = Barlow({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hassan | Portfolio",
  description: "Hassan's Web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${barlow.className}`}>{children}</body>
    </html>
  );
}
