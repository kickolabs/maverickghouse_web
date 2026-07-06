import { images } from '../data/siteData'
import { PageHero } from '../components/UI'
import {
  OverviewSection,
  SectionHeader,
  FeatureGrid,
  ContactCTA,
} from '../components/PageSections'

const features = [
  { title: 'Partnership Programs', description: 'Structured collaboration models between Maverick Ghouse and educational institutions.', icon: 'building' },
  { title: 'Campus Recruitment', description: 'On-campus hiring drives connecting students with top domestic and international employers.', icon: 'graduation-cap' },
  { title: 'Placement Support', description: 'Dedicated placement assistance to improve student employability and job outcomes.', icon: 'briefcase' },
  { title: 'Industry Connect', description: 'Bridge the gap between academia and industry through workshops, seminars, and networking.', icon: 'globe-2' },
  { title: 'Career Development Programs', description: 'Structured programs covering resume skills, interview readiness, and professional growth.', icon: 'route' },
  { title: 'Student Employability', description: 'Skill assessments, training modules, and mentorship to prepare students for the job market.', icon: 'user-check' },
]

export default function CollegeCollaboration() {
  return (
    <>
      <PageHero
        title="Partner With Leading Institutions"
        subtitle="Empower your students with global career opportunities through strategic college collaboration."
        badge="College Collaboration"
        image={images.campus}
      />

      <OverviewSection
        badge="Institutional Partnerships"
        title="Building Bridges Between Campus and Career"
        paragraphs={[
          'Maverick Ghouse partners with colleges and universities to enhance student employability and open doors to global opportunities. Our collaboration programs are designed to complement your institution\'s placement goals.',
          'From campus recruitment drives to career development workshops, we work alongside your team to prepare students for success in domestic and international job markets.',
        ]}
        image={images.students}
        imageAlt="College collaboration"
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionHeader title="Collaboration Programs" subtitle="Comprehensive support for institutions committed to student success." />
        </div>
      </section>

      <FeatureGrid items={features} columns={3} />

      <ContactCTA
        title="Let's Collaborate"
        subtitle="Reach out to explore partnership opportunities tailored to your institution."
        primaryText="Contact Us"
        primaryLink="/contact"
      />
    </>
  )
}
