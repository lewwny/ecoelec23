import { motion } from "framer-motion";
import { Phone, ChevronDown, Zap, ShieldCheck, Clock } from "lucide-react";
import { siteData } from "../data/content";

export default function Hero() {
  const { hero, company } = siteData;

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt="Maison écologique avec panneaux solaires"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/75 to-emerald/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-light/20 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-light opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-light" />
          </span>
          <span className="text-white/90 text-sm font-medium">
            Disponible 24h/24 — Intervention en 48h
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {hero.title.split(" en ")[0]}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-sage to-energy">
            en Creuse
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href={company.phoneLink}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(82, 183, 136, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-light to-emerald text-white px-8 py-4 rounded-3xl text-lg font-bold shadow-2xl shadow-emerald/30 hover:shadow-emerald/50 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            {hero.cta}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-3xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            {hero.ctaSecondary}
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          <div className="flex items-center gap-2 text-white/70">
            <Clock className="w-5 h-5 text-emerald-light" />
            <span className="text-sm font-medium">24h/24 - 7j/7</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Zap className="w-5 h-5 text-energy" />
            <span className="text-sm font-medium">Intervention 48h</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <ShieldCheck className="w-5 h-5 text-emerald-light" />
            <span className="text-sm font-medium">
              {company.rating}/5 — {company.reviewCount} avis Google
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#apropos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Défiler vers le bas"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
}
