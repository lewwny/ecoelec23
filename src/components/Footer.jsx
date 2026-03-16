import { Leaf, Phone, MapPin, Clock } from "lucide-react";
import { siteData } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-light to-sage rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">{siteData.company.name}</span>
                <p className="text-xs text-sage-light">{siteData.footer.tagline}</p>
              </div>
            </div>
            <p className="text-sage-light text-sm leading-relaxed">
              Votre électricien de confiance en Creuse. Solutions écologiques et interventions rapides pour tous vos besoins électriques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-mint">Navigation</h3>
            <ul className="space-y-2">
              {siteData.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sage-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-mint">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sage-light text-sm">
                <Phone className="w-4 h-4 text-emerald-light flex-shrink-0" />
                <a href={siteData.company.phoneLink} className="hover:text-white transition-colors">
                  {siteData.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sage-light text-sm">
                <Clock className="w-4 h-4 text-emerald-light flex-shrink-0" />
                <span>Ouvert 24h/24 - 7j/7</span>
              </li>
              <li className="flex items-start gap-3 text-sage-light text-sm">
                <MapPin className="w-4 h-4 text-emerald-light flex-shrink-0 mt-0.5" />
                <span>{siteData.company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-light/30 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sage-light text-sm">{siteData.footer.copyright}</p>
          <div className="flex items-center gap-2 text-sage-light text-sm">
            <Leaf className="w-4 h-4 text-emerald-light" />
            <span>Conçu avec une approche éco-responsable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
