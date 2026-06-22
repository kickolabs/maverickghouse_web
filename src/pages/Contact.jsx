import { images } from '../data/siteData'
import ConsultationForm from '../components/ConsultationForm'
import { AppIcon } from '../components/icons/AppIcon'
import { FadeIn, PageHero } from '../components/UI'

const contactInfo = [
  {
    title: 'Phone',
    value: '+91 78458 78744',
    sub: '+91 89258 98725',
    icon: 'phone',
  },
  {
    title: 'Email',
    value: 'captain@maverickghouse.com',
    sub: 'ghouse@maverickghouse.com',
    icon: 'mail',
  },
  {
    title: 'Office Address',
    value: 'Maverick Ghouse',
    sub: '3, Mosque St, Jaya Nagar, Porur, Chennai, Tamil Nadu 600116,  India',
    icon: 'map-pin',
  },
  {
    title: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 7:00 PM',
    sub: 'Sunday: By Appointment',
    icon: 'clock',
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to start your global journey? Reach out to our expert counselors today."
        badge="Get In Touch"
        image={images.contact}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="heading-md text-navy mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-5 p-6 rounded-2xl bg-light hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <AppIcon name={info.icon} size="lg" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-navy text-sm mb-1">{info.title}</h3>
                      <p className="text-sm text-gray-700">{info.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200">
                <iframe
                  title="Maverick Ghouse Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.011937006436!2d80.15191927507756!3d13.03491168728634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzA1LjciTiA4MMKwMDknMTYuMiJF!5e0!3m2!1sen!2sin!4v1781674886129!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ConsultationForm title="Book Your Free Consultation" />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
