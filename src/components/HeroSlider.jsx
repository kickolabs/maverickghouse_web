import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { AppIcon } from './icons/AppIcon'

const SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
    alt: 'International students on a university campus',
  },
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
    alt: 'Students graduating with caps and gowns',
  },
  {
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80',
    alt: 'Young professionals in a modern workplace',
  },
  {
    url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
    alt: 'International travel at airport departure',
  },
  {
    url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80',
    alt: 'Students studying together in a library',
  },
]

const AUTOPLAY_MS = 3000
const FADE_DURATION = 0.8

export default function HeroSlider({ children }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section
      className="relative h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero image slider"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <motion.img
            key={slide.url}
            src={slide.url}
            alt={slide.alt}
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i <= 1 ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-navy/75 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all duration-300"
        aria-label="Previous slide"
      >
        <AppIcon name="chevron-left" size="lg" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all duration-300 rotate-180"
        aria-label="Next slide"
      >
        <AppIcon name="chevron-left" size="lg" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.url}
            type="button"
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-2.5 bg-primary'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  )
}
