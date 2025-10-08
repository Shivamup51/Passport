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
  title: "Passport Seva in Ghaziabad | Passport Services in Noida & Indirapuram",
  description: "Apply for passport services in Ghaziabad, Noida, and Indirapuram. Fast and reliable online passport assistance by Passport Connect. Call us today!",
  keywords: "passport seva ghaziabad, passport service noida, passport in indirapuram, passport connect, passport consultant ghaziabad, passport office noida, passport services indirapuram, online passport application ghaziabad, passport renewal noida, passport documentation indirapuram",
  authors: [{ name: "Passport Connect" }],
  creator: "Passport Connect",
  publisher: "Passport Connect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://passportconnect.in'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Passport Seva in Ghaziabad | Passport Services in Noida & Indirapuram",
    description: "Apply for passport services in Ghaziabad, Noida, and Indirapuram. Fast and reliable online passport assistance by Passport Connect.",
    url: 'https://passportconnect.in',
    siteName: 'Passport Connect',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Passport Connect - Passport Services in Ghaziabad, Noida & Indirapuram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Passport Seva in Ghaziabad | Passport Services in Noida & Indirapuram",
    description: "Apply for passport services in Ghaziabad, Noida, and Indirapuram. Fast and reliable online passport assistance by Passport Connect.",
    images: ['/logo.png'],
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
    google: 'AygWqCOzMODnVL_pbgQYO3dtEbR3cUg5QHOcnXLRwQw', // Add your Google Search Console verification code
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TVBJWM54');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NSJQTZ7FL8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NSJQTZ7FL8');
            `,
          }}
        />
        {/* End Google Analytics 4 */}
        
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://passportconnect.in" />
        
        {/* Geo Location Meta Tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ghaziabad, Noida, Indirapuram" />
        <meta name="geo.position" content="28.6692;77.4538" />
        <meta name="ICBM" content="28.6692, 77.4538" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="AygWqCOzMODnVL_pbgQYO3dtEbR3cUg5QHOcnXLRwQw" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Passport Connect",
              "image": "https://passportconnect.in/logo.png",
              "url": "https://passportconnect.in",
              "telephone": "+91 9310469634",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Indirapuram",
                "addressLocality": "Ghaziabad",
                "addressRegion": "UP",
                "postalCode": "201014",
                "addressCountry": "IN"
              },
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 10:00-18:00",
              "description": "Professional passport services in Ghaziabad, Noida, and Indirapuram",
              "serviceArea": [
                {
                  "@type": "City",
                  "name": "Ghaziabad"
                },
                {
                  "@type": "City", 
                  "name": "Noida"
                },
                {
                  "@type": "City",
                  "name": "Indirapuram"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Passport Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "New Passport Application"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Passport Renewal"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Tatkal Passport"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVBJWM54"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
      </body>
    </html>
  );
}
