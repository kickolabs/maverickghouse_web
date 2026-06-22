import { images } from '../data/siteData'
import { FeatureCardGlass } from '../components/Cards'
import { IconBox } from '../components/icons/AppIcon'
import ConsultationForm from '../components/ConsultationForm'
import { FadeIn, PageHero, CTABanner } from '../components/UI'

const programs = [
  { title: 'IELTS', description: 'International English Language Testing System — accepted by 11,000+ organizations worldwide.', duration: '4-8 weeks', score: 'Target: 6.5-8.0', icon: 'file-text' },
  { title: 'PTE Academic', description: 'Computer-based English test with fast results — ideal for quick applications.', duration: '3-6 weeks', score: 'Target: 58-79', icon: 'laptop' },
  { title: 'TOEFL iBT', description: 'Preferred by US universities — comprehensive assessment of academic English.', duration: '4-8 weeks', score: 'Target: 90-110', icon: 'graduation-cap' },
  { title: 'OET', description: 'Occupational English Test for healthcare professionals seeking global careers.', duration: '6-10 weeks', score: 'Target: B-A', icon: 'stethoscope' },
  { title: 'German Language', description: 'A1 to C1 levels — essential for studying and working in Germany.', duration: '8-16 weeks', score: 'A1-C1 Levels', icon: 'languages' },
  { title: 'Spoken English', description: 'Fluency, pronunciation, and confidence building for everyday communication.', duration: '4-8 weeks', score: 'All Levels', icon: 'message-circle' },
]

const features = [
  { title: 'Certified Trainers', description: 'British Council & IDP certified instructors with 10+ years experience.', icon: 'user-check' },
  { title: 'Mock Tests', description: 'Full-length simulated exams with detailed performance analytics.', icon: 'bar-chart' },
  { title: 'Live Classes', description: 'Interactive online and offline sessions with small batch sizes.', icon: 'video' },
  { title: 'Flexible Timings', description: 'Morning, evening, and weekend batches to fit your schedule.', icon: 'clock' },
]

const results = [
  { name: 'Aditya K.', program: 'IELTS', score: '8.0 Band', before: '5.5' },
  { name: 'Meera S.', program: 'PTE', score: '79 Score', before: '52' },
  { name: 'Karan P.', program: 'German A2', score: 'Goethe Certified', before: 'Beginner' },
  { name: 'Divya R.', program: 'TOEFL', score: '108 Score', before: '78' },
  { name: 'Rohan M.', program: 'OET', score: 'Grade A', before: 'Grade C' },
  { name: 'Anjali T.', program: 'Spoken English', score: 'Fluent', before: 'Basic' },
]

export default function Languages() {
  return (
    <>
      <PageHero
        title="Master Languages. Unlock Opportunities."
        subtitle="Premium language training by Lord Of Languages — your gateway to global education and careers."
        badge="The Lord Of Languages"
        image={images.languages}
      />

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Our Programs</h2>
            <p className="text-body max-w-2xl mx-auto">Comprehensive language training designed for study abroad, work visa, and professional success.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/30 hover:-translate-y-1 h-full">
                  <div className="mb-4">
                    <IconBox name={program.icon} size="xl" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-navy mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                  <div className="flex gap-4 text-xs">
                    <span className="bg-light px-3 py-1 rounded-full text-gray-600">{program.duration}</span>
                    <span className="bg-primary/10 px-3 py-1 rounded-full text-primary font-medium">{program.score}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">Why Lord Of Languages?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <FeatureCardGlass icon={feature.icon} title={feature.title} description={feature.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Student Results</h2>
            <p className="text-body max-w-2xl mx-auto">Real score improvements from our language training programs.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, i) => (
              <FadeIn key={result.name} delay={i * 0.08}>
                <div className="bg-light rounded-2xl p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-poppins font-semibold text-navy">{result.name}</h3>
                    <p className="text-sm text-gray-500">{result.program}</p>
                    <p className="text-xs text-gray-400 mt-1">Before: {result.before}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-poppins font-bold text-2xl text-primary">{result.score}</p>
                    <p className="text-xs text-green-600 font-medium">Achieved</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom max-w-4xl">
          <FadeIn className="text-center mb-10">
            <h2 className="heading-lg text-navy mb-4">Enroll in Lord Of Languages</h2>
            <p className="text-body">Book a free demo class and assessment with our language experts.</p>
          </FadeIn>
          <ConsultationForm />
        </div>
      </section>

      <CTABanner
        title="Your Language Score Is Your Passport"
        subtitle="Join 2000+ students who achieved their target scores with Lord Of Languages."
        primaryText="Book Free Demo Class"
        primaryLink="/contact"
      />
    </>
  )
}
