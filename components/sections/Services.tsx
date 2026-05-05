import { Zap, Home, Leaf, Phone, ArrowRight } from 'lucide-react'
import { siteData } from '@/data/content'
import ScrollReveal from '@/components/ScrollReveal'

const iconMap = { Zap, Home, Leaf } as const
type IconName = keyof typeof iconMap

const badgeColors: Record<string, string> = {
  Urgence: 'bg-red-100 text-red-700',
  Neuf: 'bg-blue-100 text-blue-700',
  Éco: 'bg-mint text-forest',
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">
            {siteData.services.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            {siteData.services.heading}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {siteData.services.items.map((service, i) => {
            const Icon = iconMap[service.icon as IconName]
            return (
              <ScrollReveal key={service.title} delay={i * 100}>
                <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-earth-dark h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-mint-light rounded-xl p-3">
                      <Icon className="w-6 h-6 text-forest" aria-hidden="true" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[service.badge] ?? 'bg-gray-100 text-gray-600'}`}
                    >
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-forest mb-2">{service.title}</h3>
                  <p className="text-forest/70 text-sm leading-relaxed">{service.description}</p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="text-center bg-forest rounded-2xl p-8 text-white">
            <p className="text-lg font-semibold mb-4">Besoin d&apos;une intervention ?</p>
            <a
              href={siteData.company.phoneLink}
              className="inline-flex items-center gap-2 bg-energy hover:bg-energy-light text-forest font-bold px-6 py-3 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Appeler le {siteData.company.phone}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
