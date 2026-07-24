import { Figtree } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/navigation/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { defaultMetadata } from "@/config/metadata";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Infalex",
              "url": "https://infalex.com",
              "logo": "https://infalex.com/icon.svg",
              "sameAs": [
                "https://twitter.com/infalex",
                "https://github.com/infalexhq"
              ]
            })
          }}
        />
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
        className={`${figtree.className} antialiased flex flex-col min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[76px]" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}