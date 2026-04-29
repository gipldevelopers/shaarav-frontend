import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

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
               <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-clove-200">
                  <iframe 
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.873523588147!2d72.5401943!3d23.1023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8346452f3607%3A0xc3924f7f6f9661!2sWaterlily%20-%20Adani%20Shantigram!5e0!3m2!1sen!2sin!4v1714392000000!5m2!1sen!2sin" 
                    className="w-full h-full grayscale opacity-70"
                    allowFullScreen="" 
                    loading="lazy"
                  ></iframe>
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
              <button className="w-full flex items-center justify-center gap-2 bg-clove-950 text-spice-50 py-4 rounded-xl font-bold hover:bg-clove-900 transition-all shadow-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default ContactPage
