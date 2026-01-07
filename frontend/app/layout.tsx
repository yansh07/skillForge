import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Skill Forge",
    template: "%s | Skill Forge",
  },
  description: "Forge Your Future with Intelligent Job Matching",
  keywords: ["job matching", "career", "skills", "employment", "AI jobs", "intelligent matching"],
  authors: [{ name: "Priyanshu" }], // Optional
  metadataBase: new URL("https://applyherewithforge.vercel.app/"),
  alternates: {
    canonical: "/", // Root ke liye, sub-pages mein override kar sakte ho generateMetadata se
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Skill Forge",
    description: "Forge Your Future with Intelligent Job Matching",
    url: "https://applyherewithforge.vercel.app/",
    siteName: "Skill Forge",
    images: [
      {
        url: "/ogImage.webp",
        width: 1200,
        height: 630,
        alt: "Skill Forge - Intelligent Job Matching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Forge",
    description: "Forge Your Future with Intelligent Job Matching",
    images: ["/ogImage.webp"], // can use same og image
    creator: "@yansh_08", // Optional
  },
  icons: {
    icon: "/logologo.png", // for extra control chahiye
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png", // Optional for Apple devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}