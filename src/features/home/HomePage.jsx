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
  Star,
  Sparkles,
  Ship,
  BarChart3,
  ArrowUpRight
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
    title: 'Direct Farm Sourcing',
    desc: 'We source directly from trusted farmers to bring India’s rich legacy of spices to the globe with uncompromised purity and freshness.',
    tags: ['Authentic Spices', 'Pure Sourcing'],
    stat: 'Direct from Farms'
  },
  {
    icon: Award,
    title: 'Processing Excellence',
    desc: 'Every product is hygienically processed and meticulously packed to preserve natural aroma, flavor, and international quality standards.',
    tags: ['Standardized', 'Hygienic'],
    stat: 'Premium Grade'
  },
  {
    icon: Truck,
    title: 'Global Trade Network',
    desc: 'A robust supply chain ensuring reliable deliveries, competitive pricing, and seamless business experiences for partners worldwide.',
    tags: ['Timely Shipment', 'Transparent'],
    stat: '15+ Countries'
  }
]

const products = [
  { name: 'Premium Spices', image: 'https://cloud.gvoice.app/view.php?token=e294236a375c2e4e5a49c94c0cf34539bb8cc3880ec6784c4e51e93358615508', action: 'Explore Range', link: '/products/whole-spices' },
  { name: 'Organic Tea Leaves', image: 'https://cloud.gvoice.app/view.php?token=5e497cefcfda84f8da934f2c7bf43b3977f905755ca9c398e5da1ed32c8a0f52', action: 'Explore Range', link: '/products/tea-coffee' },
  { name: 'Ground Spices', image: 'https://cloud.gvoice.app/view.php?token=275ee9460492b1aed8553595a2a6cd689470b3536e56aead9ae222410ea39c1b', action: 'Explore Range', link: '/products/powder-spices' },
  { name: 'Specialty Coffee', image: 'https://cloud.gvoice.app/view.php?token=94af85835b45b7fee5db83d527185cd742f7b9c22146f256208f8071d54147f2', action: 'Explore Range', link: '/products/tea-coffee' },
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
    image: 'https://cloud.gvoice.app/view.php?token=17d0b5a4b4ab3da16f3fd7d01128de8ddf6efe590903e67f03dea317648d2a2a',
    feedback: 'Shaarav Global Ventures completely transformed our supply chain. The quality of spices we received was exceptional, and delivery was on time.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Global Foods',
    image: 'https://cloud.gvoice.app/view.php?token=4e6e471f6f20808fbe536002957895f4411ecc6183e29e2298e3959c12cb1eca',
    feedback: 'A reliable partner for our global sourcing needs. Their attention to quality and professional communication makes them stand out.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operations Director',
    image: 'https://cloud.gvoice.app/view.php?token=46c8fc7a934eb73dfa65c7e0064f9f2a7962bbf73098386ec51e2038fe114c8b',
    feedback: 'We have been working with them for 3 years. The consistency in product quality and their commitment to timelines is unmatched.',
    rating: 4
  },
  {
    name: 'David Thompson',
    role: 'Supply Chain Lead',
    image: 'https://cloud.gvoice.app/view.php?token=228056cb957c8fe21e6a2565eaffb538a9ad75f0bd36efd3c18fc848fc301920',
    feedback: 'Their global network and logistics expertise have been invaluable. The transparency in their export operations is exactly what we needed.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Import Specialist',
    image: 'https://cloud.gvoice.app/view.php?token=395f1e14e8d0baaeaf829a49d0ad4e38881c8d91e4ef0d6a74de68bdc7da34a4',
    feedback: 'Authentic Indian flavors delivered with professional standards. Shaarav is our top choice for premium whole and ground spices.',
    rating: 5
  }
]

const revealUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.45, 0.27, 0.96] }
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
        duration: 0.9,
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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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
        <section className="relative min-h-[90vh] flex items-center pt-12">
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
        <section className="relative z-20 -mt-12 sm:-mt-8 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={revealUp}
                className="relative bg-white/70 border border-white/50 rounded-[3rem_1rem] p-5 sm:p-6 shadow-2xl shadow-clove-900/5 backdrop-blur-xl flex flex-col items-center text-center group hover:border-copper-300/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Decorative Side Accent */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-12 bg-gradient-to-b from-copper-500 to-transparent rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative mb-6">
                  {/* Diamond-shaped icon container */}
                  <div className="w-14 h-14 rounded-2xl rotate-45 bg-spice-100/50 flex items-center justify-center text-copper-700 group-hover:bg-copper-50 transition-all duration-500 shadow-sm border border-transparent group-hover:border-copper-200">
                    <div className="-rotate-45">
                      <stat.icon size={26} />
                    </div>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl rotate-45 bg-copper-400/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display text-4xl sm:text-5xl font-medium text-clove-950 mb-2">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-xs font-medium text-clove-500 uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. CATEGORIES / SERVICES */}
        <section className="py-18 lg:py-22 relative overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header - Enhanced */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealUp}
              className="text-center max-w-3xl mx-auto mb-20"
            >

              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-clove-950 mb-6 leading-tight">
                Comprehensive Trade Solutions
              </h3>

              <p className="text-clove-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Streamlined global trade management powered by cutting-edge technology and decades of industry expertise.
              </p>
            </motion.div>

            {/* Services Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 lg:gap-10"
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={revealUp}
                  whileHover={{ y: -8 }}
                  className="group relative h-full"
                >
                  {/* Animated Border Gradient */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-copper-200/0 via-copper-400/50 to-copper-200/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  <div className="relative bg-white/70 backdrop-blur-sm border border-white/40 rounded-3xl p-7 pb-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col">
                    {/* Card Accent Line */}
                    <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-copper-400/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon Container - Enhanced */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-spice-100 to-copper-100 flex items-center justify-center text-copper-700 group-hover:from-amber-500 group-hover:to-amber-700 group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-amber-500/20">
                        <service.icon size={30} strokeWidth={1.7} />
                      </div>

                      {/* Status Badge */}
                      <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-0.5 text-[11px] font-semibold text-copper-700 shadow-sm border border-copper-100">
                        {service.stat}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-display text-2xl font-bold text-clove-950 mb-4 tracking-tight group-hover:text-copper-700 transition-colors">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-clove-600 leading-relaxed mb-6 flex-grow">
                      {service.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
                  <div className="aspect-[4/3] bg-spice-50 p-6 overflow-hidden rounded-3xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
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
                  src="https://cloud.gvoice.app/view.php?token=9f6a25c924b7010d48e101ba9746962b71200c9bcdb91da7f769d6a1a19178eb"
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
              className="flex justify-center items-end min-h-[450px] relative gap-4 md:gap-8 mb-12"
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
