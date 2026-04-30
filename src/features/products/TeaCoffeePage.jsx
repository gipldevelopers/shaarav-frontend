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
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Darjeeling Tea', 
    desc: 'The "Champagne of Teas" with a delicate aroma and floral notes.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Green Tea', 
    desc: 'Rich in antioxidants, offering a smooth and refreshing experience.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Masala Chai Blend', 
    desc: 'A robust blend of premium tea leaves and aromatic Indian spices.',
    image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Arabica Coffee Beans', 
    desc: 'Smooth, sweet, and complex flavors with low acidity and bitterness.',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Robusta Coffee Beans', 
    desc: 'Strong, full-bodied espresso beans with a deep, rich crema.',
    image: 'https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Filter Coffee Powder', 
    desc: 'Traditional South Indian blend of roasted coffee and chicory.',
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Instant Coffee', 
    desc: 'Premium freeze-dried coffee for a quick, aromatic cup anywhere.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop'
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
             src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" 
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
