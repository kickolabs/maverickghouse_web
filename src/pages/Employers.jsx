import { images } from '../data/siteData'
import { PageHero } from '../components/UI'
import {
  OverviewSection,
  SectionHeader,
  FeatureGrid,
  ProcessSteps,
  FAQSection,
  ContactCTA,
} from '../components/PageSections'

const features = [
  { title: 'International Recruitment', description: 'Access a global talent pool of skilled professionals and graduates ready for overseas placements.', icon: 'globe' },
  { title: 'Skilled Workforce Solutions', description: 'End-to-end workforce planning tailored to your industry, role requirements, and growth targets.', icon: 'users' },
  { title: 'Candidate Screening', description: 'Rigorous pre-screening including skills assessment, background verification, and interview coordination.', icon: 'user-check' },
  { title: 'Employer Benefits', description: 'Reduced hiring time, compliant recruitment processes, and dedicated account management support.', icon: 'badge-check' },
]

const process = [
  { step: '01', title: 'Requirement Briefing', description: 'Understand your hiring needs, role specifications, and timeline.' },
  { step: '02', title: 'Talent Sourcing', description: 'Identify and shortlist qualified candidates from our global network.' },
  { step: '03', title: 'Screening & Interviews', description: 'Conduct assessments and coordinate interviews with your team.' },
  { step: '04', title: 'Documentation & Compliance', description: 'Handle offer letters, contracts, and regulatory compliance.' },
  { step: '05', title: 'Onboarding Support', description: 'Assist with relocation, visa processing, and employee integration.' },
]

const faqs = [
  { q: 'What industries do you recruit for?', a: 'We support recruitment across IT, engineering, healthcare, hospitality, finance, manufacturing, and more — both domestically and internationally.' },
  { q: 'How long does the recruitment process take?', a: 'Timelines vary by role and destination. Typically, initial shortlists are provided within 2-4 weeks of requirement briefing.' },
  { q: 'Do you handle visa and compliance for international hires?', a: 'Yes. We provide guidance on work permits, visa documentation, and compliance requirements for international placements.' },
  { q: 'Can you help with bulk hiring?', a: 'Absolutely. We offer scalable recruitment solutions for organizations looking to hire multiple candidates across locations.' },
]

export default function Employers() {
  return (
    <>
      <PageHero
        title="Partner With Maverick Ghouse"
        subtitle="Reliable international recruitment and skilled workforce solutions for forward-thinking employers."
        badge="For Employers"
        image={images.office}
      />

      <OverviewSection
        badge="Employer Overview"
        title="Your Trusted Recruitment Partner"
        paragraphs={[
          'Maverick Ghouse connects employers with qualified talent across India and international markets. Whether you need skilled professionals, fresh graduates, or specialized workers, we deliver candidates who meet your standards.',
          'Our team manages the entire recruitment lifecycle — from sourcing and screening to documentation and onboarding — so you can focus on growing your business.',
        ]}
        image={images.passport}
        imageAlt="Employer recruitment"
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionHeader title="Our Employer Services" subtitle="Comprehensive solutions designed to simplify hiring and workforce management." />
        </div>
      </section>

      <FeatureGrid items={features} columns={2} />

      <ProcessSteps
        title="Recruitment Process"
        subtitle="A streamlined approach from requirement to successful placement."
        steps={process}
        bg="white"
      />

      <FAQSection faqs={faqs} />

      <ContactCTA
        title="Ready to Hire Top Talent?"
        subtitle="Connect with our employer services team and build your workforce with confidence."
        primaryText="Contact Us"
        primaryLink="/contact"
      />
    </>
  )
}
