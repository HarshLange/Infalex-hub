import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css"; // Assuming your global css is here based on your screenshot

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infalex | The AI Hub of the Future",
  description: "Infalex is an MSME-registered platform providing next-generation AI utilities, including an AI Resume Matcher and developer tools.",
  keywords: ["AI tools", "resume matcher","SaaS", "developer utilities","India MSME", "Developer Tools", "Infalex", "AI hub", "career AI", "productivity tools"],
  authors: [{ name: "Infalex Team", url: "https://www.infalex.com" }],
  creator: "Infalex Team",
  publisher: "Infalex Ecosystem",
  // Add your specific favicon routing here:
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Fallback for older browsers
      { url: '/favicon.svg', type: 'image/svg+xml' }, // Modern scalable vector icon
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }, // For iPhones and iPads
    ],
  },
  manifest: '/site.webmanifest', // Points to your PWA/Android config
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Global Google Analytics applied to all pages */}
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
      <body className={`${inter.className} bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}