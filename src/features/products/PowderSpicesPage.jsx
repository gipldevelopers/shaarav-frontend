import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const spices = [
  { 
    name: 'Turmeric Powder', 
    desc: 'Finely ground, vibrant yellow spice known for its medicinal properties and earthy flavor.',
    image: 'https://cloud.gvoice.app/view.php?token=8a9dfb526fdf5335a17529874453eafc8c579d17d8a674c1dd237329da14c76d'
  },
  { 
    name: 'Red Chilli Powder', 
    desc: 'Expertly ground dried red chillies, adding heat and vibrant color to culinary creations.',
    image: 'https://cloud.gvoice.app/view.php?token=6af2d63da1383cc35945e54214ef71234cfdd0d5c070e45b57124023bf588eac'
  },
  { 
    name: 'Cinnamon Powder', 
    desc: 'Aromatic and sweet ground cinnamon, perfect for both savory and sweet dishes.',
    image: 'https://cloud.gvoice.app/view.php?token=167eaff9e0a78a11010dc32f651aca7179ef7dc79dc34cc2861e3d1e94f220c8'
  },
  { 
    name: 'Black Pepper Powder', 
    desc: 'Freshly ground black peppercorns, offering a sharp, spicy bite and rich aroma.',
    image: 'https://cloud.gvoice.app/view.php?token=35a9e7baa095189623f2ffe4a9104b012d3bc2657a4afa2a3ad20789367e60e7'
  },
  { 
    name: 'Coriander Powder', 
    desc: 'Milled coriander seeds with a citrusy, nutty flavor, essential for Indian spice blends.',
    image: 'https://cloud.gvoice.app/view.php?token=897150ec8439ddf5380ce1b5984c481e521e77a328332559e06e48d49ee3764f'
  },
  { 
    name: 'Cumin Powder', 
    desc: 'Ground roasted cumin seeds, providing a deep, smoky flavor and warm aroma.',
    image: 'https://cloud.gvoice.app/view.php?token=a5a2d9b36ccd4427b57c9b322de1228491d7835bb916dab7ef41180ce0c196e0'
  },
  { 
    name: 'Ginger Powder', 
    desc: 'Finely milled dried ginger root, offering a sharp, zesty kick and digestive benefits.',
    image: 'https://cloud.gvoice.app/view.php?token=749f6f4956667a6702c6953e1e2585346ca73cb3b7c57c9af04de17d186cee1e'
  },
  { 
    name: 'Asafoetida (Hing)', 
    desc: 'Pure, potent asafoetida powder, known for its unique savory aroma and digestive properties.',
    image: 'https://cloud.gvoice.app/view.php?token=93ab24855759b2a6e40a4d4c8a3c9388b8d4a50428f041b5b7b316c5cef786e0'
  }
]

function PowderSpicesPage() {
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
          <h2 className="text-copper-700 font-bold tracking-[0.2em] uppercase text-xs mb-3">Premium Export</h2>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-clove-950 mb-6">Powder Spices</h1>
          <p className="text-lg text-clove-700 leading-relaxed">
            Our powdered spices are expertly ground to deliver bold flavor, vibrant color, and a rich aroma—bringing the authentic taste of Indian heritage to kitchens worldwide.
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealUp}
          className="relative mb-24 rounded-[3rem] overflow-hidden aspect-[21/9]"
        >
           <img 
             src="https://cloud.gvoice.app/view.php?token=e1e92559dd816bdf6f79f86a9c9f0ebd024c526ef6c7bcec51e09dd7b43e95da" 
             alt="Powder Spices Showcase" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-clove-950/40 to-transparent" />
        </motion.div>

        {/* List Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {spices.map((spice, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              className="bg-white border border-white rounded-[2rem] overflow-hidden hover:shadow-xl transition-all group shadow-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={spice.image} 
                  alt={spice.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-copper-600 shrink-0" size={18} />
                  <h3 className="font-display text-xl font-bold text-clove-950">{spice.name}</h3>
                </div>
                <p className="text-clove-700 text-sm leading-relaxed">{spice.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Commitment */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealUp}
          className="bg-spice-100 rounded-[3rem] p-12 lg:p-20 flex flex-col items-center text-center"
        >
           <h2 className="font-display text-3xl sm:text-4xl font-bold text-clove-950 mb-6">Rooted in India, Reaching the World.</h2>
           <p className="text-clove-700 text-lg mb-10 max-w-2xl leading-relaxed">
             Each batch of our powdered spices is expertly refined and quality-tested to ensure rich aroma, vibrant color, and flawless consistency—designed to elevate every dish with a modern, premium touch.
           </p>
           <a 
             href="/contact-us"
             className="inline-block px-10 py-4 bg-clove-950 text-spice-50 rounded-full font-bold hover:bg-clove-900 transition-all shadow-lg"
           >
             Inquire Now
           </a>
        </motion.div>

      </div>
    </div>
  )
}

export default PowderSpicesPage
