import { Link } from 'react-router-dom'
import { images } from '../data/siteData'
import { PageHero, FadeIn } from '../components/UI'
import {
  OverviewSection,
  SectionHeader,
  FeatureGrid,
  ProcessSteps,
  FAQSection,
  ContactCTA,
} from '../components/PageSections'

const features = [
  { title: 'Domestic Internships', description: 'Gain practical experience with leading companies across India in your field of study.', icon: 'building' },
  { title: 'International Internships', description: 'Premium placements at global corporations across Europe, North America, and Asia-Pacific.', icon: 'globe' },
  { title: 'Paid Internships', description: 'Stipend-supported opportunities that help you earn while building your career.', icon: 'coins' },
  { title: 'Industry Training', description: 'Hands-on training programs aligned with current industry standards and expectations.', icon: 'laptop' },
  { title: 'Placement Support', description: 'Guidance and support to convert internships into full-time employment offers.', icon: 'badge-check' },
]

const process = [
  { step: '01', title: 'Profile Assessment', description: 'Evaluate your skills, interests, and career goals.' },
  { step: '02', title: 'Internship Matching', description: 'Match with companies aligned to your profile and preferences.' },
  { step: '03', title: 'Application Support', description: 'Resume, cover letter, and interview preparation assistance.' },
  { step: '04', title: 'Documentation & Visa', description: 'Support for internship visas, travel, and logistics where applicable.' },
  { step: '05', title: 'On-Ground Support', description: 'Dedicated coordinator during your internship period.' },
]

const faqs = [
  { q: 'What is the difference between domestic and international internships?', a: 'Domestic internships are based in India with local companies, while international internships place you with global firms abroad, offering cross-cultural professional exposure.' },
  { q: 'Are paid internships available?', a: 'Yes. Many of our partner companies offer stipends or living allowances. Availability depends on the role, company, and destination.' },
  { q: 'Do you help with internship visas?', a: 'For international placements, we provide guidance on visa requirements, documentation, and application support.' },
  { q: 'Can internships lead to full-time jobs?', a: 'Many of our partner organizations offer pre-placement opportunities to high-performing interns. We support you throughout the conversion process.' },
]

export default function Internship() {
  return (
    <>
      <PageHero
        title="Internships That Build Careers"
        subtitle="Domestic and international internship programs designed to give you real-world experience."
        badge="Internship Programs"
        image={images.internships}
      />

      <OverviewSection
        badge="Internship Overview"
        title="Experience That Sets You Apart"
        paragraphs={[
          'Maverick Ghouse offers a comprehensive range of internship programs — from domestic placements in India to premium international opportunities at leading global companies.',
          'Our programs combine industry training, mentorship, and placement support to help you build a strong foundation for your career.',
        ]}
        image={images.office}
        imageAlt="Internship programs"
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionHeader title="Internship Options" subtitle="Find the program that matches your goals and aspirations." />
        </div>
      </section>

      <FeatureGrid items={features} columns={3} />

      <ProcessSteps
        title="Application Process"
        subtitle="A clear, guided path from application to internship placement."
        steps={process}
        bg="white"
      />

      <section className="section-padding bg-light">
        <div className="container-custom text-center">
          <FadeIn>
            <p className="text-body">
              Looking for detailed international internship programs?{' '}
              <Link to="/internships" className="text-primary font-semibold hover:underline">Explore our International Internships page</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <ContactCTA
        title="Start Your Internship Journey"
        subtitle="Apply today and gain the experience that employers value most."
        primaryText="Apply Now"
        primaryLink="/contact"
      />
    </>
  )
}
