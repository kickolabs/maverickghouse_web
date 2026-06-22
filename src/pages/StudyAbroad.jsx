import { useState } from 'react'
import { images } from '../data/siteData'
import { countries } from '../data/countries'
import CountryCard, { FAQItem, CheckListItemWhite } from '../components/Cards'
import { IconBox } from '../components/icons/AppIcon'
import ConsultationForm from '../components/ConsultationForm'
import { FadeIn, PageHero } from '../components/UI'

const programs = [
  { title: "Bachelor's", description: '3-4 year undergraduate degrees at top global universities.', icon: 'graduation-cap' },
  { title: "Master's", description: '1-2 year postgraduate programs with research and industry focus.', icon: 'book-open' },
  { title: 'Diploma', description: 'Career-focused diplomas and certificates for practical skills.', icon: 'clipboard' },
  { title: 'Pathway Programs', description: 'Foundation courses to bridge academic gaps before degree programs.', icon: 'route' },
]

const process = [
  { step: '01', title: 'Free Profile Assessment', description: 'Evaluate your academic background, goals, and budget.' },
  { step: '02', title: 'University Shortlisting', description: 'Curated list of best-fit universities and programs.' },
  { step: '03', title: 'Application Preparation', description: 'SOP, LOR, resume, and document preparation support.' },
  { step: '04', title: 'Application Submission', description: 'Timely submission with tracking and follow-ups.' },
  { step: '05', title: 'Offer & Acceptance', description: 'Guidance on offer comparison and acceptance procedures.' },
  { step: '06', title: 'Visa & Pre-Departure', description: 'Visa filing, accommodation, forex, and orientation.' },
]

const faqs = [
  { q: 'When should I start my study abroad application?', a: 'Ideally 12-18 months before your intended intake. This gives ample time for test preparation, university research, applications, and visa processing.' },
  { q: 'What are the minimum academic requirements?', a: 'Requirements vary by country and program. Generally, a minimum of 60-70% in your previous qualification is needed, along with English proficiency test scores.' },
  { q: 'Can I study abroad without IELTS?', a: 'Some universities accept alternatives like PTE, TOEFL, or MOI (Medium of Instruction) letters. We help identify programs that match your profile.' },
  { q: 'How much does it cost to study abroad?', a: 'Costs vary widely — from €0 tuition in Germany to £15,000-35,000/year in the UK. We provide detailed cost breakdowns and scholarship guidance.' },
  { q: 'Do you help with scholarships?', a: 'Yes! We assist with merit scholarships, need-based aid, and country-specific funding opportunities. 85% of our students receive some form of financial assistance.' },
]

const studyCountries = countries.filter((c) => c.studyAbroad)

export default function StudyAbroad() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <PageHero
        title="Study At World-Class Universities"
        subtitle="Unlock your potential at prestigious institutions across 15+ countries with expert admission guidance."
        badge="Study Abroad"
        image={images.studyAbroad}
      />

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Top Study Destinations</h2>
            <p className="text-body max-w-2xl mx-auto">Choose from the world&apos;s most sought-after education hubs.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyCountries.map((country, i) => (
              <CountryCard key={country.slug} country={country} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Programs We Offer</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <IconBox name={program.icon} size="xl" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Application Process</h2>
            <p className="text-body max-w-2xl mx-auto">A streamlined 6-step journey from dream to departure.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <div className="relative p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <span className="font-poppins font-black text-5xl text-primary/10 absolute top-4 right-6">{step.step}</span>
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2 relative">{step.title}</h3>
                  <p className="text-sm text-gray-600 relative">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="heading-lg text-white mb-6">Admission Guidance</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Our certified admission counselors provide personalized guidance tailored to your academic profile, career goals, and financial situation. We handle everything from university research to offer negotiation.
              </p>
              <ul className="space-y-4">
                {['Profile evaluation & gap analysis', 'University & program shortlisting', 'SOP, LOR & resume crafting', 'Application tracking & follow-ups', 'Interview preparation', 'Scholarship applications'].map((item) => (
                  <CheckListItemWhite key={item}>{item}</CheckListItemWhite>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src={images.graduation} alt="Graduation" className="rounded-2xl shadow-2xl" loading="lazy" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="heading-lg text-navy">Frequently Asked Questions</h2>
          </FadeIn>
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <FAQItem
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom max-w-4xl">
          <FadeIn className="text-center mb-10">
            <h2 className="heading-lg text-navy mb-4">Start Your Study Abroad Journey</h2>
            <p className="text-body">Book a free consultation with our admission experts today.</p>
          </FadeIn>
          <ConsultationForm />
        </div>
      </section>
    </>
  )
}
