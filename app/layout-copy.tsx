import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dianedacanay.com"),
  title: {
    default: "Diane Lim Dacanay | AI Tech Specialist",
    template: "%s | Diane Lim Dacanay",
  },
  description:
    "AI Tech Specialist with 13+ years experience in cPanel server administration, malware removal, UX optimization, and AI-powered workflows.",
  keywords: [
    "AI Tech Specialist",
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
    title: "Diane Lim Dacanay | AI Tech Specialist",
    description: "AI Tech Specialist | Ex-Finder.com | Middle Path Advocate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diane Lim Dacanay | AI Tech Specialist",
    description: "AI Tech Specialist | Ex-Finder.com | Middle Path Advocate",
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
    generator: 'v0.dev'
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
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
