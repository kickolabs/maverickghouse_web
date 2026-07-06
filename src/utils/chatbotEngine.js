import { companyInfo, services, countries, faqs } from '../data/chatbotKnowledge'

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

function scoreKeywords(input, keywords) {
  const normalized = normalize(input)
  return keywords.reduce((score, kw) => (normalized.includes(kw) ? score + kw.split(' ').length : score), 0)
}

function findService(input) {
  const normalized = normalize(input)
  return services.find((s) => {
    const id = s.id.replace(/-/g, ' ')
    return normalized.includes(id) || normalized.includes(normalize(s.name))
  })
}

function findCountry(input) {
  const normalized = normalize(input)
  return countries.find((c) => normalized.includes(normalize(c.name)) || normalized.includes(c.name.split(' ').pop().toLowerCase()))
}

export function getChatbotResponse(input) {
  const normalized = normalize(input)

  if (!normalized) {
    return 'Please type your question and I\'ll help you with study abroad, work visa, internships, or other Maverick Ghouse services.'
  }

  if (/^(hi|hello|hey|good morning|good evening|namaste|start)/.test(normalized)) {
    return `Hello! 👋 Welcome to **${companyInfo.name}** — your gateway to global education and immigration.\n\nI can help with:\n• Study Abroad & University Admissions\n• Work Visa & Skilled Migration\n• Internships (Domestic & International)\n• Language Training (IELTS, PTE, German)\n• Job Seekers & Employer Services\n• Contact & Consultation Booking\n\nWhat would you like to know?`
  }

  if (/thank|thanks|bye|goodbye/.test(normalized)) {
    return 'You\'re welcome! Feel free to ask anytime. For personalized guidance, book a **free consultation** or WhatsApp us at +91 89258 90437. Good luck with your global journey! 🌍'
  }

  if (/contact|phone|email|address|location|office|reach|call|whatsapp|where/.test(normalized)) {
    return `📍 **Contact Maverick Ghouse**\n\n**Address:** ${companyInfo.address}\n\n**Phone:** ${companyInfo.phones.join(' / ')}\n\n**Email:** ${companyInfo.emails.join(' / ')}\n\n**Hours:** ${companyInfo.hours}\n\n**WhatsApp:** +91 89258 90437\n\nVisit our Contact page or tap "Talk on WhatsApp" below for instant support.`
  }

  if (/about|who are|company|maverick|ghouse|story|founder/.test(normalized)) {
    return `**About ${companyInfo.name}**\n\n${companyInfo.description}\n\n**Highlights:**\n• ${companyInfo.stats.experience}\n• ${companyInfo.stats.visaSuccess}\n• ${companyInfo.stats.students}\n• ${companyInfo.stats.countries}\n• ${companyInfo.stats.partners}\n\n**Leadership:**\n${companyInfo.leadership.map((l) => `• ${l}`).join('\n')}\n\nLearn more on our About page.`
  }

  if (/book|consultation|appointment|apply|enquir|inquir|register/.test(normalized)) {
    return `📅 **Book a Free Consultation**\n\nOur expert counselors offer free profile assessments for study abroad, work visa, internships, and career guidance.\n\n**How to apply:**\n1. Visit our Contact page\n2. Fill the consultation form\n3. Or WhatsApp us at +91 89258 90437\n\nWe respond within **24 hours**. Mon–Sat 9 AM – 7 PM.`
  }

  if (/employer|recruit|hiring|workforce/.test(normalized)) {
    const s = services.find((x) => x.id === 'employers')
    return `**${s.name}**\n\n${s.summary}\n\nServices include international recruitment, candidate screening, compliance support, and onboarding assistance.\n\nContact us to discuss your hiring needs.`
  }

  if (/job seek|overseas job|career|resume|interview prep/.test(normalized)) {
    const s = services.find((x) => x.id === 'job-seekers')
    return `**${s.name}**\n\n${s.summary}\n\nWe support professionals targeting opportunities in the UK, Canada, Germany, Australia, and Europe.\n\nReady to start? Book a free consultation!`
  }

  if (/college|collaboration|campus|partnership|institution/.test(normalized)) {
    const s = services.find((x) => x.id === 'college-collaboration')
    return `**${s.name}**\n\n${s.summary}\n\nWe partner with colleges for campus drives, placement support, and student employability programs.`
  }

  if (/college student|student program|linkedin|mock interview|career roadmap|soft skill/.test(normalized)) {
    const s = services.find((x) => x.id === 'college-students')
    return `**${s.name}**\n\n${s.summary}`
  }

  if (/language|ielts|pte|toefl|german|spoken english|lord of languages/.test(normalized)) {
    const s = services.find((x) => x.id === 'languages')
    return `**${s.name}**\n\n${s.summary}\n\nCertified trainers help you achieve target scores for university admissions and visa requirements.\n\nVisit our Languages page for program details.`
  }

  if (/internship|intern/.test(normalized)) {
    const s = services.find((x) => x.id === 'internships')
    return `**Internship Programs**\n\n${s.summary}\n\n**Also available:**\n• Domestic internships in India\n• Paid internships with stipends\n• Industry training & placement support\n\n70% of our international interns receive pre-placement offers.`
  }

  if (/work visa|immigration|skilled|blue card|express entry|pr |permanent resident|migrate/.test(normalized)) {
    const s = services.find((x) => x.id === 'work-visa')
    return `**${s.name}**\n\n${s.summary}\n\n**Popular destinations:** ${s.destinations}\n\n**Typical eligibility:** ${s.eligibility}\n\n**Process:** Career Assessment → Job Market Analysis → Documentation → Visa Application → Relocation Support\n\n${companyInfo.stats.visaSuccess}. Book a free assessment today!`
  }

  if (/study abroad|university|admission|bachelor|master|degree|study in|education abroad/.test(normalized)) {
    const s = services.find((x) => x.id === 'study-abroad')
    return `**${s.name}**\n\n${s.summary}\n\n**Top destinations:** ${s.countries}\n\n**Our process:**\n${s.process}\n\nPrograms: Bachelor's, Master's, Diploma & Pathway courses.\n\nScholarship assistance available — 85% of students receive financial aid support.`
  }

  const country = findCountry(input)
  if (country) {
    return `**${country.name}**\n\n${country.highlights}\n\nMaverick Ghouse provides end-to-end support for study abroad, work visa, and internships in ${country.name}.\n\nWant a personalized roadmap? Book a free consultation!`
  }

  if (/countr|destination|where can|which country/.test(normalized)) {
    const list = countries.map((c) => `• **${c.name}** — ${c.highlights}`).join('\n')
    return `**Top Study & Work Destinations**\n\n${list}\n\nWe support 15+ countries total. Ask about any specific country for detailed guidance!`
  }

  const service = findService(input)
  if (service) {
    return `**${service.name}**\n\n${service.summary}${service.path ? `\n\nVisit: ${service.path}` : ''}`
  }

  let bestFaq = null
  let bestScore = 0
  for (const faq of faqs) {
    const score = scoreKeywords(input, faq.keywords)
    if (score > bestScore) {
      bestScore = score
      bestFaq = faq
    }
  }
  if (bestFaq && bestScore > 0) {
    return bestFaq.answer
  }

  return `I'm here to help with Maverick Ghouse services including **Study Abroad**, **Work Visa**, **Internships**, **Language Training**, **Job Seekers**, and **Employer Recruitment**.\n\nCould you tell me more specifically what you're looking for? Or try:\n• "Study abroad in Canada"\n• "Work visa for Germany"\n• "Contact details"\n• "Book free consultation"\n\nFor direct support: **+91 89258 90437** (WhatsApp)`
}

export function formatBotMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />')
}
