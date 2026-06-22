import { images } from '../data/siteData'
import { testimonials, successStats } from '../data/testimonials'
import { TestimonialCard } from '../components/Cards'
import { AppIcon } from '../components/icons/AppIcon'
import { FadeIn, PageHero, CTABanner } from '../components/UI'

export default function SuccessStories() {
  const videoTestimonials = testimonials.filter((t) => t.video)

  return (
    <>
      <PageHero
        title="Success Stories"
        subtitle="Real journeys, real transformations. Hear from students who achieved their global dreams with Maverick Ghouse."
        badge="Testimonials"
        image={images.success}
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-2">{stat.value}</p>
                  <p className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Student Testimonials</h2>
            <p className="text-body max-w-2xl mx-auto">Stories from students across programs and destinations.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Video Testimonials</h2>
            <p className="text-body max-w-2xl mx-auto">Watch our students share their experiences in their own words.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-video bg-navy shadow-lg">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                      <AppIcon name="play" size="lg" className="text-white fill-white ml-1" />
                    </div>
                    <h3 className="font-poppins font-semibold text-white">{t.name}</h3>
                    <p className="text-white/70 text-sm">{t.program} — {t.country}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Write Your Own Success Story"
        subtitle="Join 5000+ students who transformed their futures with Maverick Ghouse."
        primaryLink="/contact"
      />
    </>
  )
}
