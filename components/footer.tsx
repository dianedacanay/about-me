import Image from "next/image"
import { getFooterContent } from "@/services/contentful"

export default async function Footer() {
  const footerContent = await getFooterContent()

  const logoUrl = footerContent?.fields.logo?.fields.file?.url
    ? `https:${footerContent.fields.logo.fields.file.url}`
    : "/placeholder.svg?height=60&width=120"

  const copyrightText = footerContent?.fields.copyrightText || "© 2025 Diane Lim Dacanay. All rights reserved."

  return (
    <footer className="bg-blue-950 text-blue-100 py-6 px-4 border-t border-blue-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <Image
            src={logoUrl || "/Diane-Dacanay-gold-logo.webp"}
            alt="Diane Dacanay Logo"
            width={120}
            height={60}
            className="mx-auto h-12 w-auto"
          />
        </div>
        <p className="text-sm text-blue-300">{copyrightText}</p>
      </div>
    </footer>
  )
}
