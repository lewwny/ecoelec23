import Image from 'next/image'
import { Star, Shield } from 'lucide-react'
import { siteData } from '@/data/content'
import ScrollReveal from '@/components/ScrollReveal'

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-earth">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">
            {siteData.about.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            {siteData.about.heading}
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={siteData.about.image}
                  alt="Électricien Eco Elec 23 au travail"
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="bg-energy rounded-xl p-2">
                  <Star className="w-5 h-5 text-forest fill-current" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-forest text-lg">4.9/5</div>
                  <div className="text-xs text-forest/60">Google Reviews</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-forest/80 leading-relaxed mb-8">{siteData.about.text}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteData.about.stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-extrabold text-forest">{stat.value}</div>
                  <div className="text-xs text-forest/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-mint-light rounded-xl p-4">
              <Shield className="w-6 h-6 text-emerald flex-shrink-0" aria-hidden="true" />
              <span className="text-sm text-forest font-medium">
                Certifié et assuré — Interventions conformes aux normes NF C 15-100
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
