import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

export function PageHero({ title, subtitle, badge, image, children, overlay = true }) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {overlay && <div className="absolute inset-0 bg-hero-gradient" />}
      <div className="relative z-10 container-custom section-padding text-center text-white pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {badge && (
            <span className="inline-block bg-primary/90 text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              {badge}
            </span>
          )}
          <h1 className="heading-xl text-white mb-6 text-balance">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-inter">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export function CTABanner({ title, subtitle, primaryText = 'Book Free Consultation', primaryLink = '/contact', secondaryText, secondaryLink }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)' }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative container-custom section-padding text-center">
        <FadeIn>
          <h2 className="heading-lg text-white mb-4">{title}</h2>
          {subtitle && <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">{subtitle}</p>}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={primaryLink} className="btn-primary">{primaryText}</Link>
            {secondaryText && secondaryLink && (
              <Link to={secondaryLink} className="btn-outline">{secondaryText}</Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
