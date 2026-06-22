import { images } from '../data/siteData'
import { countries } from '../data/countries'
import CountryCard, { FeatureCard, CheckListItem } from '../components/Cards'
import ConsultationForm from '../components/ConsultationForm'
import { FadeIn, PageHero } from '../components/UI'

const workCountries = ['Germany', 'Canada', 'Australia', 'United Kingdom', 'Europe']

const opportunities = [
  { title: 'Skilled Worker Visa', description: 'For professionals with in-demand skills and job offers.', countries: 'UK, Germany, Canada, Australia' },
  { title: 'EU Blue Card', description: 'High-skilled employment permit for non-EU professionals in Europe.', countries: 'Germany, Netherlands, Luxembourg' },
  { title: 'Express Entry (Canada)', description: 'Points-based permanent residency for skilled workers.', countries: 'Canada' },
  { title: 'Temporary Skill Shortage', description: 'Employer-sponsored visas for occupations in demand.', countries: 'Australia' },
  { title: 'Intra-Company Transfer', description: 'Transfer within multinational corporations.', countries: 'Global' },
  { title: 'Startup & Entrepreneur Visa', description: 'For innovators launching businesses abroad.', countries: 'UK, Germany, Canada' },
]

const eligibility = [
  'Bachelor\'s degree or equivalent professional qualification',
  'Minimum 2-3 years of relevant work experience',
  'English/German language proficiency (varies by country)',
  'Valid job offer from recognized employer (for most categories)',
  'Clean criminal record and medical fitness',
  'Sufficient funds for initial settlement',
]

const process = [
  { step: '01', title: 'Career Assessment', description: 'Evaluate your profile against country-specific requirements.' },
  { step: '02', title: 'Job Market Analysis', description: 'Identify in-demand roles and employer connections.' },
  { step: '03', title: 'Documentation', description: 'Credential evaluation, experience letters, and certifications.' },
  { step: '04', title: 'Visa Application', description: 'Complete filing with embassy/consulate support.' },
  { step: '05', title: 'Relocation Support', description: 'Accommodation, banking, and settlement assistance.' },
]

const benefits = [
  { title: 'Higher Earning Potential', description: 'Access global salary benchmarks and career growth.', icon: 'coins' },
  { title: 'Quality of Life', description: 'Healthcare, education, and social security benefits.', icon: 'home' },
  { title: 'Career Growth', description: 'International experience accelerates professional development.', icon: 'trending-up' },
  { title: 'Family Sponsorship', description: 'Bring your family with dependent visa options.', icon: 'users' },
  { title: 'Permanent Residency', description: 'Clear pathways to PR and citizenship.', icon: 'badge-check' },
  { title: 'Global Network', description: 'Build connections in international business hubs.', icon: 'globe-2' },
]

const workVisaCountries = countries.filter((c) => workCountries.some((wc) => c.name.includes(wc) || wc === 'Europe'))

export default function WorkVisa() {
  return (
    <>
      <PageHero
        title="Explore Global Career Opportunities"
        subtitle="Navigate complex immigration pathways with certified visa consultants. Your international career starts here."
        badge="Work Visa Services"
        image={images.workVisa}
      />

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Popular Work Visa Destinations</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workVisaCountries.slice(0, 5).map((country, i) => (
              <CountryCard key={country.slug} country={country} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Available Opportunities</h2>
            <p className="text-body max-w-2xl mx-auto">Multiple visa categories tailored to your professional profile.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, i) => (
              <FadeIn key={opp.title} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary">
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2">{opp.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{opp.description}</p>
                  <span className="text-xs text-primary font-medium">{opp.countries}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="heading-lg text-navy mb-6">Eligibility Requirements</h2>
              <p className="text-body mb-8">While requirements vary by country and visa type, here are the general criteria:</p>
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <CheckListItem key={item}>{item}</CheckListItem>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src={images.passport} alt="Passport and visa" className="rounded-2xl shadow-2xl" loading="lazy" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">Application Process</h2>
          </FadeIn>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-4 text-sm">
                    {step.step}
                  </div>
                  <h3 className="font-poppins font-semibold text-white text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-white/60">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Benefits & Career Growth</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.08}>
                <FeatureCard icon={benefit.icon} title={benefit.title} description={benefit.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom max-w-4xl">
          <FadeIn className="text-center mb-10">
            <h2 className="heading-lg text-navy mb-4">Start Your Work Visa Application</h2>
            <p className="text-body">Speak with our immigration experts for a personalized assessment.</p>
          </FadeIn>
          <ConsultationForm />
        </div>
      </section>
    </>
  )
}
