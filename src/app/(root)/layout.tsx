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

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | WebDev AL - Custom Web Solutions",
    default: "WebDev AL | Custom React & Full-Stack Development Services",
  },
  description: "Custom React web development for fast, modern, and scalable business websites. Expert full-stack solutions including UI/UX design, API integration, and database architecture.",
  keywords: [
    "Web Development",
    "full-stack web development",
    "React development",
    "Node.js development",
    "custom web solutions",
    "UI/UX design",
    "API integration",
    "database architecture",
    "responsive websites",
    "web applications"
  ],
  metadataBase: new URL("https://www.webdev-al.com/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.webdev-al.com/",
    siteName: "WebDev AL",
    title: "WebDev AL | Custom React & Full-Stack Development Services",
    description: "Custom React web development for fast, modern, and scalable business websites. Expert full-stack solutions.",
    images: [
      {
        url: "https://www.webdev-al.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebDev AL - Full-Stack Development Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "WebDev AL | Custom React & Full-Stack Development Services",
    description: "Custom React web development for fast, modern, and scalable business websites.",
    images: ["https://www.webdev-al.com/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.webdev-al.com"
  }
};

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

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics and GTM - Only load in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=G-F8B9YM1KNF`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-F8B9YM1KNF');
              `}
            </Script>

            {/* Google Tag Manager */}
            <Script id="gtm-head" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WJDD5VSH');
              `}
            </Script>
          </>
        )}

        {/* Structured data */}
        <Script
          id="schema-data"
          strategy="afterInteractive"
          src="/schema.js"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager noscript */}
        {process.env.NODE_ENV === 'production' && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WJDD5VSH"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="GTM"
            ></iframe>
          </noscript>
        )}

        {/* Accessibility Skip Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:bg-white focus:z-50 focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Providers and layout */}
        <BalancerProvider>
          <Navigation />
          <main className="pt-24 min-h-screen" id="main-content" role="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <ToastProviderWrapper />
          <Analytics />
        </BalancerProvider>
      </body>
    </html>
  );
}
