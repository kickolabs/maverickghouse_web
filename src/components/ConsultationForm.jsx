import { useState } from 'react'
import { motion } from 'framer-motion'
import { AppIcon } from './icons/AppIcon'

const WHATSAPP_NUMBER = '918925890437'

const programs = [
  'Study Abroad',
  'International Internships',
  'Work Visa',
  'IELTS / PTE / TOEFL',
  'German Language',
  'Spoken English',
  'Other',
]

export default function ConsultationForm({ compact = false, title = 'Book Your Free Consultation' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const message = [
      '*New Consultation Request - Maverick Ghouse*',
      '',
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      `*Program:* ${formData.program}`,
      `*Message:* ${formData.message || 'N/A'}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
    setFormData({
      name: '',
      phone: '',
      email: '',
      program: '',
      message: '',
    })
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card-light p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AppIcon name="check" size="xl" className="text-green-600" strokeWidth={2.5} />
        </div>
        <h3 className="heading-md text-navy mb-2">Thank You!</h3>
        <p className="text-body">Your enquiry has been sent via WhatsApp. Our counselor will contact you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <div className={`glass-card-light ${compact ? 'p-6' : 'p-8 md:p-10'}`}>
      {!compact && (
        <div className="mb-8">
          <h3 className="heading-md text-navy mb-2">{title}</h3>
          <p className="text-body text-sm">Fill in your details and our expert counselors will reach out to you.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-5'}>
          <div>
            <label className="block text-sm font-medium text-navy mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-inter text-sm"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-inter text-sm"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>
        <div className={compact ? '' : 'grid md:grid-cols-2 gap-5'}>
          <div>
            <label className="block text-sm font-medium text-navy mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-inter text-sm"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-2">Program Interest *</label>
            <select
              name="program"
              required
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-inter text-sm bg-white"
            >
              <option value="">Select a program</option>
              {programs.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Message</label>
          <textarea
            name="message"
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-inter text-sm resize-none"
            placeholder="Tell us about your goals..."
          />
        </div>
        <button type="submit" className="btn-primary w-full !text-sm">
          Submit Consultation Request
        </button>
      </form>
    </div>
  )
}
