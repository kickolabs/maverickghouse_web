export const companyInfo = {
  name: 'Maverick Ghouse',
  tagline: 'Global Education & Career Mobility',
  description:
    'Maverick Ghouse is a trusted global education and immigration consultancy based in Chennai, India. We help students and professionals with study abroad, work visas, international internships, language training, job placement, and employer recruitment across 15+ countries.',
  address: '3, Mosque St, Jaya Nagar, Porur, Chennai, Tamil Nadu 600116, India',
  phones: ['+91 89258 90437', '+91 89255 17562'],
  emails: ['captain@maverickghouse.com', 'ghouse@maverickghouse.com'],
  hours: 'Mon – Sat: 9:00 AM – 7:00 PM | Sunday: By Appointment',
  website: 'www.maverickghouse.com',
  whatsapp: '918925890437',
  stats: {
    students: '5000+ students guided',
    countries: '15+ countries',
    visaSuccess: '98% visa success rate',
    experience: '15+ years experience',
    partners: '300+ partner institutions',
  },
  leadership: [
    'Ghouse Mohideen – Founder & CEO',
    'Lokeshwari – HR',
    'Bibin – Language Trainer',
    'Lokeshwari – Visa & Immigration',
  ],
}

export const services = [
  {
    id: 'study-abroad',
    name: 'Study Abroad',
    path: '/study-abroad',
    summary:
      'Expert admission guidance for Bachelor\'s, Master\'s, Diploma, and Pathway programs at world-class universities in 15+ countries. Services include profile assessment, university shortlisting, SOP/LOR preparation, application submission, offer guidance, and visa support.',
    countries: 'UK, Germany, Canada, Australia, France, Ireland, USA, and more',
    process: 'Free Profile Assessment → University Shortlisting → Application Preparation → Submission → Offer & Acceptance → Visa & Pre-Departure',
  },
  {
    id: 'work-visa',
    name: 'Work Visa & Immigration',
    path: '/work-visa',
    summary:
      'Certified visa consulting for skilled workers and professionals. We help with Skilled Worker Visas, EU Blue Card, Canada Express Entry, Australia TSS visas, Intra-Company Transfers, and Startup/Entrepreneur visas.',
    destinations: 'Germany, Canada, Australia, United Kingdom, Europe',
    eligibility:
      'Bachelor\'s degree, 2-3 years experience, language proficiency, valid job offer (for most categories), clean record',
  },
  {
    id: 'internships',
    name: 'International Internships',
    path: '/internships',
    summary:
      'Premium internships at leading global corporations across IT, Engineering, Business, Marketing, Hospitality, and Healthcare. Includes profile assessment, company matching, application support, visa logistics, and on-ground support.',
  },
  {
    id: 'internship',
    name: 'Internship Programs',
    path: '/internship',
    summary:
      'Domestic and international internships including paid internships, industry training, and placement support to convert internships into full-time offers.',
  },
  {
    id: 'languages',
    name: 'The Lord Of Languages',
    path: '/languages',
    summary:
      'Certified language training for IELTS, PTE, TOEFL, German language, and Spoken English with expert trainers.',
  },
  {
    id: 'employers',
    name: 'Employers',
    path: '/employers',
    summary:
      'International recruitment, skilled workforce solutions, candidate screening, and end-to-end hiring support for employers across IT, engineering, healthcare, hospitality, finance, and manufacturing.',
  },
  {
    id: 'job-seekers',
    name: 'Job Seekers',
    path: '/job-seekers',
    summary:
      'Overseas job opportunities, resume assistance, interview preparation, career guidance, job matching, and application support for professionals seeking global careers.',
  },
  {
    id: 'college-collaboration',
    name: 'College Collaboration',
    path: '/college-collaboration',
    summary:
      'Partnership programs with colleges including campus recruitment, placement support, industry connect, career development, and student employability programs.',
  },
  {
    id: 'college-students',
    name: 'For College Students',
    path: '/for-college-students',
    summary:
      'Career counselling, study abroad guidance, resume building, LinkedIn profile support, mock interviews, internship guidance, skill development, soft skills training, and personalized career roadmaps.',
  },
]

export const countries = [
  { name: 'United Kingdom', highlights: 'Oxford, Cambridge, 2-year Graduate Route Visa, 1-year Masters' },
  { name: 'Germany', highlights: 'Tuition-free education, EU Blue Card, strong engineering & automotive sector' },
  { name: 'Canada', highlights: 'PGWP up to 3 years, Express Entry PR pathway, safe & diverse' },
  { name: 'Australia', highlights: 'Top 100 universities, 2-4 year post-study work rights, high quality of life' },
  { name: 'France', highlights: 'Affordable elite education, Talent Passport visa, fashion & aerospace' },
  { name: 'Ireland', highlights: 'Tech hub in Dublin, English-speaking EU country, growing job market' },
  { name: 'USA', highlights: 'World-leading universities, OPT work opportunities, diverse programs' },
  { name: 'New Zealand', highlights: 'Safe environment, post-study work visa, quality education' },
]

export const faqs = [
  {
    keywords: ['when start', 'application timeline', 'how early'],
    answer:
      'Ideally start your study abroad application 12–18 months before your intended intake. This allows time for test preparation, university research, applications, and visa processing. Book a free consultation for a personalized timeline.',
  },
  {
    keywords: ['ielts', 'without ielts', 'english test', 'pte', 'toefl'],
    answer:
      'Many universities accept IELTS, PTE, or TOEFL. Some accept MOI (Medium of Instruction) letters. We also offer IELTS, PTE, and TOEFL coaching through The Lord Of Languages. Contact us to find programs matching your profile.',
  },
  {
    keywords: ['cost', 'fee', 'how much', 'scholarship', 'afford'],
    answer:
      'Costs vary by country — from low/no tuition in Germany to £15,000–35,000/year in the UK. We provide detailed cost breakdowns and scholarship assistance. 85% of our students receive some form of financial aid. Consultation is free.',
  },
  {
    keywords: ['visa success', 'approval rate', 'guarantee'],
    answer:
      'Maverick Ghouse has a 98% visa success rate. While we cannot guarantee approval (final decisions rest with embassies), our expert documentation and counseling maximize your chances significantly.',
  },
  {
    keywords: ['consultation', 'free', 'book', 'appointment'],
    answer:
      'Yes! We offer free consultations. Visit our Contact page or message us on WhatsApp at +91 89258 90437. Our counselors respond within 24 hours.',
  },
  {
    keywords: ['documents', 'required', 'paperwork'],
    answer:
      'Typical documents include passport, academic transcripts, degree certificates, English test scores, SOP, LORs, resume/CV, financial proof, and visa-specific forms. Requirements vary by country and program — we provide a customized checklist.',
  },
  {
    keywords: ['work after study', 'post study', 'pgwp', 'graduate route'],
    answer:
      'Post-study work options: UK Graduate Route (2–3 years), Canada PGWP (up to 3 years), Australia Temporary Graduate Visa (2–4 years), Germany 18-month job seeker visa. We guide you on the best pathway for your goals.',
  },
]

export const quickReplies = [
  'Study Abroad',
  'Work Visa',
  'Contact Info',
  'Countries',
  'Internships',
  'Language Training',
  'Book Consultation',
]
