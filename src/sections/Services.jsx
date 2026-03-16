import { motion } from "framer-motion";
import { Zap, Home, Leaf, ArrowRight } from "lucide-react";
import { siteData } from "../data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

const iconMap = {
  Zap: Zap,
  Home: Home,
  Leaf: Leaf,
};

const cardColors = [
  {
    bg: "from-emerald-light/10 to-mint-light/30",
    icon: "from-emerald-light to-emerald",
    badge: "bg-emerald-light/20 text-forest",
    border: "hover:border-emerald-light/50",
  },
  {
    bg: "from-energy/10 to-energy-light/20",
    icon: "from-energy to-energy-light",
    badge: "bg-energy/20 text-forest",
    border: "hover:border-energy/50",
  },
  {
    bg: "from-sage/10 to-mint/20",
    icon: "from-sage to-emerald-light",
    badge: "bg-sage/20 text-forest",
    border: "hover:border-sage/50",
  },
];

export default function Services() {
  const { services } = siteData;

  return (
    <section id="services" className="py-20 lg:py-28 bg-earth relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-mint-light/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-energy/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-mint-light/50 text-forest px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            {services.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            {services.heading}
          </h2>
          <p className="text-forest-light/70 max-w-2xl mx-auto text-lg">
            De l'urgence à la rénovation complète, nous vous accompagnons avec des solutions durables et respectueuses de l'environnement.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            const colors = cardColors[index];

            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    boxShadow: "0 20px 50px rgba(82, 183, 136, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`group bg-white rounded-3xl p-8 border border-mint/20 ${colors.border} transition-all duration-300 h-full flex flex-col`}
                >
                  {/* Badge */}
                  <span
                    className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold mb-6 ${colors.badge}`}
                  >
                    {service.badge}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${colors.icon} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald/10 group-hover:shadow-emerald/20 transition-shadow`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-forest mb-3">
                    {service.title}
                  </h3>
                  <p className="text-forest-light/70 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-emerald font-semibold mt-6 group/link"
                    whileHover={{ x: 5 }}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <motion.a
            href={siteData.company.phoneLink}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(82, 183, 136, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-forest to-emerald text-white px-8 py-4 rounded-3xl text-lg font-bold shadow-xl shadow-emerald/20 hover:shadow-emerald/40 transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            Besoin d'une intervention ?
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
