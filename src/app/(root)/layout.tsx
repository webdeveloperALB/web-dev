// layout.tsx
import AOS from "aos";
import { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Ensure this is imported
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

// Load Inter font with proper subset for optimization
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development | Professional Full-Stack Solutions",
    description: "Expert web development services tailored for your business needs.",
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
};

// Implement Server-Side Generation for better indexing
export const revalidate = 3600; // Revalidate every hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" hrefLang="en" href="https://www.webdev-al.com/" />
        <link rel="alternate" hrefLang="en-US" href="https://www.webdev-al.com/en-US" />
        <link rel="alternate" hrefLang="es-ES" href="https://www.webdev-al.com/es-ES" />
        <link rel="alternate" hrefLang="x-default" href="https://www.webdev-al.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />

        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YNYDCSLK92"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YNYDCSLK92');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Web Development",
              "url": "https://www.webdev-al.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.webdev-al.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Web Development",
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
                "https://www.linkedin.com/company/your-company",
                "https://twitter.com/your-handle"
              ]
            })
          }}
        />
      </head>
      <body>
        <BalancerProvider>
          <SmoothScrolling>
            <Navigation />
            <main className="pt-24" id="main-content">{children}</main>
            <TextSLider1 />
            <Footer />
          </SmoothScrolling>
        </BalancerProvider>
      </body>
    </html>
  );
}
