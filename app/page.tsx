"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Users, BookOpen, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  UIU Data Science Club
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Empowering students with data science skills, fostering innovation, and building a community of future
                  data leaders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/events"
                    className="bg-[#17A2B8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#138496] transition flex items-center justify-center gap-2"
                  >
                    Events <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/team"
                    className="border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:border-[#17A2B8] hover:text-[#17A2B8] transition"
                  >
                    Meet Our Team
                  </Link>
                </div>
              </div>

              <div className="relative h-80 md:h-96 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/hero-20image.jpg"
                  alt="UIU Data Science Club Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* DataCamp Partnership Section */}
        <section className="w-full bg-[#17A2B8] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Official Partnership</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Just Announced</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">DataCamp Donates Partnership</h2>
                <p className="text-lg text-white/90 mb-6">
                  Get a <strong>FREE 1-year DataCamp subscription</strong> with 350+ courses on Python, SQL, R, and
                  Machine Learning. Boost your data science skills!
                </p>
                <Link
                  href="/partners"
                  className="inline-block bg-white text-[#17A2B8] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Learn More
                </Link>
                <p className="text-sm text-white/80 mt-4">Exclusive for club members</p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32">
                  <div className="text-center">
                    <p className="text-[#17A2B8] font-bold text-2xl">DataCamp</p>
                    <p className="text-gray-600 text-sm">Donates</p>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center h-32">
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl">DataCamp</p>
                    <p className="text-gray-400 text-sm">Donates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Club</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The UIU Data Science Club is dedicated to promoting data science education, research, and applications
                among students at United International University.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Community Card */}
              <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#17A2B8] transition">
                <Users className="text-[#17A2B8] mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  Join a vibrant community of data enthusiasts, share knowledge, and collaborate on exciting projects.
                </p>
              </div>

              {/* Learning Card */}
              <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#17A2B8] transition">
                <BookOpen className="text-[#17A2B8] mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Learning</h3>
                <p className="text-gray-600">
                  Access workshops, seminars, and hands-on training sessions led by industry experts and faculty
                  members.
                </p>
              </div>

              {/* Opportunities Card */}
              <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#17A2B8] transition">
                <Award className="text-[#17A2B8] mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Opportunities</h3>
                <p className="text-gray-600">
                  Participate in competitions, hackathons, and research projects to enhance your skills and portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="w-full py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">
                Join us for our exciting events and activities throughout the semester.
              </p>
            </div>

            {/* No Events Placeholder */}
            <div className="text-center bg-white border border-gray-200 rounded-xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-600 mb-6">
                We're currently planning our next batch of exciting events. Check back soon or follow us on social media
                for announcements!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events" className="text-[#17A2B8] font-semibold hover:underline">
                  View Past Events
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61573382191627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#17A2B8] font-semibold hover:underline"
                >
                  Follow Updates
                </a>
              </div>
              <p className="text-gray-600 text-sm mt-6">
                Want to suggest an event? Contact our team at{" "}
                <a href="mailto:club@datascience.uiu.ac.bd" className="text-[#17A2B8] font-semibold">
                  club@datascience.uiu.ac.bd
                </a>
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Link
                href="/events"
                className="inline-block bg-[#17A2B8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="w-full py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Club Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Become a part of UIU Data Science Club and embark on an exciting journey into the world of data science.
            </p>
            <Link
              href="/register"
              className="inline-block bg-[#17A2B8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
            >
              Register Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
