import { Leaf, Phone, Clock, MapPin } from 'lucide-react'
import { siteData } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-forest text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-3">
              <Leaf className="w-5 h-5 text-energy" aria-hidden="true" />
              <span>
                Eco Elec <span className="text-energy">23</span>
              </span>
            </div>
            <p className="text-white/60 text-sm">{siteData.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-white/90">Navigation</h3>
            <nav className="flex flex-col gap-2" aria-label="Liens de pied de page">
              {siteData.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/mentions-legales"
                className="text-white/60 hover:text-white text-sm transition-colors mt-2"
              >
                Mentions légales
              </a>
              <a
                href="/politique-confidentialite"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Politique de confidentialité
              </a>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-white/90">Contact</h3>
            <address className="not-italic flex flex-col gap-2 text-sm text-white/70">
              <a
                href={siteData.contact.phone.link}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-energy flex-shrink-0" aria-hidden="true" />
                {siteData.contact.phone.value}
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-energy flex-shrink-0" aria-hidden="true" />
                {siteData.contact.hours.value}
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-energy flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteData.contact.location.value}</span>
              </div>
            </address>
          </div>
        </div>

        <p className="pt-6 text-center text-white/40 text-sm">{siteData.footer.copyright}</p>
      </div>
    </footer>
  )
}
