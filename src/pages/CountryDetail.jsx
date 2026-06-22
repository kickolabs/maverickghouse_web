import { Link, useParams } from 'react-router-dom'
import { getCountryBySlug } from '../data/countries'
import ConsultationForm from '../components/ConsultationForm'
import { AppIcon, CountryBadge } from '../components/icons/AppIcon'
import { FadeIn } from '../components/UI'

export default function CountryDetail() {
  const { slug } = useParams()
  const country = getCountryBySlug(slug)

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="heading-lg text-navy mb-4">Country Not Found</h1>
          <Link to="/countries" className="btn-primary !text-xs">View All Countries</Link>
        </div>
      </div>
    )
  }

  const sections = [
    { title: 'Overview', content: country.overview },
    { title: 'Popular Courses', items: country.popularCourses },
    { title: 'Career Opportunities', items: country.careerOpportunities },
    { title: 'Living Experience', content: country.livingExperience },
    { title: 'Student Benefits', items: country.studentBenefits },
  ]

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <img src={country.image} alt={country.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
        <div className="relative z-10 container-custom section-padding w-full pt-32">
          <Link to="/countries" className="inline-flex items-center gap-2 text-white/70 text-sm mb-6 hover:text-white transition-colors">
            <AppIcon name="chevron-left" size="sm" />
            All Countries
          </Link>
          <CountryBadge code={country.code} className="mb-4 text-lg h-12 min-w-[3rem]" />
          <h1 className="heading-xl text-white mb-4">{country.name}</h1>
          <p className="text-white/80 text-lg max-w-2xl">{country.tagline}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {sections.map((section, i) => (
                <FadeIn key={section.title} delay={i * 0.05}>
                  <div>
                    <h2 className="heading-md text-navy mb-6 flex items-center gap-3">
                      <span className="w-8 h-1 bg-primary rounded-full" />
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-body">{section.content}</p>
                    )}
                    {section.items && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {section.items.map((item) => (
                          <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-light">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <FadeIn>
                  <div className="bg-navy rounded-2xl p-8 text-white mb-8">
                    <h3 className="font-poppins font-semibold text-lg mb-4">Quick Facts</h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-white/60">Study Abroad</span>
                        <span className="inline-flex items-center gap-1.5">
                          {country.studyAbroad && <AppIcon name="check" size="xs" className="text-primary" strokeWidth={3} />}
                          {country.studyAbroad ? 'Available' : '—'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-white/60">Work Visa</span>
                        <span className="inline-flex items-center gap-1.5">
                          {country.workVisa && <AppIcon name="check" size="xs" className="text-primary" strokeWidth={3} />}
                          {country.workVisa ? 'Available' : '—'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-white/60">Internships</span>
                        <span className="inline-flex items-center gap-1.5">
                          {country.internships && <AppIcon name="check" size="xs" className="text-primary" strokeWidth={3} />}
                          {country.internships ? 'Available' : '—'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ConsultationForm compact title={`Apply to ${country.name}`} />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-4">Ready to Study in {country.name}?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our {country.name} specialists are ready to guide you through every step of your application.
            </p>
            <Link to="/contact" className="btn-outline">Apply Now — Free Consultation</Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
