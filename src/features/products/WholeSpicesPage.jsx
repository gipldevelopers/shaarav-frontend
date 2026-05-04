import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const spices = [
  { 
    name: 'Black Pepper', 
    desc: 'King of spices, known for its intense aroma and heat.',
    image: 'https://cloud.gvoice.app/view.php?token=7fa996f0db6080dffe76b90ee4f454165cbdea289bed526ad76079ed2ab1eb3b'
  },
  { 
    name: 'Cumin Seeds', 
    desc: 'Essential for its earthy flavor and numerous health benefits.',
    image: 'https://cloud.gvoice.app/view.php?token=a0a44a65fa7184650f9ebd02cae47ed9d9c2193e17e89c70d156512a929e55e0'
  },
  { 
    name: 'Cardamom', 
    desc: 'The "Queen of Spices" with a unique, sweet-spicy aroma.',
    image: 'https://cloud.gvoice.app/view.php?token=567d8a3e661a2291794e5d0b04687552a99a8206032707a024593a4079d9b891'
  },
  { 
    name: 'Cloves', 
    desc: 'Intensely aromatic and flavorful flower buds.',
    image: 'https://cloud.gvoice.app/view.php?token=b7f1178a14a1a78680c568db7ec81367f0a7f4c81f2ddc4262f3c5b24ee5f86b'
  },
  { 
    name: 'Coriander Seeds', 
    desc: 'Sweet, citrusy flavor used globally in various cuisines.',
    image: 'https://cloud.gvoice.app/view.php?token=ebf0b07469b522819869a8c81e173185a1e2405f8588217d0066e315ff3cd4a1'
  },
  { 
    name: 'Cinnamon Sticks', 
    desc: 'Sweet and woody spice sourced from the inner bark.',
    image: 'https://cloud.gvoice.app/view.php?token=7a3d49aacc60ab8ea0f72a9356f7034e8edf0adc761ca447c0c0aac43ff4ddab'
  },
  { 
    name: 'Turmeric Fingers', 
    desc: 'Bright yellow spice with potent medicinal properties.',
    image: 'https://cloud.gvoice.app/view.php?token=0496b4a3ff00acf2e7014e0cb5a0ab587534c7bf33cd24582b891cee956c3d81'
  },
  { 
    name: 'Dried Red Chili', 
    desc: 'Adds fiery heat and vibrant color to any dish.',
    image: 'https://cloud.gvoice.app/view.php?token=b851cbb6981b38c07b40d3a7ca3f6569ddc550c432d3d030316dfdce9678b173'
  }
]

function WholeSpicesPage() {
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
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-clove-950 mb-6">Whole Spices</h1>
          <p className="text-lg text-clove-700 leading-relaxed">
            Our whole spices are sourced directly from the best growing regions in India, ensuring maximum freshness, potency, and authentic flavor.
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
             src="https://cloud.gvoice.app/view.php?token=416052e2685ecaaf395cbf5579805966d393ab789f448356c9d43590c6d06dcf" 
             alt="Whole Spices Showcase" 
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
             We ensure that every batch of whole spices undergoes rigorous quality checks to meet international export standards. Pure, potent, and professional.
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

export default WholeSpicesPage
