import Header from "@/components/header"
import Footer from "@/components/footer"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface Partner {
  id: string
  name: string
  logo: string
  description: string
  benefits: string[]
  url: string
}

const partners: Partner[] = [
  {
    id: "1",
    name: "DataCamp Donates",
    logo: "/placeholder.svg?key=datacamp",
    description: "Providing free 1-year subscriptions with 350+ courses on Python, SQL, R, and Machine Learning.",
    benefits: [
      "Free 1-year subscription for all members",
      "350+ data science courses",
      "Interactive coding exercises",
      "Industry-recognized certifications",
    ],
    url: "https://www.datacamp.com/donates",
  },
  {
    id: "2",
    name: "GitHub Education",
    logo: "/placeholder.svg?key=github",
    description: "Offering free GitHub Pro accounts and development tools for students.",
    benefits: ["Free GitHub Pro accounts", "Version control training", "Collaboration tools", "Community projects"],
    url: "https://education.github.com/",
  },
  {
    id: "3",
    name: "IBM Cloud",
    logo: "/placeholder.svg?key=ibm",
    description: "Providing cloud computing resources and AI/ML tools for learning and projects.",
    benefits: ["Free cloud credits", "Access to AI/ML services", "Watson API access", "Technical workshops"],
    url: "https://www.ibm.com/cloud/",
  },
]

export default function PartnersPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="w-full bg-gradient-to-b from-[#17A2B8] to-[#138496] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              We're proud to collaborate with industry leaders who support our mission.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="w-full py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div key={partner.id} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                  {/* Logo */}
                  <div className="mb-6 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Partner Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-6">{partner.description}</p>

                  {/* Benefits */}
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">Benefits</h4>
                  <ul className="space-y-2 mb-6">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-[#17A2B8] mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#17A2B8] font-semibold hover:gap-3 transition"
                  >
                    Learn More <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Inquiry */}
        <section className="w-full bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Partnering?</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for organizations that share our mission to promote data science education.
            </p>
            <a
              href="mailto:partners@datascience.uiu.ac.bd"
              className="inline-block bg-[#17A2B8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
