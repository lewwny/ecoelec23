import { Phone, Clock, MapPin, ArrowRight } from 'lucide-react'
import { siteData } from '@/data/content'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/sections/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">
            {siteData.contact.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            {siteData.contact.heading}
          </h2>
          <p className="text-forest/70 mt-3 max-w-xl mx-auto">{siteData.contact.subtitle}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScrollReveal className="flex flex-col gap-4">
            <a
              href={siteData.contact.phone.link}
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-earth-dark hover:border-emerald transition-colors group"
            >
              <div className="bg-forest rounded-xl p-3 group-hover:bg-emerald transition-colors">
                <Phone className="w-6 h-6 text-energy" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-forest/50 uppercase tracking-wide">
                  {siteData.contact.phone.label}
                </div>
                <div className="text-xl font-bold text-forest">{siteData.contact.phone.value}</div>
                <div className="text-xs text-emerald mt-0.5">Appel gratuit — Disponible 24h/24</div>
              </div>
              <ArrowRight
                className="w-5 h-5 text-forest/30 ml-auto group-hover:text-emerald transition-colors"
                aria-hidden="true"
              />
            </a>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-earth-dark">
              <div className="bg-forest rounded-xl p-3">
                <Clock className="w-6 h-6 text-energy" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-forest/50 uppercase tracking-wide">
                  {siteData.contact.hours.label}
                </div>
                <div className="text-lg font-bold text-forest">{siteData.contact.hours.value}</div>
                <div className="text-xs text-emerald mt-0.5">Intervention rapide en 48h</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-earth-dark">
              <div className="bg-forest rounded-xl p-3">
                <MapPin className="w-6 h-6 text-energy" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-forest/50 uppercase tracking-wide">
                  {siteData.contact.location.label}
                </div>
                <div className="text-lg font-bold text-forest">
                  {siteData.contact.location.value}
                </div>
                <div className="text-xs text-forest/60 mt-0.5">
                  {siteData.contact.location.detail}
                </div>
              </div>
            </div>

            <div className="bg-mint-light rounded-2xl p-5">
              <p className="text-sm font-semibold text-forest mb-3">Villes desservies :</p>
              <ul className="flex flex-wrap gap-2" aria-label="Zones d'intervention">
                {siteData.contact.cities.map((city) => (
                  <li
                    key={city}
                    className="bg-white text-forest text-xs font-medium px-3 py-1.5 rounded-full border border-mint"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
