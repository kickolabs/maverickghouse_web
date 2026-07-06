import { Link } from 'react-router-dom'
import { images } from '../data/siteData'
import { FadeIn, PageHero } from '../components/UI'

const sections = [
  {
    title: '1. Introduction',
    content: (
      <>
        <p>
          Welcome to Maverick Ghouse (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are a global education and career mobility consultancy based in Chennai, India, offering study abroad counseling, international internship placements, work visa guidance, and language training through The Lord Of Languages.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website at maverickghouse.com, submit a consultation request, contact us by phone or email, or otherwise interact with our services.
        </p>
        <p>
          By using our website or sharing your information with us, you agree to the practices described in this policy. If you do not agree, please do not use our website or submit your personal data.
        </p>
      </>
    ),
  },
  {
    title: '2. Information We Collect',
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <h4 className="font-poppins font-semibold text-navy mt-4 mb-2">Information you provide directly</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Program or service of interest (e.g. Study Abroad, Work Visa, IELTS/PTE/TOEFL, German Language, Spoken English, International Internships)</li>
          <li>Messages or inquiries you send through our consultation form or email</li>
          <li>Any additional details you share during counseling, documentation, or visa application support</li>
        </ul>
        <h4 className="font-poppins font-semibold text-navy mt-4 mb-2">Information collected automatically</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Browser type, device type, and operating system</li>
          <li>IP address and general location (city/region level)</li>
          <li>Pages visited, time spent on pages, and referring website</li>
          <li>Date and time of your visit</li>
        </ul>
        <h4 className="font-poppins font-semibold text-navy mt-4 mb-2">Information from third parties</h4>
        <p>
          With your consent, we may receive information from partner universities, immigration authorities, language testing bodies, or internship providers as part of the services you request from us.
        </p>
      </>
    ),
  },
  {
    title: '3. How We Use Your Information',
    content: (
      <>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>To respond to your consultation requests and provide counseling services</li>
          <li>To guide you through study abroad admissions, internship placements, work visa applications, and language training programs</li>
          <li>To communicate with you via phone, email, or SMS regarding your inquiries and applications</li>
          <li>To prepare and submit documentation on your behalf to universities, employers, or immigration authorities (with your authorization)</li>
          <li>To improve our website, services, and customer experience</li>
          <li>To send relevant updates about programs, deadlines, or services you have expressed interest in</li>
          <li>To comply with applicable legal and regulatory requirements</li>
          <li>To prevent fraud, misuse, or unauthorized access to our services</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Legal Basis for Processing',
    content: (
      <>
        <p>
          Under applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act), we process your personal data based on one or more of the following grounds:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Your consent</strong> — when you submit our consultation form or voluntarily provide your details</li>
          <li><strong>Performance of a service</strong> — to deliver the education consulting, visa, or language training services you request</li>
          <li><strong>Legitimate interests</strong> — to operate and improve our business, provided your rights are not overridden</li>
          <li><strong>Legal obligation</strong> — where we are required to retain or disclose information by law</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. How We Share Your Information',
    content: (
      <>
        <p>We do not sell your personal information. We may share your data only in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Partner institutions and service providers</strong> — universities, colleges, internship hosts, language testing centers, or immigration consultants involved in your application process</li>
          <li><strong>Technology service providers</strong> — such as EmailJS (for processing consultation form submissions) and Google Maps (for displaying our office location)</li>
          <li><strong>Government and regulatory bodies</strong> — when required for visa applications, immigration processing, or compliance with applicable laws</li>
          <li><strong>Legal requirements</strong> — if compelled by court order, legal process, or to protect our rights, safety, or property</li>
        </ul>
        <p className="mt-3">
          All third parties with whom we share data are expected to handle your information securely and only for the purposes we authorize.
        </p>
      </>
    ),
  },
  {
    title: '6. Data Retention',
    content: (
      <>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, including providing our services, maintaining business records, and meeting legal or regulatory obligations.
        </p>
        <p>
          Consultation inquiries are typically retained for up to 3 years unless a longer period is required for ongoing client services or legal compliance. You may request deletion of your data at any time, subject to our legal retention obligations.
        </p>
      </>
    ),
  },
  {
    title: '7. Data Security',
    content: (
      <>
        <p>
          We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include secure communication channels and restricted access to personal data within our organization.
        </p>
        <p>
          However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    title: '8. Your Rights',
    content: (
      <>
        <p>Depending on applicable law, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Correction</strong> — request correction of inaccurate or incomplete information</li>
          <li><strong>Erasure</strong> — request deletion of your personal data, subject to legal exceptions</li>
          <li><strong>Withdraw consent</strong> — withdraw your consent at any time where processing is based on consent</li>
          <li><strong>Grievance redressal</strong> — lodge a complaint with us or with the relevant data protection authority in India</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us using the details in Section 14 below. We will respond within a reasonable timeframe as required by applicable law.
        </p>
      </>
    ),
  },
  {
    title: '9. Cookies and Tracking Technologies',
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic. Cookies are small text files stored on your device.
        </p>
        <p>
          You can control or disable cookies through your browser settings. Please note that disabling cookies may affect certain features or functionality of our website.
        </p>
        <p>
          Third-party services embedded on our site, such as Google Maps, may set their own cookies. We encourage you to review the privacy policies of these third-party providers.
        </p>
      </>
    ),
  },
  {
    title: '10. Third-Party Links and Services',
    content: (
      <>
        <p>
          Our website may contain links to external websites, including partner universities, social media platforms (Facebook, Instagram, LinkedIn, YouTube), and other third-party resources. We are not responsible for the privacy practices or content of these external sites.
        </p>
        <p>
          We encourage you to read the privacy policies of any third-party websites you visit through links on our site.
        </p>
      </>
    ),
  },
  {
    title: '11. Children\'s Privacy',
    content: (
      <>
        <p>
          Our services are primarily intended for students and professionals aged 18 and above. We do not knowingly collect personal information from children under 18 without verifiable parental or guardian consent.
        </p>
        <p>
          If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete such information.
        </p>
      </>
    ),
  },
  {
    title: '12. International Data Transfers',
    content: (
      <>
        <p>
          As a global education consultancy, your information may be shared with partner institutions and service providers located outside India (e.g. universities in the UK, Canada, Australia, Germany, and other countries). When we transfer your data internationally, we take reasonable steps to ensure it is handled in accordance with this Privacy Policy and applicable data protection standards.
        </p>
      </>
    ),
  },
  {
    title: '13. Changes to This Privacy Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws. The updated policy will be posted on this page with a revised &quot;Last Updated&quot; date.
        </p>
        <p>
          We encourage you to review this page periodically. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
        </p>
      </>
    ),
  },
  {
    title: '14. Contact Us',
    content: (
      <>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
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

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How Maverick Ghouse collects, uses, and protects your personal information."
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
