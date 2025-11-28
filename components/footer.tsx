import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-2">UIU Data Science Club</h3>
            <p className="text-gray-400 text-sm">Empowering the next generation of data scientists.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/questions" className="hover:text-white transition">
                  Questions Bank
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-white transition">
                  Track Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">Email: club@datascience.uiu.ac.bd</p>
            <p className="text-sm text-gray-400">Follow us on social media</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 UIU Data Science Club. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition">
              Facebook
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
