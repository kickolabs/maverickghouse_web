import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppIcon, IconBox, CountryBadge } from './icons/AppIcon'

export default function CountryCard({ country, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/countries/${country.slug}`}
        className="group block relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        <img
          src={country.image}
          alt={country.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <CountryBadge code={country.code} className="mb-3" />
          <h3 className="font-poppins font-bold text-xl text-white mb-1">{country.name}</h3>
          <p className="text-white/70 text-sm line-clamp-2">{country.tagline}</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
            Explore
            <AppIcon name="arrow-right" size="sm" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="h-52 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <IconBox name={service.icon} size="lg" variant="white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-xl text-navy mb-2">{service.title}</h3>
        <p className="text-body text-sm mb-4">{service.description}</p>
        <Link
          to={service.link}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
        >
          Learn More
          <AppIcon name="arrow-right" size="sm" />
        </Link>
      </div>
    </motion.div>
  )
}

export function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <AppIcon key={i} name="star" size="md" className="text-yellow-400 fill-yellow-400" strokeWidth={1.5} />
        ))}
      </div>
      <p className="text-body text-sm mb-6 italic">&ldquo;{testimonial.review}&rdquo;</p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-poppins font-semibold text-navy">{testimonial.name}</h4>
          <p className="text-xs text-gray-500">{testimonial.program}</p>
          <p className="text-xs text-primary font-medium">{testimonial.country} &bull; {testimonial.university}</p>
        </div>
      </div>
      {testimonial.video && (
        <span className="absolute top-6 right-6 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          Video
        </span>
      )}
    </motion.div>
  )
}

export function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-poppins font-semibold text-navy pr-8 group-hover:text-primary transition-colors">
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-light flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 bg-primary text-white' : ''}`}>
          <AppIcon name="plus" size="sm" className={isOpen ? 'text-white' : 'text-navy'} />
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-body text-sm pb-5">{answer}</p>
      </motion.div>
    </div>
  )
}

export function FeatureCard({ icon, title, description, className = '' }) {
  return (
    <div className={`text-center p-8 rounded-2xl bg-light hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="flex justify-center mb-4">
        <IconBox name={icon} size="xl" />
      </div>
      <h3 className="font-poppins font-semibold text-lg text-navy mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export function FeatureCardGlass({ icon, title, description, className = '' }) {
  return (
    <div className={`glass-card p-8 text-center h-full ${className}`}>
      <div className="flex justify-center mb-4">
        <IconBox name={icon} size="xl" variant="glass" />
      </div>
      <h3 className="font-poppins font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  )
}

export function CheckListItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <AppIcon name="check" size="xs" className="text-primary" strokeWidth={3} />
      </span>
      <span className="text-sm text-gray-600">{children}</span>
    </li>
  )
}

export function CheckListItemWhite({ children }) {
  return (
    <li className="flex items-center gap-3 text-white/80 text-sm">
      <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <AppIcon name="check" size="xs" className="text-white" strokeWidth={3} />
      </span>
      {children}
    </li>
  )
}
