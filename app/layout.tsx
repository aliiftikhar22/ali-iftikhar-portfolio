import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Ali Iftikhar | Data Analyst & Web Developer",
  description:
    "The personal portfolio of Ali Iftikhar — exploring data analytics, business intelligence, web development, and Shopify experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ali Iftikhar | Data Analyst & Web Developer",
    description: "Turning data into insights. Turning ideas into digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
