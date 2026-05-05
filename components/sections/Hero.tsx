import Image from 'next/image'
import { Phone, ChevronDown, Clock, Star, Zap } from 'lucide-react'
import { siteData } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src={siteData.hero.backgroundImage}
        alt="Électricien professionnel en Creuse"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest/75" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-sm">
          <span className="w-2 h-2 bg-energy rounded-full animate-pulse" aria-hidden="true" />
          Disponible 24h/24 — Intervention en 48h
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          {siteData.hero.title}
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          {siteData.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteData.company.phoneLink}
            className="flex items-center justify-center gap-2 bg-energy hover:bg-energy-light text-forest font-bold px-8 py-4 rounded-full text-lg transition-colors"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            {siteData.hero.cta}
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors backdrop-blur-sm"
          >
            {siteData.hero.ctaSecondary}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-energy" aria-hidden="true" />
            <span>24h/24 — 7j/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-energy" aria-hidden="true" />
            <span>Intervention 48h</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-energy fill-current" aria-hidden="true" />
            <span>4.9/5 — 16 avis Google</span>
          </div>
        </div>
      </div>

      <a
        href="#apropos"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </a>
    </section>
  )
}
