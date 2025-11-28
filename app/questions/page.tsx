import Header from "@/components/header"
import Footer from "@/components/footer"

export default function QuestionsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="w-full bg-gradient-to-b from-[#17A2B8] to-[#138496] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Questions Bank</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              A curated collection of interview questions and practice problems for data science interviews.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="w-full py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive questions bank is currently under development. We're preparing hundreds of data
                science interview questions, coding challenges, and practice problems.
              </p>
              <p className="text-gray-600 mb-8">Check back soon or contact us to be notified when it launches!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-block bg-[#17A2B8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
                >
                  Back to Home
                </a>
                <a
                  href="mailto:club@datascience.uiu.ac.bd"
                  className="inline-block border-2 border-[#17A2B8] text-[#17A2B8] px-8 py-3 rounded-lg font-semibold hover:bg-[#17A2B8] hover:text-white transition"
                >
                  Notify Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
