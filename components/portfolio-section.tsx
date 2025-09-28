import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "AI-Powered Auto-Blogging System",
    description:
      "Built a comprehensive system that generates and publishes SEO-optimized content at scale, increasing organic traffic by 300%.",
    image: "/ai-auto-blog.webp?height=300&width=400",
    tags: ["AI", "SEO", "Automation", "Content Marketing"],
  },
  {
    id: 2,
    title: "E-commerce Conversion Optimization",
    description:
      "Transformed underperforming landing pages, boosting conversion rates from 3% to 20%+ through data-driven UX improvements.",
    image: "/Conversion-rate.webp?height=300&width=400",
    tags: ["CRO", "UX Design", "Analytics", "A/B Testing"],
  },
  {
    id: 3,
    title: "Malware Removal & Security Hardening",
    description:
      "Successfully recovered hacked site, removed 88,000+ indexed phishing pages and restored SEO rankings after Google penalty, implementing robust security measures.",
    image: "/gsc-phishing-pages-indexed.webp?height=300&width=400",
    tags: ["Cybersecurity", "SEO Recovery", "Server Administration"],
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-900 mb-4">Featured Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my expertise in AI, UX optimization, and technical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/ai-auto-blog.webp"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4 text-justify">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
