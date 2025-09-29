import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse Memecoin — Fun, Transparent Community-Driven",
  description: "MemePulse — the memecoin landing page with clear buy steps, transparent tokenomics, and a friendly, community-first vibe inviting everyone to join.",
  keywords: ["memecoin","crypto","tokenomics","buy-steps","community","landing-page","fun-design","memecoin-website","blockchain"],
  alternates: { canonical: "/" },
  openGraph: { 
    title: "MemePulse Memecoin — Fun, Transparent Community-Driven",
    description: "MemePulse — the memecoin landing page with clear buy steps, transparent tokenomics, and a friendly, community-first vibe inviting everyone to join.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [
      {
        url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759138979895-8c47639e.jpg",
        width: 1200,
        height: 630,
        alt: "MemePulse Landing Image",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: "MemePulse Memecoin — Fun, Transparent Community-Driven", description: "MemePulse — the memecoin landing page with clear buy steps, transparent tokenomics, and a friendly, community-first vibe inviting everyone to join.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759138979895-8c47639e.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
