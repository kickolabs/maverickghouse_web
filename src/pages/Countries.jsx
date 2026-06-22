import { Link } from 'react-router-dom'
import { images } from '../data/siteData'
import { countries } from '../data/countries'
import CountryCard from '../components/Cards'
import { FadeIn, PageHero } from '../components/UI'

export default function Countries() {
  return (
    <>
      <PageHero
        title="Explore Study Destinations"
        subtitle="Discover world-class education and career opportunities across 8 premier countries."
        badge="Countries"
        image={images.campus}
      />

      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-navy mb-4">Choose Your Destination</h2>
            <p className="text-body max-w-2xl mx-auto">
              Each country offers unique advantages — from tuition-free education in Germany to post-study work visas in Canada and Australia.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, i) => (
              <CountryCard key={country.slug} country={country} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="heading-lg text-navy mb-4">Not Sure Which Country?</h2>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Our counselors will help you find the perfect destination based on your profile, budget, and career goals.
            </p>
            <Link to="/contact" className="btn-primary !text-xs">Get Free Country Comparison</Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
