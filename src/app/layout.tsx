import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,

  // added new keywords for seo
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    creator: portfolioConfig.seo.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
