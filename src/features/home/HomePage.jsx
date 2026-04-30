import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Globe, 
  ShieldCheck, 
  Truck, 
  Users, 
  Briefcase, 
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star
} from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '50+', label: 'Products' },
  { icon: Users, value: '120+', label: 'Global Partners' },
  { icon: Award, value: '3+', label: 'Years Experience' },
  { icon: Globe, value: '15+', label: 'Countries Reached' },
]

const services = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    desc: 'Connecting international markets with premium quality manufacturers and suppliers.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Rigorous multi-step quality control ensuring every export meets international standards.'
  },
  {
    icon: Truck,
    title: 'Export Operations',
    desc: 'Seamless wholesale shipping and supply chain management for international trade.'
  }
]

const products = [
  { name: 'Premium Spices', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1000&auto=format&fit=crop', action: 'Explore Range', link: '/products/whole-spices' },
  { name: 'Organic Tea Leaves', image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/GT/BY/GV/68383497/organic-green-tea-leaves-500x500-jpg-500x500.jpg?q=80&w=1000&auto=format&fit=crop', action: 'Explore Range', link: '/our-product' },
  { name: 'Ground Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop', action: 'Explore Range', link: '/our-product' },
  { name: 'Specialty Coffee', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop', action: 'Explore Range', link: '/our-product' },
]

const whyUsPoints = [
  { icon: Award, title: 'Top Quality', text: 'Uncompromised excellence in every wholesale shipment.' },
  { icon: ShieldCheck, title: 'Reliability', text: 'Trusted by over 120 international businesses.' },
  { icon: Globe, title: 'Global Network', text: 'Optimized export logistics across multiple continents.' },
  { icon: Users, title: 'Dedicated Support', text: 'Professional team ready to assist your sourcing needs.' }
]

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Procurement Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    feedback: 'Shaarav Global Ventures completely transformed our supply chain. The quality of spices we received was exceptional, and delivery was on time.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Global Foods',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    feedback: 'A reliable partner for our global sourcing needs. Their attention to quality and professional communication makes them stand out.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    feedback: 'We have been working with them for 3 years. The consistency in product quality and their commitment to timelines is unmatched.',
    rating: 4
  },
  {
    name: 'David Thompson',
    role: 'Supply Chain Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    feedback: 'Their global network and logistics expertise have been invaluable. The transparency in their export operations is exactly what we needed.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Import Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    feedback: 'Authentic Indian flavors delivered with professional standards. Shaarav is our top choice for premium whole and ground spices.',
    rating: 5
  }
]

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const Counter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  // Extract number and suffix (like '+' or 'k')
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      })
      return () => controls.stop()
    }
  }, [isInView, numericValue])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative overflow-x-hidden text-clove-900">
      <main>
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-300/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-copper-500/10 rounded-full blur-[100px]" />
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
                <Link 
                  to="/contact-us"
                  className="flex items-center gap-2 px-8 py-4 bg-clove-950 text-spice-50 rounded-full font-semibold hover:bg-clove-900 transition-all shadow-lg hover:-translate-y-1"
                >
                  Get a Quote <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/our-product"
                  className="px-8 py-4 bg-white/80 border border-clove-200 text-clove-950 rounded-full font-semibold hover:bg-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  Explore Products
                </Link>
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
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-clove-950 mb-1">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-sm font-semibold text-clove-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. CATEGORIES / SERVICES */}
        <section className="py-24 lg:py-32 relative">
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
                  className="bg-white/60 border border-white rounded-[2rem] p-8 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 hover:-translate-y-2 group"
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
        <section className="py-24 bg-white/40 border-y border-clove-200/50 relative">
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
              <Link to="/our-product" className="hidden md:flex items-center gap-2 text-copper-700 hover:text-copper-800 font-bold transition-colors">
                View All Products <ArrowRight size={20} />
              </Link>
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <h4 className="font-display text-xl font-bold text-clove-950 mb-4">{product.name}</h4>
                    <Link to={product.link} className="flex items-center gap-2 text-sm font-bold text-copper-700 hover:text-copper-800 transition-colors">
                      {product.action} <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. WHY CHOOSE US */}
        <section className="py-24 lg:py-32 relative">
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
                  src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1000&auto=format&fit=crop" 
                  alt="Why Choose Us" 
                  className="relative rounded-[2.5rem] w-full h-[500px] object-cover border border-white/80 shadow-2xl bg-white p-2"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9EDDB' }}>
          <div className="mx-auto w-full max-w-7xl px-4 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              className="text-center mb-10"
            >
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-clove-950 mb-4">Trusted by Businesses Worldwide</h2>
              <p className="text-clove-600 max-w-2xl mx-auto text-lg">
                See how global clients rely on our premium spices, tea, and coffee for consistent quality, authentic flavor, and dependable export service.
              </p>
            </motion.div>

            <motion.div 
              className="flex justify-center items-end min-h-[450px] relative gap-4 md:gap-8 mb-12 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                const threshold = 50;
                if (swipe < -threshold) {
                  nextTestimonial();
                } else if (swipe > threshold) {
                  prevTestimonial();
                }
              }}
            >
              {[-1, 0, 1].map((offset) => {
                const index = (activeIndex + offset + testimonials.length) % testimonials.length;
                const testimonial = testimonials[index];
                const isCenter = offset === 0;

                return (
                  <motion.div
                    key={index}
                    layout
                    initial={false}
                    animate={{
                      scale: isCenter ? 1.1 : 0.9,
                      y: isCenter ? -60 : 0,
                      opacity: isCenter ? 1 : 0.6,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      opacity: { duration: 0.3 }
                    }}
                    className={`flex-shrink-0 w-[280px] md:w-[320px] bg-white shadow-2xl rounded-3xl p-8 pt-12 text-center relative transition-colors ${isCenter ? 'border-t-4 border-copper-500' : ''}`}
                  >
                    {/* Floating Avatar */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <motion.div 
                        animate={{ scale: isCenter ? 1 : 0.9 }}
                        className="w-24 h-24 rounded-full border-[6px] border-[#F9EDDB] overflow-hidden shadow-xl bg-spice-100 flex items-center justify-center"
                      >
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<span class="text-copper-700 font-bold text-2xl">${getInitials(testimonial.name)}</span>`;
                            }}
                          />
                        ) : (
                          <span className="text-copper-700 font-bold text-2xl">
                            {getInitials(testimonial.name)}
                          </span>
                        )}
                      </motion.div>
                    </div>

                    <div className="pt-4">
                      <h5 className="font-display text-xl font-bold text-clove-950 mb-1">{testimonial.name}</h5>
                      <p className="text-copper-600 text-xs font-bold uppercase tracking-wider mb-4">{testimonial.role}</p>
                    </div>
                    
                    <p className="text-clove-700 text-sm leading-relaxed italic mb-6">
                      "{testimonial.feedback}"
                    </p>

                    <div className="flex justify-center gap-1 text-gold-500 mt-auto">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "text-gold-500" : "text-clove-200"} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute top-[60%] left-0 right-0 z-30 flex justify-between pointer-events-none px-4 md:px-8">
              <button 
                onClick={prevTestimonial}
                className="group p-4 rounded-full bg-white shadow-2xl text-clove-400 hover:text-copper-600 hover:scale-110 transition-all duration-300 active:scale-95 pointer-events-auto"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="group p-4 rounded-full bg-white shadow-2xl text-clove-400 hover:text-copper-600 hover:scale-110 transition-all duration-300 active:scale-95 pointer-events-auto"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Dots for tracking */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-copper-500' : 'w-2 bg-clove-200'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 7. CALL TO ACTION */}
        <section className="py-24 lg:py-32">
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
                  <Link to="/contact-us" className="px-8 py-4 bg-copper-500 text-white rounded-full font-bold hover:bg-copper-600 transition-all shadow-[0_0_20px_rgba(185,93,57,0.3)] hover:shadow-[0_0_30px_rgba(185,93,57,0.5)]">
                    Get a Quote Now
                  </Link>
                  <Link to="/contact-us" className="px-8 py-4 bg-white/10 border border-white/20 text-spice-50 rounded-full font-bold hover:bg-white/20 transition-all">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
