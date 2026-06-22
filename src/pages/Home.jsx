import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { images, stats, services, trustPartners } from '../data/siteData'
import { countries } from '../data/countries'
import { testimonials } from '../data/testimonials'
import CountryCard, { ServiceCard, TestimonialCard, CheckListItem } from '../components/Cards'
import { FadeIn, CTABanner } from '../components/UI'

export default function Home() {
  return (
    <>
      {/* Full Screen Hero */}
      <section className="relative h-screen flex items-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={images.hero}
      alt="Maverick Ghouse"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="max-w-2xl">

      <span className="inline-block text-red-500 font-semibold uppercase tracking-[3px] mb-4">
        Maverick Ghouse
      </span>

      <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
        Study Abroad.
        <br />
        Work Abroad.
        <br />
        Succeed Globally.
      </h1>

      <p className="text-white/80 text-lg mb-8">
        Study Abroad • Internships • Work Visa • Language Training
      </p>

      <div className="flex gap-4">
        <button className="bg-red-600 text-white px-8 py-4 rounded-md font-medium hover:bg-red-700 transition">
          Get Started
        </button>

        <button className="border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>

    </div>

  </div>

</section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="bg-light py-8 overflow-hidden">
        <div className="container-custom px-4">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-6">Trusted by students at leading institutions worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustPartners.map((partner) => (
              <span key={partner} className="text-gray-400 font-poppins font-semibold text-sm whitespace-nowrap">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img src={images.about} alt="International students" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6">
                  <p className="text-white font-poppins font-bold text-2xl">5+ Years</p>
                  <p className="text-white/70 text-sm">of Global Education Excellence</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">About Maverick Ghouse</span>
              <h2 className="heading-lg text-navy mb-6">Building Futures Beyond Borders</h2>
              <p className="text-body mb-8">
                Maverick Ghouse bridges the gap between global aspirations and reality. We provide holistic solutions for students and professionals looking to excel in an international landscape.
              </p>
              <ul className="space-y-4 mb-8">
                {['Expert Guidance from certified counselors', 'Global network of 300+ partner institutions', 'End-to-end support from application to arrival', 'Personalized roadmaps for every student'].map((item) => (
                  <CheckListItem key={item}>{item}</CheckListItem>
                ))}
              </ul>
              <Link to="/about" className="btn-primary !text-xs">Discover Our Story</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Our Expertise</span>
            <h2 className="heading-lg text-navy mb-4">Comprehensive Global Pathways</h2>
            <p className="text-body max-w-2xl mx-auto">Everything you need to launch your international career, under one trusted roof.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Countries Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Destinations</span>
            <h2 className="heading-lg text-navy mb-4">Explore Top Study Destinations</h2>
            <p className="text-body max-w-2xl mx-auto">Choose from 15+ countries with world-class education and career opportunities.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.slice(0, 4).map((country, i) => (
              <CountryCard key={country.slug} country={country} index={i} />
            ))}
          </div>
          <FadeIn className="text-center mt-12">
            <Link to="/countries" className="btn-outline-dark !text-xs">View All Countries</Link>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Success Stories</span>
            <h2 className="heading-lg text-navy mb-4">What Our Students Say</h2>
            <p className="text-body max-w-2xl mx-auto">Real stories from students who transformed their futures with Maverick Ghouse.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
          <FadeIn className="text-center mt-12">
            <Link to="/success-stories" className="btn-primary !text-xs">Read More Stories</Link>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Global Journey?"
        subtitle="Book a free consultation with our expert counselors and take the first step toward your international future."
        primaryText="Book Free Consultation"
        primaryLink="/contact"
        secondaryText="Explore Programs"
        secondaryLink="/study-abroad"
      />
    </>
  )
}
