import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const spices = [
  { 
    name: 'Assam Black Tea', 
    desc: 'Bold, malty, and full-bodied tea sourced directly from the finest estates.',
    image: 'https://cloud.gvoice.app/view.php?token=da0b7f22d5f25fca29aaaefec6a96f8449c2e8a8706f957e048e666d206b093c'
  },
  { 
    name: 'Darjeeling Tea', 
    desc: 'The "Champagne of Teas" with a delicate aroma and floral notes.',
    image: 'https://cloud.gvoice.app/view.php?token=4fdadc1db9b6297d70e1b6a315f853f6438bbd6eb399547d8d1571462b341cf2'
  },
  { 
    name: 'Green Tea', 
    desc: 'Rich in antioxidants, offering a smooth and refreshing experience.',
    image: 'https://cloud.gvoice.app/view.php?token=164e095ae8970c12bf500de85d7bf338a0bfde3db4a15730fe16485c70f6a25e'
  },
  { 
    name: 'Masala Chai Blend', 
    desc: 'A robust blend of premium tea leaves and aromatic Indian spices.',
    image: 'https://cloud.gvoice.app/view.php?token=f64879e176ce7688e2c522fe74416f062c37aeb0902831162b13e4489fe4d063'
  },
  { 
    name: 'Arabica Coffee Beans', 
    desc: 'Smooth, sweet, and complex flavors with low acidity and bitterness.',
    image: 'https://cloud.gvoice.app/view.php?token=e3bedb40995958f7f7add5923c2c0ffbdc9c90e12a1f804459c0aa4defbc8940'
  },
  { 
    name: 'Robusta Coffee Beans', 
    desc: 'Strong, full-bodied espresso beans with a deep, rich crema.',
    image: 'https://cloud.gvoice.app/view.php?token=8a4767bf6a399b47cbc4b9de00002d267dfe2ecc0e02fa85119bf6f27e278f7a'
  },
  { 
    name: 'Filter Coffee Powder', 
    desc: 'Traditional South Indian blend of roasted coffee and chicory.',
    image: 'https://cloud.gvoice.app/view.php?token=7afcd84b2f03b5df76984eaddcacd3ce1f7e07666f79693a1dae8ca0ccfedc03'
  },
  { 
    name: 'Instant Coffee', 
    desc: 'Premium freeze-dried coffee for a quick, aromatic cup anywhere.',
    image: 'https://cloud.gvoice.app/view.php?token=26c655723da06d3103fce8c7285b984656bdae7f69cfbf79f524a31ed7e9e3a5'
  }
]

function TeaCoffeePage() {
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
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-clove-950 mb-6">Tea & Coffee</h1>
          <p className="text-lg text-clove-700 leading-relaxed">
            Our tea and coffee are sourced from the finest plantations in India, ensuring rich aroma, freshness, and authentic taste in every cup.
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
             src="https://cloud.gvoice.app/view.php?token=bbd833862581188debe1e111d1111539db9c7635fdd6177643c214fbbd34b376" 
             alt="Tea & Coffee Showcase" 
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
             Tea and coffee share a timeless connection—both crafted from carefully sourced leaves and beans, bringing people together through rich aroma, warmth, and moments of everyday comfort.
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

export default TeaCoffeePage
