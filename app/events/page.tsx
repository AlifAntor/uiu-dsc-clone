import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  attendees: number
  category: "workshop" | "hackathon" | "seminar" | "competition"
  status: "upcoming" | "past"
}

const events: Event[] = [
  {
    id: "1",
    title: "Python for Data Science Basics",
    date: "Dec 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Room 301, Building A",
    description:
      "Learn the fundamentals of Python programming with a focus on data manipulation and analysis libraries.",
    attendees: 45,
    category: "workshop",
    status: "past",
  },
  {
    id: "2",
    title: "Data Visualization with Matplotlib & Seaborn",
    date: "Dec 8, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Computer Lab, Building B",
    description: "Master the art of creating compelling visualizations to tell data stories effectively.",
    attendees: 38,
    category: "workshop",
    status: "past",
  },
  {
    id: "3",
    title: "Machine Learning Fundamentals",
    date: "Nov 30, 2025",
    time: "1:00 PM - 3:30 PM",
    location: "Auditorium, Building C",
    description: "Introduction to supervised and unsupervised learning algorithms with practical applications.",
    attendees: 62,
    category: "seminar",
    status: "past",
  },
  {
    id: "4",
    title: "24-Hour Data Science Hackathon",
    date: "Nov 22-23, 2025",
    time: "All Day Event",
    location: "Main Campus",
    description:
      "Collaborate with peers to solve real-world data science problems. Prizes and recognition await the winners!",
    attendees: 150,
    category: "hackathon",
    status: "past",
  },
  {
    id: "5",
    title: "SQL for Data Analysis",
    date: "Nov 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Room 205, Building A",
    description: "Learn essential SQL queries for efficient data retrieval and analysis from databases.",
    attendees: 52,
    category: "workshop",
    status: "past",
  },
]

function getCategoryColor(category: string) {
  switch (category) {
    case "workshop":
      return "bg-blue-100 text-blue-700"
    case "hackathon":
      return "bg-purple-100 text-purple-700"
    case "seminar":
      return "bg-green-100 text-green-700"
    case "competition":
      return "bg-orange-100 text-orange-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming")
  const pastEvents = events.filter((e) => e.status === "past")

  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="w-full bg-gradient-to-b from-[#17A2B8] to-[#138496] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Join us for workshops, hackathons, seminars, and competitions throughout the year.
            </p>
          </div>
        </section>

        {/* Events Content */}
        <section className="w-full py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Upcoming Events */}
            {upcomingEvents.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
                <div className="grid gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {/* Past Events */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {upcomingEvents.length > 0 ? "Past Events" : "Events"}
              </h2>
              {pastEvents.length > 0 ? (
                <div className="grid gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center bg-gray-50 border border-gray-200 rounded-lg p-12">
                  <p className="text-gray-600">No events to display.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to suggest an event?</h3>
            <p className="text-gray-600 mb-6">Contact our team at club@datascience.uiu.ac.bd</p>
            <Link
              href="/register"
              className="inline-block bg-[#17A2B8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#138496] transition"
            >
              Join the Club
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition bg-white">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${getCategoryColor(event.category)}`}
            >
              {event.category}
            </span>
            {event.status === "past" && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">Past</span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#17A2B8]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#17A2B8]" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#17A2B8]" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-[#17A2B8]" />
              <span>{event.attendees} attendees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
