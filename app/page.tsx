import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getAllPortfolioData } from "@/services/contentful"
import { getSocialIcon } from "@/utils/social-icons"
import FloatingNav from "@/components/floating-nav"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"

// Fallback data in case Contentful is unavailable
const fallbackData = {
  name: "Diane Lim Dacanay",
  jobTitle: "AI UX Engineer | Ex-Finder.com | Google AI & UX Certified",
  bioParagraphs: [
    "With over 13 years of experience in the tech industry, I specialize in cPanel server administration, malware removal, landing page UX and speed optimization, turning UX data into real conversions, and creating AI-powered workflows.",
    "I discovered my passion for business and e-commerce at the very young age of 5 — from retail sales, importing gadgets to dropshipping in the early days of Alibaba.com, and exploring affiliate marketing at Finder.com.au. Over the years, I've gained hands-on experience across a wide range of tech and business domains.",
    "I launched my first website as a teenager during my college years. That's when I realized a hard truth: without traffic, accessible data, and a clear USP that solves real user problems, code becomes secondary. This realization sparked a deep dive — and a lifelong pursuit — into SEO, CRO, cybersecurity, and now, AI.",
  ],
  achievements: [
    "Touch typing speed of 70-115 wpm",
    "Dropped bounce rates from 80% to under 40%",
    "Increased conversions from 3% to 20%+",
    "Boosted ROAS from 0.8x to over 5x",
    "Reclaimed SEO rankings after a Google penalty by removing 88,000+ phishing pages",
    "Built an AI-powered auto-blogging system to generate and publish optimized content at scale",
  ],
  closingStatement:
    "Today, I help founders and teams build smarter systems and conversion-ready sites powered by data, AI, and empathy.",
}

// Fallback social links for mobile/tablet only
const fallbackSocialLinks = [
  {
    sys: { id: "1" },
    fields: {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/",
      label: "LinkedIn",
      iconName: "linkedin",
    },
  },
  {
    sys: { id: "3" },
    fields: {
      platform: "WhatsApp",
      url: "https://wa.me/+639310780804?text=Hi%20there!",
      label: "WhatsApp",
      iconName: "whatsapp",
    },
  },
  {
    sys: { id: "4" },
    fields: {
      platform: "Email",
      url: "mailto:hello@dianedacanay.com",
      label: "Email",
      iconName: "email",
    },
  },
  {
    sys: { id: "2" },
    fields: {
      platform: "Website",
      url: "https://www.tulong.app",
      label: "My Latest Project",
      iconName: "www",
    },
  },
]

export async function generateMetadata(): Promise<Metadata> {
  const { seoSettings } = await getAllPortfolioData()

  const title = seoSettings?.fields.metaTitle || "Diane Lim Dacanay | AI UX Engineer"
  const description =
    seoSettings?.fields.metaDescription ||
    "AI UX Engineer with 13+ years experience in UX Design Optimizations, data analytics, front-end development, cPanel server administration, malware removal, and AI-powered workflows."

  return {
    title,
    description,
    keywords:
      seoSettings?.fields.keywords?.join(", ") ||
      "AI UX Engineer, cPanel administration, malware removal, UX optimization, SEO, CRO, cybersecurity",
    authors: [{ name: "Diane Lim Dacanay" }],
    openGraph: {
      title: seoSettings?.fields.ogTitle || title,
      description: seoSettings?.fields.ogDescription || description,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seoSettings?.fields.twitterTitle || title,
      description: seoSettings?.fields.twitterDescription || description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function HomePage() {
  const { personalInfo, socialLinks } = await getAllPortfolioData()

  // Use Contentful data or fallback to static data
  const content = personalInfo?.fields || fallbackData
  const socialLinksData = socialLinks?.length > 0 ? socialLinks : fallbackSocialLinks
  const profileImageUrl = personalInfo?.fields.profileImage?.fields.file?.url
    ? `https:${personalInfo.fields.profileImage.fields.file.url}`
    : "/diane_lim_dacanay.webp?height=300&width=300"

  return (
    <>
      <FloatingNav />

      {/* Hero Section */}
      <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl">
          <article className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col">
              {/* Image Section */}
              <section className="flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-gradient-to-b from-blue-800/50 to-transparent">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-300/30 bg-white/10 backdrop-blur-sm">
                    <Image
                      src={profileImageUrl || "/diane_lim_dacanay.webp"}
                      alt={`${content.name} - AI UX Engineer`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </section>

              {/* Content Section */}
              <section className="flex-1 p-6 sm:p-8 lg:p-12 text-white">
                <header className="mb-6 text-center">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2 text-white">{content.name}</h1>
                  <h2 className="text-sm sm:text-base lg:text-lg font-medium text-blue-100 leading-relaxed">
                    {content.jobTitle}
                  </h2>
                </header>

                <div className="space-y-4 text-sm sm:text-base lg:text-lg font-light leading-relaxed text-blue-50 text-justify max-w-4xl mx-auto">
                  {content.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3 text-blue-200 text-center lg:text-left">
                      My Biggest Wins to Date:
                    </h3>
                    <ul className="space-y-2 text-blue-50">
                      {content.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-300 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-6 text-blue-200 font-medium text-center lg:text-left">{content.closingStatement}</p>
                </div>

                {/* Social Links - Mobile and Tablet Only */}
                <nav className="mt-8 lg:hidden" aria-label="Social media links">
                  <div className="flex flex-wrap justify-center gap-6">
                    {socialLinksData.map((link) => {
                      const IconComponent = getSocialIcon(link.fields.iconName)
                      return (
                        <Link
                          key={link.sys.id}
                          href={link.fields.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          aria-label={`Visit ${link.fields.label}`}
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 transition-all duration-300 hover:bg-blue-500/40 hover:border-blue-300/50 hover:scale-110 hover:-translate-y-1">
                            <IconComponent className="w-6 h-6 text-blue-100" />
                          </div>
                          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 text-blue-100 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-blue-700">
                            {link.fields.label}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </nav>
              </section>
            </div>
          </article>
        </div>
      </main>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </>
  )
}
