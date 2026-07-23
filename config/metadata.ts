import { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultMetadata: Metadata = {
  title: {
    default: "Infalex | The AI Hub of the Future",
    template: "%s | Infalex",
  },
  description: siteConfig.description,
  keywords: ["AI tools", "resume matcher", "SaaS", "developer utilities", "India MSME", "Developer Tools", "Infalex", "AI hub", "career AI", "productivity tools"],
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: "Infalex Ecosystem",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@infalex",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};
