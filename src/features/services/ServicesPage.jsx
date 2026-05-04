import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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

const categories = [
  {
    id: '01',
    title: 'Whole Spices',
    desc: 'Pure, unprocessed seeds and pods sourced from Indias finest farms, preserving natural oils and aroma.',
    image: 'https://cloud.gvoice.app/view.php?token=416052e2685ecaaf395cbf5579805966d393ab789f448356c9d43590c6d06dcf',
    link: '/products/whole-spices'
  },
  {
    id: '02',
    title: 'Powder Spices',
    desc: 'Expertly ground spices with vibrant colors and intense flavors, processed under strict hygienic conditions.',
    image: 'https://cloud.gvoice.app/view.php?token=e1e92559dd816bdf6f79f86a9c9f0ebd024c526ef6c7bcec51e09dd7b43e95da',
    link: '/products/powder-spices'
  },
  {
    id: '03',
    title: 'Tea & Coffee',
    desc: 'Premium beverage selections from the best plantations, offering a refreshing and authentic taste experience.',
    image: 'https://cloud.gvoice.app/view.php?token=bbd833862581188debe1e111d1111539db9c7635fdd6177643c214fbbd34b376',
    link: '/products/tea-coffee'
  }
]

function ServicesPage() {
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
          <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Offerings</h2>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-clove-950 mb-6">Our Product Range</h1>
          <p className="text-lg text-clove-700 leading-relaxed">
            Discover our carefully curated selection of premium Indian spices and beverages, sourced with integrity and exported with care.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-10 md:grid-cols-3"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              variants={revealUp}
              className="bg-white/60 border border-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] bg-spice-50 p-6 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-3xl" 
                />
              </div>
              <div className="p-8">
                <span className="text-copper-500 font-bold text-sm mb-2 block">{cat.id}</span>
                <h3 className="font-display text-3xl font-bold text-clove-950 mb-4">{cat.title}</h3>
                <p className="text-clove-700 leading-relaxed mb-8">{cat.desc}</p>
                <Link 
                  to={cat.link}
                  className="inline-flex items-center gap-2 text-copper-700 font-bold hover:text-copper-800 transition-colors"
                >
                  Explore Category <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Reach Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealUp}
          className="mt-24 bg-clove-950 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(185,93,57,0.25),transparent_40%)]" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="font-display text-4xl sm:text-5xl font-bold text-spice-50 mb-8">Rooted in India, Reaching the World.</h2>
             <p className="text-spice-200/80 text-lg mb-10 leading-relaxed">
               We take pride in sharing the authentic flavors of India with the global market. Our export operations are designed for efficiency and transparency.
             </p>
             <Link 
               to="/contact-us"
               className="inline-block px-10 py-4 bg-copper-500 text-white rounded-full font-bold hover:bg-copper-600 transition-all shadow-lg"
             >
               Get in Touch
             </Link>
           </div>
        </motion.div>

      </div>
    </div>
  )
}

export default ServicesPage
