'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, Leaf } from 'lucide-react'
import { siteData } from '@/data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkHref = (href: string) => (isHome ? href : `/${href}`)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-forest shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <Leaf className="w-6 h-6 text-energy" aria-hidden="true" />
          <span>
            Eco Elec <span className="text-energy">23</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {siteData.nav.links.map((link) => (
            <a
              key={link.href}
              href={linkHref(link.href)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteData.company.phoneLink}
            className="hidden sm:flex items-center gap-2 bg-energy hover:bg-energy-light text-forest font-semibold text-sm px-4 py-2 rounded-full transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {siteData.nav.cta}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-1 relative w-7 h-7"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-6 h-6 absolute inset-0 m-auto transition-all duration-300 ${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
              aria-hidden="true"
            />
            <X
              className={`w-6 h-6 absolute inset-0 m-auto transition-all duration-300 ${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="mobile-menu md:hidden bg-forest" data-open={menuOpen}>
        <div className="mobile-menu-inner">
          <nav
            className="border-t border-white/10 px-4 py-4 flex flex-col gap-4"
            aria-label="Navigation mobile"
          >
            {siteData.nav.links.map((link, i) => (
              <a
                key={link.href}
                href={linkHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="mobile-menu-item text-white/90 hover:text-white font-medium"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteData.company.phoneLink}
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-item flex items-center gap-2 bg-energy text-forest font-semibold px-4 py-2 rounded-full w-fit"
              style={{ animationDelay: `${siteData.nav.links.length * 60}ms` }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Devis Gratuit
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
