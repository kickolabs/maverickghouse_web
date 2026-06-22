import { images } from '../data/siteData'
import { testimonials } from '../data/testimonials'
import { TestimonialCard } from '../components/Cards'
import { IconBox } from '../components/icons/AppIcon'
import ConsultationForm from '../components/ConsultationForm'
import { FadeIn, PageHero, CTABanner } from '../components/UI'

const categories = [
  { title: 'IT & Technology', description: 'Software development, data science, cybersecurity internships at global tech firms.', icon: 'laptop', companies: 'Google, SAP, Infosys' },
  { title: 'Engineering', description: 'Mechanical, electrical, and civil engineering placements in manufacturing hubs.', icon: 'settings', companies: 'BMW, Siemens, Bosch' },
  { title: 'Business & Finance', description: 'Consulting, banking, and corporate strategy roles in financial centers.', icon: 'bar-chart', companies: 'Deloitte, KPMG, HSBC' },
  { title: 'Marketing & Media', description: 'Digital marketing, brand management, and content creation internships.', icon: 'smartphone', companies: 'Ogilvy, WPP, Meta' },
  { title: 'Hospitality', description: 'Hotel management, culinary arts, and tourism industry placements.', icon: 'building', companies: 'Marriott, Hilton, Accor' },
  { title: 'Healthcare', description: 'Clinical research, hospital administration, and pharma industry roles.', icon: 'stethoscope', companies: 'Pfizer, NHS, Apollo' },
]

const benefits = [
  { title: 'Global Resume', description: 'Stand out with international work experience on your CV.' },
  { title: 'Industry Connections', description: 'Build a professional network across borders.' },
  { title: 'Cultural Intelligence', description: 'Develop cross-cultural communication skills.' },
  { title: 'Career Clarity', description: 'Discover your passion through real-world exposure.' },
  { title: 'Paid Opportunities', description: 'Many internships offer stipends and living allowances.' },
  { title: 'Full-Time Offers', description: '70% of our interns receive pre-placement offers.' },
]

const process = [
  { step: '01', title: 'Profile Assessment', description: 'Evaluate skills, interests, and career goals.' },
  { step: '02', title: 'Internship Matching', description: 'Match with companies aligned to your profile.' },
  { step: '03', title: 'Application Support', description: 'Resume, cover letter, and interview prep.' },
  { step: '04', title: 'Visa & Logistics', description: 'Internship visa, accommodation, and travel support.' },
  { step: '05', title: 'On-Ground Support', description: 'Dedicated coordinator during your internship.' },
]

const internshipStories = testimonials.filter((t) => t.program.includes('Internship') || t.review.toLowerCase().includes('internship'))

export default function Internships() {
  return (
    <>
      <PageHero
        title="Gain Global Experience Before You Graduate"
        subtitle="Premium international internships at leading corporations across Europe, North America, and Asia-Pacific."
        badge="International Internships"
        image={images.internships}
      />

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Internship Categories</h2>
            <p className="text-body max-w-2xl mx-auto">Find the perfect internship aligned with your field of study and career aspirations.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                  <div className="mb-4">
                    <IconBox name={cat.icon} size="xl" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                  <p className="text-xs text-primary font-medium">Partners: {cat.companies}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <img src={images.office} alt="Global office" className="rounded-2xl shadow-2xl" loading="lazy" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="heading-lg text-navy mb-8">Why Intern Abroad?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-poppins font-semibold text-navy text-sm mb-1">{benefit.title}</h3>
                      <p className="text-xs text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Application Process</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1} className="flex-1">
                <div className="text-center p-6 relative">
                  <div className="w-14 h-14 rounded-full bg-primary text-white font-poppins font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-poppins font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Internship Success Stories</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {(internshipStories.length > 0 ? internshipStories : testimonials.slice(0, 2)).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn className="text-center mb-10">
            <h2 className="heading-lg text-navy mb-4">Apply for an International Internship</h2>
            <p className="text-body">Take the first step toward global career experience.</p>
          </FadeIn>
          <ConsultationForm />
        </div>
      </section>

      <CTABanner
        title="1000+ Internships Placed Globally"
        subtitle="Join the ranks of students who gained invaluable international experience."
        primaryLink="/contact"
      />
    </>
  )
}
