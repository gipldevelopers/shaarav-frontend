import { motion } from 'framer-motion'
import { Target, Eye, CheckCircle2 } from 'lucide-react'

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

function AboutUsPage() {
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
          <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">Who We Are</h2>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-clove-950 mb-6">About Shaarav Global Ventures</h1>
          <p className="text-lg text-clove-700 leading-relaxed">
            Founded with a vision to bring India’s rich legacy of spices to every corner of the globe, we specialize in the export of premium whole and powdered spices.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            className="space-y-6 text-clove-800 leading-relaxed"
          >
            <p>
              At Shaarav Global Venture, we believe that quality spices are the soul of every kitchen. With a strong commitment to purity, freshness, and authenticity, we source directly from trusted farmers and processing units to ensure that only the finest products reach our clients.
            </p>
            <p>
              From the earthy aroma of cumin to the fiery richness of red chili powder, our range reflects the true essence of Indian flavor. We proudly serve customers across the country and internationally, delivering consistent quality, timely shipments, and transparent business practices.
            </p>
            <p>
              Whether it’s Cinnamomum, turmeric, cumin, coriander, black pepper, red chili, or customized spice blends, our products meet international quality standards and are tailored to suit the unique preferences of clients worldwide — including wholesalers, food manufacturers, retailers, and distributors.
            </p>
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
               src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" 
               alt="Our Story" 
               className="relative rounded-[2.5rem] w-full h-[400px] object-cover border border-white/80 shadow-2xl bg-white p-2"
             />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/60 border border-white rounded-[2rem] p-10 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-spice-100 flex items-center justify-center text-copper-700 mb-6">
              <Target size={28} />
            </div>
            <h3 className="font-display text-3xl font-bold text-clove-950 mb-4">Our Mission</h3>
            <p className="text-clove-700 leading-relaxed">
              To deliver the authentic taste of India to kitchens across the globe by exporting high-quality whole and powdered spices. We are committed to maintaining the highest standards of purity, freshness, and ethical sourcing.
            </p>
          </motion.div>

          <motion.div 
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/60 border border-white rounded-[2rem] p-10 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-spice-100 flex items-center justify-center text-copper-700 mb-6">
              <Eye size={28} />
            </div>
            <h3 className="font-display text-3xl font-bold text-clove-950 mb-4">Our Vision</h3>
            <p className="text-clove-700 leading-relaxed">
              To become a globally recognized leader in the spice export industry, known for trust, excellence, and innovation. We aim to make Shaarav Global Venture a symbol of India’s rich culinary heritage.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-clove-950 rounded-[3rem] p-12 lg:p-16 text-spice-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,93,57,0.25),transparent_40%)]" />
          <div className="relative z-10 text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Why Choose Us?</h2>
          </div>
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Extensive variety of authentic Indian spices",
              "Rigorous quality control and hygienic packaging",
              "Ethical sourcing and environmentally conscious practices",
              "Reliable logistics and global reach"
            ].map((item, i) => (
              <motion.div key={i} variants={revealUp} className="flex flex-col items-center text-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold-300">
                  <CheckCircle2 size={24} />
                </div>
                <p className="font-semibold text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default AboutUsPage
