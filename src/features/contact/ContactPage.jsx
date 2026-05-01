import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom red marker icon
// Custom red marker icon matching the screenshot (Google Maps style)
const redIcon = L.divIcon({
  html: `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));">
        <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8Z" fill="#EA4335"/>
        <circle cx="12" cy="8" r="3" fill="#A52714"/>
      </svg>
      <div style="width: 10px; height: 10px; background: white; border: 2.5px solid #333; border-radius: 50%; margin-top: -6px; box-shadow: 0 1px 2px rgba(0,0,0,0.3);"></div>
    </div>
  `,
  className: '',
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -42]
});

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">Get in Touch</h2>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-clove-950 mb-6">Contact Us</h1>
          <p className="text-lg text-clove-700 leading-relaxed">
            Ready to source the finest Indian spices? Reach out to our team for inquiries, quotes, or partnerships.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            className="space-y-10"
          >
            <div>
              <h3 className="font-display text-3xl font-bold text-clove-950 mb-8">How to reach</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-spice-100 flex items-center justify-center text-copper-700">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-clove-950 font-bold mb-1 uppercase tracking-wider text-sm">Address</h4>
                    <p className="text-clove-700 leading-relaxed">
                      B7-1601, Waterlily, Adani Shantigram, Nr Vaishnodevi circle, Ahmedabad-382421, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-spice-100 flex items-center justify-center text-copper-700">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-clove-950 font-bold mb-1 uppercase tracking-wider text-sm">Phone</h4>
                    <p className="text-clove-700 leading-relaxed font-semibold">+91 98240 28022</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-spice-100 flex items-center justify-center text-copper-700">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-clove-950 font-bold mb-1 uppercase tracking-wider text-sm">Email</h4>
                    <p className="text-clove-700 leading-relaxed font-semibold">hello@shaaravglobalventures.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <div className="relative z-0 rounded-[2rem] overflow-hidden aspect-video border border-clove-200">
                  <MapContainer 
                    center={[23.1658199, 72.537114]} 
                    zoom={14} 
                    className="w-full h-full relative"
                    scrollWheelZoom={true}
                    zoomControl={false}
                    attributionControl={false}
                  >
                    {/* Floating Info Card (Google Maps Style) */}
                    <div className="absolute top-4 left-4 z-10 bg-white p-3 shadow-lg rounded-sm border border-gray-200 min-w-[180px] pointer-events-auto">
                      <div className="text-[13px] font-medium text-gray-900">Shaarav Global Ventures</div>
                      <div className="text-[11px] text-gray-500 mb-2 truncate">B7-1601, Waterlily, Adani Shantigram</div>
                      <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=23.1658199,72.537114" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-blue-600 text-[11px] font-medium hover:underline flex items-center gap-1"
                        >
                          Directions
                        </a>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=23.1658199,72.537114" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-blue-600 text-[11px] hover:underline"
                        >
                          View larger map
                        </a>
                      </div>
                    </div>

                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[23.1658199, 72.537114]} icon={redIcon}>
                      <Popup>
                        Shaarav Global Ventures
                      </Popup>
                    </Marker>
                    <ZoomControl position="bottomright" />
                  </MapContainer>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            className="bg-white border border-clove-200 rounded-[2.5rem] p-10 lg:p-12 shadow-sm"
          >
            <h3 className="font-display text-3xl font-bold text-clove-950 mb-8">Let's Connect</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-clove-950 uppercase tracking-wider">Your Name</label>
                  <input type="text" className="w-full bg-spice-50 border border-clove-100 rounded-xl px-5 py-3 focus:outline-none focus:border-copper-500 transition-colors" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-clove-950 uppercase tracking-wider">Your Email</label>
                  <input type="email" className="w-full bg-spice-50 border border-clove-100 rounded-xl px-5 py-3 focus:outline-none focus:border-copper-500 transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-clove-950 uppercase tracking-wider">Subject</label>
                <input type="text" className="w-full bg-spice-50 border border-clove-100 rounded-xl px-5 py-3 focus:outline-none focus:border-copper-500 transition-colors" placeholder="Inquiry about whole spices" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-clove-950 uppercase tracking-wider">Your Message</label>
                <textarea rows="5" className="w-full bg-spice-50 border border-clove-100 rounded-xl px-5 py-3 focus:outline-none focus:border-copper-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="group w-full relative overflow-hidden bg-clove-950 text-spice-50 py-4.5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:bg-clove-900 hover:shadow-[0_20px_50px_-12px_rgba(45,26,21,0.3)] active:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="tracking-wide">Send Message</span>
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default ContactPage
