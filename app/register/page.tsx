"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    department: "",
    year: "",
    phone: "",
    interests: [] as string[],
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, value] : prev.interests.filter((i) => i !== value),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In a real app, send data to backend
    console.log(formData)
  }

  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="w-full bg-gradient-to-b from-[#17A2B8] to-[#138496] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join UIU Data Science Club</h1>
            <p className="text-lg text-white/90">
              Register now to become part of our vibrant community of data science enthusiasts.
            </p>
          </div>
        </section>

        {/* Registration Content */}
        <section className="w-full py-16 px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-8">
                  Your registration has been received. We'll get back to you soon with more information.
                </p>
                <a
                  href="/"
                  className="inline-block bg-[#17A2B8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
                >
                  Back to Home
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-gray-200">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                        placeholder="your.email@uiu.ac.bd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                        placeholder="+880 1XXX XXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Academic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Student ID *</label>
                      <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                        placeholder="Your student ID"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                      >
                        <option value="">Select Department</option>
                        <option value="cs">Computer Science</option>
                        <option value="cse">Computer Science & Engineering</option>
                        <option value="se">Software Engineering</option>
                        <option value="it">Information Technology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Year *</label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8]"
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Areas of Interest</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: "machine-learning", label: "Machine Learning" },
                      { value: "data-analysis", label: "Data Analysis" },
                      { value: "visualization", label: "Data Visualization" },
                      { value: "web-scraping", label: "Web Scraping" },
                      { value: "nlp", label: "Natural Language Processing" },
                      { value: "deep-learning", label: "Deep Learning" },
                    ].map((interest) => (
                      <div key={interest.value} className="flex items-center">
                        <input
                          type="checkbox"
                          id={interest.value}
                          name="interests"
                          value={interest.value}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-[#17A2B8] rounded focus:ring-2 focus:ring-[#17A2B8]"
                        />
                        <label htmlFor={interest.value} className="ml-2 text-gray-700">
                          {interest.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#17A2B8] text-white py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
                  >
                    Submit Registration
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    We respect your privacy. Your information will be used only for club communications.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
