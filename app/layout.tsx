import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Infalex | The AI Hub of the Future",
  description: "Infalex is an MSME-registered platform providing next-generation AI utilities, including an AI Resume Matcher and developer tools.",
  keywords: ["AI tools", "resume matcher","SaaS", "developer utilities","India MSME", "Developer Tools", "Infalex", "AI hub", "career AI", "productivity tools"],
  authors: [{ name: "Infalex Team", url: "https://www.infalex.com" }],
  creator: "Infalex Team",
  publisher: "Infalex Ecosystem",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-162KWK3Q3L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-162KWK3Q3L');
          `}
        </Script>
      </head>
      <body
        className={`${figtree.className} antialiased flex flex-col min-h-screen`}
        style={{ background: "#05050a", color: "#f0f0f8" }}
      >
        <Navbar />
        <main className="flex-grow pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}