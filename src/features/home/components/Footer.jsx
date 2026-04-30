import { MapPin, Phone, Mail, ShieldCheck, Globe, Truck, Leaf, ArrowRight } from 'lucide-react'

import { Link } from 'react-router-dom'

function Footer({ navigation }) {

  return (
    <footer className="border-t border-clove-200/70 bg-white pt-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="mb-12 bg-spice-50/30 border border-spice-100 rounded-2xl p-4 md:px-8 md:py-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-copper-700 text-white shrink-0 shadow-md shadow-copper-700/10">
              <Mail size={20} />
            </div>
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-clove-950 text-lg">Stay Fresh with Every Update</h3>
              <p className="text-[13px] text-clove-600 mt-0.5 max-w-md leading-snug">
                Get the latest on premium whole spices, finely ground powders, and rich tea & coffee—plus exclusive offers and market insights.
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-8 bg-spice-200/60" />
          
          <div className="w-full lg:w-auto flex-1 max-w-lg">
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full h-11 pl-5 pr-32 rounded-full border border-spice-200 bg-white text-clove-950 text-sm placeholder:text-clove-400 focus:outline-none focus:ring-2 focus:ring-copper-500/20 focus:border-copper-500 transition-all shadow-sm"
              />
              <button className="absolute right-1.25 h-8.5 px-4 rounded-full bg-copper-700 text-white font-bold text-[12px] flex items-center gap-1.5 hover:bg-copper-800 transition-colors shadow-sm">
                <span>Subscribe</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

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
            <div className="flex gap-4 text-clove-700 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-copper-700 transition-colors">FB</a>
              <a href="#" className="hover:text-copper-700 transition-colors">TW</a>
              <a href="#" className="hover:text-copper-700 transition-colors">IG</a>
              <a href="#" className="hover:text-copper-700 transition-colors">IN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-clove-950 mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-clove-700 font-bold">
              {navigation.filter(item => !item.hidden).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-copper-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-bold text-clove-950 mb-6 uppercase tracking-wider">Our Products</h3>
            <ul className="flex flex-col gap-3 text-sm text-clove-700 font-bold">
              <li><Link to="/products/whole-spices" className="hover:text-copper-700 transition-colors">Whole Spices</Link></li>
              <li><Link to="/products/powder-spices" className="hover:text-copper-700 transition-colors">Powder Spices</Link></li>
              <li><Link to="/products/Tea-Coffee" className="hover:text-copper-700 transition-colors">Tea & Coffee</Link></li>
              <li><Link to="#" className="hover:text-copper-700 transition-colors pointer-events-none opacity-50">Custom Blends</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold text-clove-950 mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-clove-700 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-copper-700" />
                <span className="leading-relaxed">B7-1601, Waterlily, Adani Shantigram, Nr Vaishnodevi circle, Ahmedabad-382421</span>
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
      </div>

      {/* Bottom Section */}
      <div className="mt-12 bg-clove-950 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,93,57,0.1),transparent_50%)]" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Feature Highlights */}
          <div className="relative z-10 hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-2 py-4">
            {[
              { icon: <ShieldCheck size={18} />, title: "Quality Assured", subtitle: "International Standards" },
              { icon: <Globe size={18} />, title: "Global Presence", subtitle: "Trusted Worldwide" },
              { icon: <Truck size={18} />, title: "Reliable Delivery", subtitle: "On-time Every Time" },
              { icon: <Leaf size={18} />, title: "Sustainable Sourcing", subtitle: "For a Better Tomorrow" }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 px-8 ${idx !== 3 ? 'lg:border-r border-white/10' : ''}`}>
                <div 
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white/5"
                  style={{ color: '#E09F64', borderColor: 'rgba(224, 159, 100, 0.3)' }}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-spice-50 font-bold text-sm tracking-wide">{item.title}</span>
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider with Copper Accent */}
          <div className="relative h-px w-full bg-white/10 hidden md:block" />
          {/* Copyright & Links */}
          <div className="relative z-10 py-3 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-[11px] font-bold text-white/50 tracking-wide uppercase">
              <span>© {new Date().getFullYear()} Shaarav Global Ventures. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-8 text-[11px] font-bold text-white/50 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
              <span className="text-white/10 font-normal">|</span>
              <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer