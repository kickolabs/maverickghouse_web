import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FAQItem } from './Cards'
import { IconBox } from './icons/AppIcon'
import { FadeIn, CTABanner } from './UI'

export function SectionHeader({ badge, title, subtitle, className = '' }) {
  return (
    <FadeIn className={`text-center mb-16 ${className}`}>
      {badge && (
        <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{badge}</span>
      )}
      <h2 className="heading-lg text-navy mb-4">{title}</h2>
      {subtitle && <p className="text-body max-w-2xl mx-auto">{subtitle}</p>}
    </FadeIn>
  )
}

export function OverviewSection({ badge, title, paragraphs, image, imageAlt = '' }) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            {badge && (
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{badge}</span>
            )}
            <h2 className="heading-lg text-navy mb-6">{title}</h2>
            {paragraphs.map((p) => (
              <p key={p} className="text-body mb-4 last:mb-0">{p}</p>
            ))}
          </FadeIn>
          {image && (
            <FadeIn delay={0.2}>
              <img src={image} alt={imageAlt || title} className="rounded-2xl shadow-2xl w-full object-cover" loading="lazy" />
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  )
}

export function FeatureGrid({ items, columns = 3, bg = 'white' }) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={`section-padding ${bg === 'light' ? 'bg-light' : ''}`}>
      <div className="container-custom">
        <div className={`grid ${gridCols[columns] || gridCols[3]} gap-8`}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full">
                {item.icon && (
                  <div className="flex justify-center mb-4">
                    <IconBox name={item.icon} size="xl" />
                  </div>
                )}
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSteps({ title, subtitle, steps, bg = 'light' }) {
  return (
    <section className={`section-padding ${bg === 'light' ? 'bg-light' : ''}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <SectionHeader title={title} subtitle={subtitle} />
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="relative bg-white p-8 rounded-2xl shadow-sm h-full">
                <span className="text-primary font-poppins font-bold text-3xl opacity-20 absolute top-4 right-6">{step.step}</span>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection({ title = 'Frequently Asked Questions', faqs }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="section-padding bg-light">
      <div className="container-custom max-w-3xl">
        <SectionHeader title={title} />
        <FadeIn>
          <div className="bg-white rounded-2xl shadow-sm px-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function ContactCTA({ title, subtitle, primaryText = 'Contact Us', primaryLink = '/contact', secondaryText, secondaryLink }) {
  return (
    <CTABanner
      title={title}
      subtitle={subtitle}
      primaryText={primaryText}
      primaryLink={primaryLink}
      secondaryText={secondaryText}
      secondaryLink={secondaryLink}
    />
  )
}

export function InlineLinkCTA({ text, linkText, to }) {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <FadeIn>
          <p className="text-body">
            {text}{' '}
            <Link to={to} className="text-primary font-semibold hover:underline">{linkText}</Link>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
