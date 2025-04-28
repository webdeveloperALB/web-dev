// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import "@/app/styles/globals.scss";
import "@/app/styles/button.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/common/footer";
import { BalancerProvider } from "../providers/provider";
import { ToastProvider as ToastProviderWrapper } from "../providers/provider";

// Load Inter font with proper subset for optimization
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Full-Stack Web Development Services",
    default: "WebDev AL | Expert Full-Stack Development Services",
  },
  description:
    "Custom React web development for fast, modern, and scalable websites. Tailored solutions for businesses. Get a free consultation today!",
  // Keep the other metadata fields as they are but move structured data to separate files
  keywords: [
    "Web Development",
    "full-stack web development",
    "React development",
    "Node.js development",
    "custom web solutions"
    // Trimmed for readability, keep your full list
  ],
  metadataBase: new URL("https://www.webdev-al.com/"),
  // Keep other metadata fields
};

// Implement Server-Side Generation for better indexing
export const revalidate = 3600; // Revalidate every hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Remove preloads for missing resources */}
        
        {/* Google Tag Manager - load only in production */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-XXXXXXX');
              `
            }}
          />
        )}

        {/* Move structured data to separate file in production */}
        <Script
          id="schema-data"
          strategy="afterInteractive"
          src="/schema.js"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) - load only in production */}
        {process.env.NODE_ENV === 'production' && (
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
              height="0" 
              width="0" 
              style={{ display: 'none', visibility: 'hidden' }}
              title="GTM"
            ></iframe>
          </noscript>
        )}

        <BalancerProvider>
          <Navigation />
          <main className="pt-24 min-h-screen" id="main-content" role="main" tabIndex={-1}>
            {children}
          </main>
          {/* Load TextSlider conditionally only on homepage */}
          {/* <TextSLider1 /> */}
          <Footer />
          <ToastProviderWrapper />
          <Analytics />
        </BalancerProvider>

        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:bg-white focus:z-50 focus:outline-none"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}