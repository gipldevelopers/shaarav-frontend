import { useState } from 'react'
import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../assets/vite.svg'
import heroImg from '../../../assets/hero.png'
import Button from '../../../components/Button.jsx'

function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <section className="hero-section">
      <div className="hero-visual">
        <img src={heroImg} className="hero-base" width="170" height="179" alt="" />
        <img src={reactLogo} className="hero-framework" alt="React logo" />
        <img src={viteLogo} className="hero-vite" alt="Vite logo" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Feature-based React structure</p>
        <h1>Get started</h1>
        <p>
          Your app is now organized by <code>app</code>, <code>features</code>, and
          shared building blocks.
        </p>
      </div>

      <Button className="counter-button" onClick={() => setCount((value) => value + 1)}>
        Count is {count}
      </Button>
    </section>
  )
}

export default HeroSection
