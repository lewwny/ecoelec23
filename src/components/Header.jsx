import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Phone, Menu, X } from "lucide-react";
import { siteData } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-emerald/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#accueil"
            onClick={(e) => handleNavClick(e, "#accueil")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-light to-forest rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-energy rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight ${
                  scrolled ? "text-forest" : "text-white"
                }`}
              >
                {siteData.company.name}
              </span>
              <span
                className={`text-[10px] tracking-wider uppercase ${
                  scrolled ? "text-emerald" : "text-emerald-light"
                }`}
              >
                Électricien Éco
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {siteData.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-emerald-light/10 ${
                  scrolled
                    ? "text-forest-light hover:text-forest"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href={siteData.company.phoneLink}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(82, 183, 136, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-light to-emerald text-white px-5 py-2.5 rounded-2xl text-sm font-semibold shadow-lg shadow-emerald/20 hover:shadow-emerald/40 transition-shadow duration-300"
            >
              <Phone className="w-4 h-4" />
              {siteData.nav.cta}
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl ${
                scrolled ? "text-forest" : "text-white"
              }`}
              aria-label="Menu de navigation"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-mint/30"
          >
            <div className="px-4 py-4 space-y-1">
              {siteData.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-2xl text-forest-light font-medium hover:bg-mint-light/50 hover:text-forest transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteData.company.phoneLink}
                className="flex items-center justify-center gap-2 mt-3 bg-gradient-to-r from-emerald-light to-emerald text-white px-5 py-3 rounded-2xl font-semibold"
              >
                <Phone className="w-4 h-4" />
                {siteData.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
