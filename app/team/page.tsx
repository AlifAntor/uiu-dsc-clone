import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

interface ExecutiveMember {
  id: string
  name: string
  position: string
  image: string
}

const executiveCommittee: ExecutiveMember[] = [
  {
    id: "exec-1",
    name: "Musfique Ahmed",
    position: "President",
    image: "/images/musfique-ahmed.jpg",
  },
  {
    id: "exec-2",
    name: "MD Mahidul Islam Mahi",
    position: "Vice President",
    image: "/images/mahidul-islam-mahi.jpg",
  },
  {
    id: "exec-3",
    name: "Mushfiqur Rahman",
    position: "General Secretary",
    image: "/images/mushfiqur-rahman.jpg",
  },
  {
    id: "exec-4",
    name: "Meherun Mehnaj Miti",
    position: "Joint Secretary",
    image: "/images/meherun-mehnaj-miti.jpg",
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="w-full bg-gradient-to-b from-[#17A2B8] to-[#138496] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Meet the passionate individuals working to make UIU Data Science Club an amazing community.
            </p>
          </div>
        </section>

        {/* Moderator Section */}
        <section className="w-full py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Moderator</h2>
            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition max-w-xs w-full">
                {/* Image */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src="/images/screenshot-202025-11-27-20022814.png"
                    alt="Ms. Khushnur Binte Jahangir"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Khushnur Binte Jahangir</h3>
                  <p className="text-[#17A2B8] font-semibold">Moderator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Committee Section */}
        <section className="w-full py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#17A2B8] mb-12 text-center">Executive Committee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executiveCommittee.map((member) => (
                <ExecutiveMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function ExecutiveMemberCard({ member }: { member: ExecutiveMember }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col">
      <div className="relative h-80 bg-gray-200 overflow-hidden flex items-center justify-center">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-contain p-4" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-[#17A2B8] font-semibold">{member.position}</p>
      </div>
    </div>
  )
}
