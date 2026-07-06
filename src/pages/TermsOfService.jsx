import { Link } from 'react-router-dom'
import { images } from '../data/siteData'
import { FadeIn, PageHero } from '../components/UI'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          Welcome to Maverick Ghouse (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, consultation services, and all related offerings including study abroad counseling, international internship placements, work visa guidance, and language training through The Lord Of Languages.
        </p>
        <p>
          By accessing our website at maverickghouse.com, submitting a consultation request, or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
        </p>
      </>
    ),
  },
  {
    title: '2. About Our Services',
    content: (
      <>
        <p>Maverick Ghouse provides education consulting and career mobility services, including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Study abroad counseling and university admission support</li>
          <li>International internship placement assistance</li>
          <li>Work visa and skilled migration consulting</li>
          <li>Language training (IELTS, PTE, TOEFL, German, and Spoken English) through The Lord Of Languages</li>
          <li>Documentation, profile evaluation, and end-to-end application support</li>
        </ul>
        <p className="mt-3">
          Our services are advisory and facilitative in nature. Final decisions regarding admissions, visa approvals, internship placements, and test results rest solely with the respective universities, employers, immigration authorities, and testing bodies.
        </p>
      </>
    ),
  },
  {
    title: '3. Eligibility',
    content: (
      <>
        <p>
          You must be at least 18 years of age to use our services independently. If you are under 18, you may use our services only with the involvement and consent of a parent or legal guardian.
        </p>
        <p>
          By using our services, you represent that the information you provide is accurate, complete, and truthful. Providing false or misleading information may result in termination of services and may affect your applications with third parties.
        </p>
      </>
    ),
  },
  {
    title: '4. Consultation and Engagement',
    content: (
      <>
        <p>
          Submitting a consultation request through our website or contacting us does not create a binding service agreement. A formal engagement begins only when both parties agree on the scope of services, fees (if applicable), and timelines.
        </p>
        <p>
          Initial consultations may be offered free of charge at our discretion. Any paid services, fees, or payment terms will be communicated clearly before you commit to them.
        </p>
        <p>
          You agree to cooperate fully during the engagement by providing required documents, responding to requests in a timely manner, and attending scheduled counseling sessions.
        </p>
      </>
    ),
  },
  {
    title: '5. User Responsibilities',
    content: (
      <>
        <p>When using our website and services, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Provide accurate and up-to-date personal, academic, and professional information</li>
          <li>Submit genuine documents and not falsify any records or credentials</li>
          <li>Use our website and services only for lawful purposes</li>
          <li>Not attempt to gain unauthorized access to our systems or data</li>
          <li>Not reproduce, distribute, or exploit our website content without written permission</li>
          <li>Comply with all applicable laws, university policies, and immigration regulations</li>
        </ul>
        <p className="mt-3">
          You are solely responsible for meeting the eligibility criteria, deadlines, and requirements set by universities, employers, and immigration authorities.
        </p>
      </>
    ),
  },
  {
    title: '6. Fees and Payments',
    content: (
      <>
        <p>
          Service fees, if applicable, will be communicated to you in writing before engagement. Fees may vary depending on the program, destination country, and scope of services required.
        </p>
        <p>
          All payments must be made through approved payment methods as specified by Maverick Ghouse. Fees paid for services already rendered are generally non-refundable unless otherwise agreed in writing or required by applicable law.
        </p>
        <p>
          Third-party fees — such as university application fees, visa fees, test registration fees, or courier charges — are separate from our service fees and are payable directly to the respective institutions or authorities unless otherwise arranged.
        </p>
      </>
    ),
  },
  {
    title: '7. No Guarantee of Outcomes',
    content: (
      <>
        <p>
          While Maverick Ghouse strives to provide expert guidance and has a strong track record of successful placements, we do not guarantee:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Admission to any specific university or program</li>
          <li>Approval of any visa or immigration application</li>
          <li>Placement in any internship or employment opportunity</li>
          <li>Specific scores or results in language proficiency tests</li>
          <li>Scholarship or financial aid awards</li>
        </ul>
        <p className="mt-3">
          Success rates, testimonials, and statistics displayed on our website are indicative and based on past results. Individual outcomes depend on many factors beyond our control, including your academic profile, documentation, interview performance, and decisions by third parties.
        </p>
      </>
    ),
  },
  {
    title: '8. Intellectual Property',
    content: (
      <>
        <p>
          All content on our website — including text, graphics, logos, images, design, and software — is the property of Maverick Ghouse or its licensors and is protected by applicable copyright and intellectual property laws.
        </p>
        <p>
          You may view and download content for personal, non-commercial use only. You may not copy, modify, distribute, sell, or create derivative works from our content without prior written consent from Maverick Ghouse.
        </p>
      </>
    ),
  },
  {
    title: '9. Third-Party Services and Links',
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, including partner universities, social media platforms, Google Maps, and other external resources. We do not control and are not responsible for the content, policies, or practices of these third parties.
        </p>
        <p>
          Your interactions with third-party institutions, employers, immigration authorities, and service providers are governed by their respective terms and policies. Maverick Ghouse is not liable for any actions, decisions, or omissions by third parties.
        </p>
      </>
    ),
  },
  {
    title: '10. Limitation of Liability',
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, Maverick Ghouse and its directors, employees, counselors, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Your use of or inability to use our website or services</li>
          <li>Rejection of your university, visa, internship, or employment application</li>
          <li>Delays caused by third parties or force majeure events</li>
          <li>Errors or omissions in information provided by you</li>
          <li>Unauthorized access to your data despite our reasonable security measures</li>
        </ul>
        <p className="mt-3">
          Our total liability for any claim arising from these Terms or our services shall not exceed the amount of fees paid by you to Maverick Ghouse for the specific service giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    title: '11. Indemnification',
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless Maverick Ghouse, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your breach of these Terms, your misuse of our services, or your violation of any applicable law or third-party rights.
        </p>
      </>
    ),
  },
  {
    title: '12. Termination',
    content: (
      <>
        <p>
          We may suspend or terminate your access to our website or services at any time if you violate these Terms, provide false information, or engage in conduct that we deem harmful to our business or other clients.
        </p>
        <p>
          You may discontinue use of our services at any time by notifying us in writing. Termination does not relieve you of obligations incurred prior to termination, including payment for services already rendered.
        </p>
      </>
    ),
  },
  {
    title: '13. Privacy',
    content: (
      <>
        <p>
          Your use of our website and services is also governed by our{' '}
          <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>,
          which explains how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: '14. Governing Law and Disputes',
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
        </p>
        <p>
          Before initiating legal proceedings, we encourage you to contact us directly to seek an amicable resolution of any dispute.
        </p>
      </>
    ),
  },
  {
    title: '15. Changes to These Terms',
    content: (
      <>
        <p>
          We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised &quot;Last Updated&quot; date. Your continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.
        </p>
        <p>
          We encourage you to review this page periodically for any changes.
        </p>
      </>
    ),
  },
  {
    title: '16. Contact Us',
    content: (
      <>
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <div className="mt-4 p-6 rounded-2xl bg-light border border-gray-100">
          <p className="font-poppins font-semibold text-navy mb-3">Maverick Ghouse</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Address:</strong> 3, Mosque St, Jaya Nagar, Porur, Chennai, Tamil Nadu 600116, India</li>
            <li><strong>Phone:</strong> +91 89258 90437 / +91 89255 17562</li>
            <li><strong>Email:</strong> captain@maverickghouse.com / ghouse@maverickghouse.com</li>
            <li><strong>Working Hours:</strong> Mon – Sat: 9:00 AM – 7:00 PM | Sunday: By Appointment</li>
          </ul>
        </div>
        <p className="mt-4">
          You may also reach us through our{' '}
          <Link to="/contact" className="text-primary hover:underline font-medium">Contact page</Link>.
        </p>
      </>
    ),
  },
]

export default function TermsOfService() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="The terms and conditions governing your use of Maverick Ghouse website and services."
        badge="Legal"
        image={images.office}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <p className="text-sm text-gray-500 mb-12">
              Last Updated: July 6, 2026
            </p>
          </FadeIn>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.05}>
                <div>
                  <h2 className="font-poppins font-semibold text-xl text-navy mb-4">{section.title}</h2>
                  <div className="text-body text-sm md:text-base space-y-4 [&_strong]:text-navy [&_strong]:font-medium">
                    {section.content}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
