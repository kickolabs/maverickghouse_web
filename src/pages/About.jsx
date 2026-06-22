import { images } from '../data/siteData'
import { FeatureCard } from '../components/Cards'
import { IconBox } from '../components/icons/AppIcon'
import { FadeIn, PageHero, CTABanner } from '../components/UI'

const values = [
  { title: 'Integrity', description: 'Transparent, honest guidance at every step of your journey.', icon: 'shield' },
  { title: 'Excellence', description: 'Uncompromising standards in counseling, documentation, and support.', icon: 'star' },
  { title: 'Innovation', description: 'Leveraging technology and global networks for better outcomes.', icon: 'lightbulb' },
  { title: 'Empathy', description: 'Understanding every student\'s unique dreams, challenges, and aspirations.', icon: 'heart' },
]

const whyChoose = [
  { title: '15+ Years Experience', description: 'Decades of expertise in global education and immigration.' },
  { title: '98% Visa Success Rate', description: 'Industry-leading approval rates across all destinations.' },
  { title: 'Dedicated Counselors', description: 'Personal counselors assigned from day one to arrival.' },
  { title: 'End-to-End Support', description: 'From profile evaluation to post-arrival settlement.' },
  { title: 'Scholarship Assistance', description: 'Help securing financial aid and merit scholarships.' },
]

const timeline = [
  { year: '2010', title: 'Founded', description: 'Maverick Ghouse established with a vision to democratize global education.' },
  { year: '2013', title: 'UK Expansion', description: 'Partnered with 50+ UK universities and launched study abroad division.' },
  { year: '2016', title: 'Internship Program', description: 'Launched international internship placements across Europe and North America.' },
  { year: '2018', title: 'Lord Of Languages', description: 'Opened premium language training center for IELTS, PTE, and German.' },
  { year: '2020', title: 'Work Visa Division', description: 'Expanded into skilled migration and work visa consulting.' },
  { year: '2024', title: '5000+ Students', description: 'Milestone of guiding 5000+ students to their dream destinations.' },
]

const team = [
  { name: 'Rajesh Ghouse', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Dr. Sarah Mitchell', role: 'Head of Admissions', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Michael Chen', role: 'Visa & Immigration Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Priya Nambiar', role: 'Language Training Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About Maverick Ghouse"
        subtitle="Pioneering global education excellence since 2010. Empowering dreams, building futures."
        badge="Our Story"
        image={images.about}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Company Story</span>
              <h2 className="heading-lg text-navy mb-6">From Vision to Global Impact</h2>
              <p className="text-body mb-4">
                Maverick Ghouse was born from a simple belief: every student deserves access to world-class education, regardless of where they come from. What started as a small counseling office has grown into a comprehensive global education platform serving thousands of students across 15+ countries.
              </p>
              <p className="text-body">
                Today, we are one of India&apos;s most trusted names in study abroad consulting, international internships, work visa services, and language training — helping students and professionals turn their global ambitions into reality.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <img src={images.campus} alt="University campus" className="rounded-2xl shadow-lg aspect-square object-cover" loading="lazy" />
                <img src={images.students} alt="Students" className="rounded-2xl shadow-lg aspect-square object-cover mt-8" loading="lazy" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="glass-card p-10 h-full">
                <div className="mb-6">
                  <IconBox name="target" size="2xl" variant="glass" />
                </div>
                <h3 className="heading-md text-white mb-4">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To be the world&apos;s most trusted gateway for global education and career mobility, empowering every individual to pursue excellence without borders.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="glass-card p-10 h-full">
                <div className="mb-6">
                  <IconBox name="rocket" size="2xl" variant="glass" />
                </div>
                <h3 className="heading-md text-white mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To provide personalized, ethical, and comprehensive guidance that transforms aspirations into achievements — through expert counseling, global partnerships, and unwavering student support.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">What We Stand For</span>
            <h2 className="heading-lg text-navy">Our Core Values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <FeatureCard icon={value.icon} title={value.title} description={value.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Why Choose Maverick Ghouse</h2>
            <p className="text-body max-w-2xl mx-auto">The difference is in the details — and the results speak for themselves.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <h3 className="font-poppins font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy">Our Journey</h2>
          </FadeIn>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                    <span className="text-primary font-bold text-sm">{item.year}</span>
                    <h3 className="font-poppins font-semibold text-lg text-navy">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Meet Our Leadership</h2>
            <p className="text-body max-w-2xl mx-auto">Experienced professionals dedicated to your success.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-poppins font-semibold text-navy">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join 5000+ Successful Students"
        subtitle="Let our expert team guide you to your dream destination."
        primaryLink="/contact"
      />
    </>
  )
}
