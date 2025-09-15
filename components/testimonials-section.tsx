import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mike Navitsky",
    role: "CEO | BASTION | Slovenia",
    avatar: "/mike-bastion.webp?height=80&width=80",
    content:
      "Diane's expertise in CRO and AI has transformed our business. She increased our ROAS from 0.8x to over 5x in just 3 months. Her data-driven approach and technical skills are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Clare Cribbin",
    role: "Publisher | Finder.com.au | Australia",
    avatar: "/Clare_Cribbin.webp?height=80&width=80",
    content:
      "Working with Diane was a game-changer. She dropped our bounce rate from 80% to under 40% and completely revolutionized our user experience. Her attention to detail is incredible.",
    rating: 5,
  },
  {
    id: 3,
    name: "Gemma Henry",
    role: "Content Lead | Bensons | United Kingdom",
    avatar: "/gemma-henry.webp?height=80&width=80",
    content:
      "Diane's AI-powered auto-blogging system helped us scale our content production while maintaining quality. Her technical expertise combined with marketing insight is rare to find.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Client Testimonials</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            What clients say about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-blue-800/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-600/30 hover:bg-blue-700/40 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-blue-50 mb-6 text-justify leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <footer className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <cite className="text-blue-100 font-semibold not-italic">{testimonial.name}</cite>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
