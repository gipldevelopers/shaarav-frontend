import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  Globe, 
  Package, 
  ShieldCheck, 
  Truck, 
  Users, 
  Briefcase, 
  Award,
  ArrowRight,
  Star
} from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const navigation = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Products', sectionId: 'products' },
]

const stats = [
  { icon: Briefcase, value: '50+', label: 'Products' },
  { icon: Users, value: '120+', label: 'Happy Customers' },
  { icon: Award, value: '3+', label: 'Years Experience' },
  { icon: Package, value: '1000+', label: 'Products Delivered' },
]

const services = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    desc: 'Connecting you with the best manufacturers and suppliers worldwide for premium quality.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Rigorous multi-step quality control ensuring every product meets international standards.'
  },
  {
    icon: Truck,
    title: 'Logistics & Supply',
    desc: 'Seamless end-to-end supply chain management for timely and safe deliveries.'
  }
]

const products = [
  { name: 'Premium Spices', image: '/images/whole-spices.svg', action: 'View Details' },
  { name: 'Organic Tea Leaves', image: '/images/tea-coffee.svg', action: 'View Details' },
  { name: 'Ground Spices', image: '/images/powder-spices.svg', action: 'View Details' },
  { name: 'Specialty Coffee', image: '/images/tea-coffee.svg', action: 'View Details' },
]

const whyUsPoints = [
  { icon: Award, title: 'Top Quality', text: 'Uncompromised excellence in every shipment.' },
  { icon: ShieldCheck, title: 'Reliability', text: 'Trusted by over 120 global businesses.' },
  { icon: Truck, title: 'Fast Delivery', text: 'Optimized logistics for quick turnaround.' },
  { icon: Users, title: '24/7 Support', text: 'Dedicated team ready to assist you anytime.' }
]

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Procurement Manager',
    feedback: 'Shaarav Global Ventures completely transformed our supply chain. The quality of spices we received was exceptional, and delivery was on time.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Global Foods',
    feedback: 'A reliable partner for our global sourcing needs. Their attention to quality and professional communication makes them stand out.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operations Director',
    feedback: 'We have been working with them for 3 years. The consistency in product quality and their commitment to timelines is unmatched.',
    rating: 4
  }
]

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

function HomePage() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    const offset = 80 // Navbar height
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100)
    }
  }, [])

  return (
    <div className="relative overflow-x-hidden text-clove-900">
      <Navbar navigation={navigation} onNavigate={scrollToSection} />

      <main>
        {/* 1. HERO SECTION */}
        <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* The global CSS already applies a gradient background to the body. We can just add subtle elements here. */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-300/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-copper-500/10 rounded-full blur-[100px]" />
            {/* Using a subtle grid pattern overlay for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(33,23,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(33,23,17,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={revealUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-clove-200 text-copper-700 text-sm font-semibold uppercase tracking-wider mb-6 shadow-sm backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse-slow" />
                Premium Global Exports
              </motion.div>
              
              <motion.h1 variants={revealUp} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-clove-950 mb-6">
                Bridging Markets with <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-500 to-copper-700">Exceptional Quality</span>
              </motion.h1>
              
              <motion.p variants={revealUp} className="text-lg sm:text-xl text-clove-700 mb-10 max-w-2xl leading-relaxed">
                We source, inspect, and deliver premium products worldwide. Partner with us for reliable supply chain solutions tailored to your business needs.
              </motion.p>
              
              <motion.div variants={revealUp} className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-8 py-4 bg-clove-950 text-spice-50 rounded-full font-semibold hover:bg-clove-900 transition-all shadow-lg hover:-translate-y-1"
                >
                  Get a Quote <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="px-8 py-4 bg-white/80 border border-clove-200 text-clove-950 rounded-full font-semibold hover:bg-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  Explore Products
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. STATS SECTION */}
        <section className="relative z-20 -mt-12 sm:-mt-16 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={revealUp}
                className="bg-white/80 border border-white rounded-2xl p-6 shadow-xl shadow-clove-900/5 backdrop-blur-md flex flex-col items-center text-center group hover:border-copper-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-spice-100 flex items-center justify-center text-copper-700 mb-4 group-hover:scale-110 group-hover:bg-copper-100 transition-all">
                  <stat.icon size={24} />
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-clove-950 mb-1">{stat.value}</h3>
                <p className="text-sm font-semibold text-clove-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. CATEGORIES / SERVICES */}
        <section id="services" className="py-24 lg:py-32 relative">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Services</h2>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-clove-950">Comprehensive Trade Solutions</h3>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  variants={revealUp}
                  className="bg-white/60 border border-white/80 rounded-[2rem] p-8 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-spice-100 flex items-center justify-center text-copper-700 mb-6 group-hover:bg-copper-500 group-hover:text-white transition-colors">
                    <service.icon size={28} />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-clove-950 mb-4">{service.title}</h4>
                  <p className="text-clove-700 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. FEATURED PRODUCTS */}
        <section id="products" className="py-24 bg-white/40 border-y border-clove-200/50 relative">
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-gold-300/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
          
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealUp}
                className="max-w-2xl"
              >
                <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">Featured Catalog</h2>
                <h3 className="font-display text-4xl sm:text-5xl font-bold text-clove-950">Most Loved Products</h3>
              </motion.div>
              <button className="hidden md:flex items-center gap-2 text-copper-700 hover:text-copper-800 font-bold transition-colors">
                View All Products <ArrowRight size={20} />
              </button>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {products.map((product, i) => (
                <motion.div 
                  key={i} 
                  variants={revealUp}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-white/80 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-spice-50 p-6 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <h4 className="font-display text-xl font-bold text-clove-950 mb-4">{product.name}</h4>
                    <button className="flex items-center gap-2 text-sm font-bold text-copper-700 hover:text-copper-800 transition-colors">
                      {product.action} <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. WHY CHOOSE US */}
        <section id="why-us" className="py-24 lg:py-32 relative">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealUp}
              >
                <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">The Differentiator</h2>
                <h3 className="font-display text-4xl sm:text-5xl font-bold text-clove-950 mb-6">Why Partner With Us?</h3>
                <p className="text-lg text-clove-700 mb-10 leading-relaxed">
                  We don't just supply products; we build long-term partnerships. Our commitment to excellence ensures that you receive the best value, consistently and reliably.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {whyUsPoints.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-clove-100 shadow-sm flex items-center justify-center text-copper-700">
                        <point.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-clove-950 font-bold mb-1">{point.title}</h4>
                        <p className="text-sm text-clove-700 font-medium">{point.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealUp}
                className="relative"
              >
                <div className="absolute inset-0 bg-gold-300/30 rounded-[2.5rem] blur-2xl transform rotate-3" />
                <img 
                  src="/images/spice-hero.svg" 
                  alt="Why Choose Us" 
                  className="relative rounded-[2.5rem] w-full h-[500px] object-cover border border-white/80 shadow-2xl bg-white p-2"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section id="testimonials" className="py-24 bg-white/40 border-y border-clove-200/50">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">Social Proof</h2>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-clove-950">Trusted by Leaders</h3>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div 
                  key={i} 
                  variants={revealUp}
                  className="bg-white border border-white/80 rounded-[2rem] p-8 relative shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex gap-1 text-gold-400 mb-6">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-clove-800 italic mb-8 leading-relaxed font-medium">"{testimonial.feedback}"</p>
                  <div>
                    <h5 className="font-bold text-clove-950">{testimonial.name}</h5>
                    <p className="text-sm font-semibold text-clove-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 7. CALL TO ACTION */}
        <section id="contact" className="py-24 lg:py-32">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              className="relative rounded-[3rem] overflow-hidden bg-clove-950 border border-clove-900 shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,93,57,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(193,148,58,0.2),transparent_40%)]" />
              <div className="relative z-10 px-6 py-16 sm:py-24 text-center">
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-spice-50 mb-6">Ready to Elevate Your Supply Chain?</h2>
                <p className="text-lg text-spice-200/80 mb-10 max-w-2xl mx-auto">
                  Get in touch with our team today to discuss your requirements and discover how we can help your business grow globally.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-4 bg-copper-500 text-white rounded-full font-bold hover:bg-copper-600 transition-all shadow-[0_0_20px_rgba(185,93,57,0.3)] hover:shadow-[0_0_30px_rgba(185,93,57,0.5)]">
                    Get a Quote Now
                  </button>
                  <button className="px-8 py-4 bg-white/10 border border-white/20 text-spice-50 rounded-full font-bold hover:bg-white/20 transition-all">
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer navigation={navigation} contactDetails={[]} onNavigate={scrollToSection} />
    </div>
  )
}

export default HomePage
