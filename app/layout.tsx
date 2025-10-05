import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dianedacanay.com"),
  title: {
    default: "Diane Lim Dacanay | AI UX Engineer",
    template: "%s | Diane Lim Dacanay",
  },
  description:
    "AI UX Engineer with 13+ years experience in UX optimizations, data analytics, front-end development, cPanel server administration, malware removal, and AI-powered workflows.",
  keywords: [
    "AI UX Engineer",
    "UX Design",
    "Data Analytics",
    "cPanel administration",
    "malware removal",
    "UX optimization",
    "SEO",
    "CRO",
    "cybersecurity",
  ],
  authors: [{ name: "Diane Lim Dacanay", url: "https://dianedacanay.com" }],
  creator: "Diane Lim Dacanay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dianedacanay.com",
    siteName: "Diane Lim Dacanay",
    title: "Diane Lim Dacanay | AI UX Engineer",
    description: "AI UX Engineer | Ex-Finder.com | Google AI & UX Certified",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diane Lim Dacanay | AI Tech Specialist",
    description: "AI UX Engineer | Ex-Finder.com | Google AI & UX Certified",
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* ✅ Google Analytics Scripts START */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KBXRQ0G2VL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KBXRQ0G2VL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* ✅ Google Analytics Scripts END */}

        <div className="flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Analytics /> {/* Vercel Analytics */}
        <SpeedInsights /> {/* Speed Insights tracking */}
      </body>
    </html>
  )
}
