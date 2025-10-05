import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Passport Service Consultant - Ghaziabad | Fast & Reliable Passport Services",
  description: "Professional passport services in Ghaziabad. Expert consultation for passport applications, renewals, and documentation. Located in Shastri Nagar, Ghaziabad. Call +91 98184 31860",
  keywords: "passport service, passport consultant, Ghaziabad passport, Shastri Nagar passport, passport application, passport renewal, passport documentation, online passport service, passport help, Ghaziabad passport office",
  authors: [{ name: "Online Passport Service Consultant" }],
  creator: "Online Passport Service Consultant",
  publisher: "Online Passport Service Consultant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Online Passport Service Consultant - Ghaziabad",
    description: "Professional passport services in Ghaziabad. Expert consultation for passport applications, renewals, and documentation.",
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Online Passport Service Consultant',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // You can add an OG image later
        width: 1200,
        height: 630,
        alt: 'Online Passport Service Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Online Passport Service Consultant - Ghaziabad",
    description: "Professional passport services in Ghaziabad. Expert consultation for passport applications, renewals, and documentation.",
    images: ['/og-image.jpg'], // You can add a Twitter image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ghaziabad" />
        <meta name="geo.position" content="28.6692;77.4538" />
        <meta name="ICBM" content="28.6692, 77.4538" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Online Passport Service Consultant",
              "description": "Professional passport services in Ghaziabad",
              "url": "https://your-domain.com",
              "telephone": "+91-98184-31860",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "SC 125 Ground Floor",
                "addressLocality": "Shastri Nagar",
                "addressRegion": "Ghaziabad",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6692,
                "longitude": 77.4538
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 28.6692,
                  "longitude": 77.4538
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
