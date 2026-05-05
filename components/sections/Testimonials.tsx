import { Star, Quote } from 'lucide-react'
import { siteData } from '@/data/content'
import ScrollReveal from '@/components/ScrollReveal'

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 bg-earth">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">
            {siteData.testimonials.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            {siteData.testimonials.heading}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4" aria-label={`Note : ${siteData.company.rating}/5 sur ${siteData.company.reviewCount} avis`}>
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-energy fill-current" />
              ))}
            </div>
            <span className="font-bold text-forest">{siteData.company.rating}/5</span>
            <span className="text-forest/60 text-sm">
              ({siteData.company.reviewCount} avis Google)
            </span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {siteData.testimonials.reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 100}>
              <article className="bg-white rounded-2xl p-6 shadow-sm border border-earth-dark h-full flex flex-col">
                <Quote className="w-8 h-8 text-mint mb-4 flex-shrink-0" aria-hidden="true" />
                <p className="text-forest/80 leading-relaxed mb-4 text-sm flex-1">
                  {review.text}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-earth">
                  <div>
                    <div className="font-semibold text-forest">{review.name}</div>
                    <div className="flex gap-0.5 mt-1" aria-label={`${review.rating} étoiles sur 5`}>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-energy fill-current" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-forest/40 bg-earth px-2 py-1 rounded-full">
                    Avis vérifié
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
