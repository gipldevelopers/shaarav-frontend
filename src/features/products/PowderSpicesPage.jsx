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
    image: 'https://plus.unsplash.com/premium_photo-1672076780330-ae81962ee3ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHVybWVyaWMlMjBQb3dkZXJ8ZW58MHx8MHx8fDA%3D'
  },
  { 
    name: 'Red Chilli Powder', 
    desc: 'Expertly ground dried red chillies, adding heat and vibrant color to culinary creations.',
    image: 'https://plus.unsplash.com/premium_photo-1691030658362-5b646a6480e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVkJTIwQ2hpbGxpJTIwUG93ZGVyfGVufDB8fDB8fHww'
  },
  { 
    name: 'Cinnamon Powder', 
    desc: 'Aromatic and sweet ground cinnamon, perfect for both savory and sweet dishes.',
    image: 'https://images.unsplash.com/photo-1636972955024-3b01f2236b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2lubmFtb24lMjBQb3dkZXJ8ZW58MHx8MHx8fDA%3D'
  },
  { 
    name: 'Black Pepper Powder', 
    desc: 'Freshly ground black peppercorns, offering a sharp, spicy bite and rich aroma.',
    image: 'https://media.istockphoto.com/id/979264404/photo/ground-black-pepper.webp?a=1&b=1&s=612x612&w=0&k=20&c=VT7S3Vj7CDVI2UwPhqZqWOtsQaoZr97avKhUQxxd57E='
  },
  { 
    name: 'Coriander Powder', 
    desc: 'Milled coriander seeds with a citrusy, nutty flavor, essential for Indian spice blends.',
    image: 'https://media.istockphoto.com/id/1153477893/photo/crushed-coriander-powder.webp?a=1&b=1&s=612x612&w=0&k=20&c=G72-tOhpJlSTh08MrHVj_Czbs6LH2L2y6nuSsqbeGB8='
  },
  { 
    name: 'Cumin Powder', 
    desc: 'Ground roasted cumin seeds, providing a deep, smoky flavor and warm aroma.',
    image: 'https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VtaW4lMjBQb3dkZXJ8ZW58MHx8MHx8fDA%3D'
  },
  { 
    name: 'Ginger Powder', 
    desc: 'Finely milled dried ginger root, offering a sharp, zesty kick and digestive benefits.',
    image: 'https://media.istockphoto.com/id/1167521639/photo/dried-ginger-and-ground-ginger-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=sUkvhawm6NhU2plQ7hCsc-v8XL61kTh8TqPU8D9iTbo='
  },
  { 
    name: 'Asafoetida (Hing)', 
    desc: 'Pure, potent asafoetida powder, known for its unique savory aroma and digestive properties.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OYFWEtLGcfN9j_mjUpoyp9A99dIaVZW6cSDuvLTnpNS2uwNIWe4ESyQ&s'
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
             src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop" 
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
