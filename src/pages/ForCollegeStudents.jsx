import { images } from '../data/siteData'
import { PageHero } from '../components/UI'
import {
  OverviewSection,
  SectionHeader,
  FeatureGrid,
  ContactCTA,
} from '../components/PageSections'

const features = [
  { title: 'Career Counselling', description: 'One-on-one sessions to discover your strengths, interests, and ideal career path.', icon: 'route' },
  { title: 'Study Abroad Guidance', description: 'Expert advice on universities, programs, and destinations suited to your profile.', icon: 'graduation-cap' },
  { title: 'Resume Building', description: 'Create a professional resume that highlights your skills and achievements effectively.', icon: 'file-text' },
  { title: 'LinkedIn Profile Support', description: 'Optimize your LinkedIn profile to attract recruiters and build your professional brand.', icon: 'globe-2' },
  { title: 'Mock Interviews', description: 'Practice interviews with feedback to improve your confidence and performance.', icon: 'video' },
  { title: 'Internship Guidance', description: 'Find and apply for internships that align with your field and career goals.', icon: 'briefcase' },
  { title: 'Skill Development', description: 'Targeted training to build technical and domain-specific competencies.', icon: 'laptop' },
  { title: 'Soft Skills', description: 'Communication, teamwork, leadership, and presentation skills for workplace success.', icon: 'message-circle' },
  { title: 'Career Roadmap', description: 'A personalized plan mapping your journey from college to your dream career.', icon: 'target' },
]

export default function ForCollegeStudents() {
  return (
    <>
      <PageHero
        title="Your Career Starts Here"
        subtitle="Dedicated support for college students preparing for global careers and higher education."
        badge="For College Students"
        image={images.students}
      />

      <OverviewSection
        badge="Student Success"
        title="Guidance Tailored for College Students"
        paragraphs={[
          'Maverick Ghouse understands the unique challenges college students face when planning their careers. Our programs are designed to bridge the gap between academic life and professional success.',
          'From career counselling and resume building to study abroad guidance and internship placement, we provide the support you need to make informed decisions and stand out in competitive markets.',
        ]}
        image={images.about}
        imageAlt="College student support"
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionHeader title="Programs for Students" subtitle="Comprehensive services to prepare you for the global job market." />
        </div>
      </section>

      <FeatureGrid items={features} columns={3} />

      <ContactCTA
        title="Plan Your Future Today"
        subtitle="Book a free consultation and get a personalized career roadmap."
        primaryText="Book Free Consultation"
        primaryLink="/contact"
      />
    </>
  )
}
