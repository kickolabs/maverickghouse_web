import { images } from '../data/siteData'
import { PageHero } from '../components/UI'
import {
  OverviewSection,
  SectionHeader,
  FeatureGrid,
  FAQSection,
  ContactCTA,
} from '../components/PageSections'

const features = [
  { title: 'Overseas Job Opportunities', description: 'Explore verified job openings across 15+ countries in high-demand sectors.', icon: 'globe' },
  { title: 'Resume Assistance', description: 'Professional resume writing tailored for international and domestic job markets.', icon: 'file-text' },
  { title: 'Interview Preparation', description: 'Mock interviews, feedback sessions, and tips to help you perform with confidence.', icon: 'video' },
  { title: 'Career Guidance', description: 'Personalized counseling to align your skills, goals, and market opportunities.', icon: 'route' },
  { title: 'Job Matching', description: 'Smart matching with roles that fit your profile, experience, and aspirations.', icon: 'target' },
  { title: 'Application Support', description: 'End-to-end help with applications, documentation, and follow-ups.', icon: 'clipboard' },
]

const faqs = [
  { q: 'Which countries offer job opportunities through Maverick Ghouse?', a: 'We connect job seekers with opportunities in the UK, Canada, Germany, Australia, Europe, and other global destinations based on your profile and skills.' },
  { q: 'Do you help with resume preparation?', a: 'Yes. Our team provides professional resume building, formatting, and optimization for both domestic and international applications.' },
  { q: 'Is there a fee for job seeker services?', a: 'Service fees vary depending on the program. Contact us for a free initial consultation to understand the options available for your profile.' },
  { q: 'How do I get started?', a: 'Submit your details through our consultation form or contact us directly. Our counselors will assess your profile and guide you on the next steps.' },
]

export default function JobSeekers() {
  return (
    <>
      <PageHero
        title="Launch Your Global Career"
        subtitle="Expert support for job seekers pursuing overseas and domestic career opportunities."
        badge="For Job Seekers"
        image={images.workVisa}
      />

      <OverviewSection
        badge="Career Mobility"
        title="Your Path to Global Employment"
        paragraphs={[
          'Maverick Ghouse empowers job seekers with the tools, guidance, and connections needed to succeed in competitive global job markets. From resume building to interview preparation, we support you at every stage.',
          'Whether you are a fresh graduate or an experienced professional, our counselors help you identify the right opportunities and navigate the application process with confidence.',
        ]}
        image={images.graduation}
        imageAlt="Job seeker career support"
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionHeader title="Services for Job Seekers" subtitle="Everything you need to stand out and secure your dream role." />
        </div>
      </section>

      <FeatureGrid items={features} columns={3} />

      <FAQSection faqs={faqs} />

      <ContactCTA
        title="Apply Now — Start Your Journey"
        subtitle="Take the first step toward your international career with a free consultation."
        primaryText="Apply Now"
        primaryLink="/contact"
      />
    </>
  )
}
