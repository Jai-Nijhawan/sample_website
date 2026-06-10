import type { Metadata } from "next";
import { Fraunces, Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { BookingProvider } from "@/components/providers/BookingContext";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Preloader from "@/components/site/Preloader";
import Cursor from "@/components/site/Cursor";
import BookingModal from "@/components/site/BookingModal";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "The Barns Resort, Bhimtal · Luxury Mountain Resort in the Kumaon Hills",
    template: "%s · The Barns Resort, Bhimtal",
  },
  description:
    "A boutique luxury resort in Bhimtal, Uttarakhand. Twelve barn-style suites with private balconies, Himalayan views, a rooftop for the sunset and a homely Kumaoni table, a leisurely stroll from Bhimtal Lake.",
  keywords: [
    "resorts in Bhimtal",
    "luxury resort Bhimtal",
    "hotels in Bhimtal",
    "Bhimtal lake resort",
    "Bhimtal hotels with mountain view",
    "luxury stay Nainital",
    "Kumaon resort",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "The Barns Resort, Bhimtal · Raw & Luxury in the Kumaon Hills",
    description:
      "Twelve barn-style suites with private balconies and Himalayan views, above Bhimtal Lake.",
    url: site.url,
    images: [{ url: "/media/gallery/1.jpg", width: 1500, height: 1000 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Barns Resort, Bhimtal",
    description:
      "A boutique luxury resort above Bhimtal Lake in the Kumaon hills.",
    images: ["/media/gallery/1.jpg"],
  },
  icons: { icon: "/media/brand/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${hanken.variable} antialiased`}
    >
      <body className="min-h-screen bg-sand">
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T6ZMVXHL');`,
          }}
        />
        <BookingProvider>
          <Preloader />
          <Cursor />
          <Nav />
          <SmoothScroll>
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <BookingModal />
          <WhatsAppFloat />
        </BookingProvider>
      </body>
    </html>
  );
}
