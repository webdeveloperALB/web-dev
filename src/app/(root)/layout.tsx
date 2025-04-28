// layout.tsx
import { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import "@/app/styles/globals.scss";
import "@/app/styles/button.css";
import Navigation from "@/components/navigation/navigation";
import SmoothScrolling from "@/utils/smooth-scrolling";
import Preloader from "@/components/preloader";
import TextSLider1 from "@/components/textslide";
import Footer from "@/components/common/footer";
import { BalancerProvider } from "../providers/provider";
import { ToastProvider as ToastProviderWrapper } from "../providers/provider";

// Load Inter font with proper subset for optimization
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Add variable to use in CSS
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Full-Stack Web Development Services",
    default: "WebDev AL | Expert Full-Stack Development Services",
  },
  description:
    "Custom React web development for fast, modern, and scalable websites. Tailored solutions for businesses. Get a free consultation today!",
  keywords: [
    "Web Development",
    "full-stack web development",
    "React development",
    "Node.js development",
    "custom web solutions",
    "responsive web design",
    "e-commerce solutions",
    "business websites",
    "SEO-friendly development",
    "mobile-friendly websites",
    "web applications",
    "API development",
    "UI/UX design",
    "database management",
    "JavaScript frameworks",
    "Express.js development",
    "MySQL database",
    "website redesign",
    "professional web services",
    "affordable web development"
  ],
  metadataBase: new URL("https://www.webdev-al.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://www.webdev-al.com/",
      "en-US": "https://www.webdev-al.com/en-US",
      "es-ES": "https://www.webdev-al.com/es-ES",
      "x-default": "https://www.webdev-al.com/"
    },
  },
  category: "technology",
  openGraph: {
    title: "Web Development | Professional Full-Stack Development Services",
    description: "Custom web solutions for businesses of all sizes. Specializing in React, Node.js, and responsive design.",
    url: "https://www.webdev-al.com/",
    siteName: "Web Development",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.webdev-al.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebDev AL - Full-Stack Development Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development | Professional Full-Stack Solutions",
    description: "Expert web development services tailored for your business needs.",
    creator: "@webdev_al",
    images: ["https://www.webdev-al.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  authors: [{ name: "WebDev AL", url: "https://www.webdev-al.com/about" }],
  applicationName: "WebDev AL",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  appleWebApp: {
    capable: true,
    title: "WebDev AL",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

// Implement Server-Side Generation for better indexing
export const revalidate = 3600; // Revalidate every hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable} scroll-smooth`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical resources */}
        <link rel="preload" href="/critical.css" as="style" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        
        {/* Google Tag Manager */}
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

        {/* Structured data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebDev AL",
              "url": "https://www.webdev-al.com/",
              "logo": "https://www.webdev-al.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer support",
                "availableLanguage": ["English", "Spanish"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/webdev-al",
                "https://twitter.com/webdev_al",
                "https://github.com/webdev-al"
              ]
            })
          }}
        />

        {/* Structured data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WebDev AL",
              "url": "https://www.webdev-al.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.webdev-al.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured data for ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "WebDev AL",
              "description": "Expert Full-Stack Web Development services tailored for businesses.",
              "url": "https://www.webdev-al.com/",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "addressCountry": "US"
              },
              "telephone": "+1-XXX-XXX-XXXX",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://www.linkedin.com/company/webdev-al",
                "https://twitter.com/webdev_al"
              ]
            })
          }}
        />

        {/* Structured data for BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.webdev-al.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.webdev-al.com/services"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
            title="GTM"
          ></iframe>
        </noscript>

        <BalancerProvider>
          <SmoothScrolling>
            <Navigation />
            <main className="pt-24 min-h-screen" id="main-content" role="main" tabIndex={-1}>
              {children}
            </main>
            <TextSLider1 />
            <Footer />
          </SmoothScrolling>
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