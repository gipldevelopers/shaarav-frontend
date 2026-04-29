import { MapPin, Phone, Mail } from 'lucide-react'

function Footer({ navigation, contactDetails, onNavigate }) {
  return (
    <footer className="border-t border-clove-200/70 bg-white pt-16 pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-clove-950 text-spice-50 font-display font-bold text-lg">
                SGV
              </div>
              <span className="font-display font-bold text-xl text-clove-950 tracking-wide">
                Shaarav Global
              </span>
            </div>
            <p className="text-sm leading-relaxed text-clove-700">
              Premium exports and global sourcing. Delivering quality products worldwide with a focus on reliability, trust, and excellence.
            </p>
            <div className="flex gap-4 text-clove-700 text-sm font-semibold">
              <a href="#" className="hover:text-copper-700 transition-colors">FB</a>
              <a href="#" className="hover:text-copper-700 transition-colors">TW</a>
              <a href="#" className="hover:text-copper-700 transition-colors">IG</a>
              <a href="#" className="hover:text-copper-700 transition-colors">IN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-clove-950 mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-clove-700">
              {navigation.map((item) => (
                <li key={item.sectionId}>
                  <button 
                    onClick={() => onNavigate(item.sectionId)}
                    className="hover:text-copper-700 transition-colors font-semibold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-clove-950 mb-6">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-clove-700 font-semibold">
              <li><a href="#" className="hover:text-copper-700 transition-colors">Global Sourcing</a></li>
              <li><a href="#" className="hover:text-copper-700 transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-copper-700 transition-colors">Logistics & Supply</a></li>
              <li><a href="#" className="hover:text-copper-700 transition-colors">Custom Packaging</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-clove-950 mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-clove-700">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-copper-700" />
                <span className="leading-relaxed">B7-1601, Waterlily, Adani Shantigram, Ahmedabad - 382421, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-copper-700" />
                <span>+91 98240 28022</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-copper-700" />
                <span>hello@shaaravglobalventures.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-clove-200/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-clove-500">
          <p>© {new Date().getFullYear()} Shaarav Global Ventures. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-clove-950 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-clove-950 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
