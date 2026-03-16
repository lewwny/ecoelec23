import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Sun } from "lucide-react";
import { siteData } from "../data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

export default function About() {
  const { about } = siteData;

  return (
    <section id="apropos" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint-light/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Label */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-mint-light/50 text-forest px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            {about.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            {about.heading}
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald/10">
                <img
                  src={about.image}
                  alt="Électricien éco-responsable au travail en Creuse"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl shadow-xl shadow-emerald/10 p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-energy to-energy-light rounded-xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <p className="font-bold text-forest text-lg">4.9/5</p>
                  <p className="text-xs text-forest-light">Google Reviews</p>
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-emerald-light/30 rounded-3xl" />
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <div>
            <AnimatedSection delay={0.3}>
              <p className="text-forest-light/80 text-lg leading-relaxed mb-8">
                {about.text}
              </p>
            </AnimatedSection>

            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px rgba(82, 183, 136, 0.15)",
                    }}
                    className="bg-white rounded-2xl p-5 border border-mint/30 hover:border-emerald-light/50 transition-all duration-300"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald to-emerald-light">
                      {stat.value}
                    </p>
                    <p className="text-sm text-forest-light mt-1">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Trust Element */}
            <AnimatedSection delay={0.6} className="mt-8">
              <div className="flex items-center gap-3 bg-mint-light/40 rounded-2xl p-4">
                <ShieldCheck className="w-8 h-8 text-emerald flex-shrink-0" />
                <p className="text-sm text-forest-light">
                  <span className="font-semibold text-forest">Certifié et assuré</span> — Interventions conformes aux normes NF C 15-100 en vigueur.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
