import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TrackPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="w-full bg-gradient-to-b from-[#17A2B8] to-[#138496] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Application</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Track your recruitment application status with your application ID.
            </p>
          </div>
        </section>

        {/* Tracking Section */}
        <section className="w-full py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Track Your Application</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Application ID *</label>
                  <input
                    type="text"
                    placeholder="Enter your application ID"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    You received this ID in your confirmation email after submitting your registration.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#17A2B8] text-white py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
                >
                  Track Application
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Don't have an application ID?{" "}
                  <a href="/register" className="text-[#17A2B8] font-semibold hover:underline">
                    Register now
                  </a>{" "}
                  to apply for the club.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
