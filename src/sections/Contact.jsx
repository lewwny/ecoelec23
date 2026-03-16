import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Zap, Send } from "lucide-react";
import { siteData } from "../data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

const contactCards = [
  {
    icon: Phone,
    gradient: "from-emerald-light to-emerald",
    shadowColor: "shadow-emerald/15",
  },
  {
    icon: Clock,
    gradient: "from-energy to-energy-light",
    shadowColor: "shadow-energy/15",
  },
  {
    icon: MapPin,
    gradient: "from-sage to-emerald-light",
    shadowColor: "shadow-sage/15",
  },
];

export default function Contact() {
  const { contact, company } = siteData;

  const contactInfo = [
    {
      label: contact.phone.label,
      value: contact.phone.value,
      detail: "Appel gratuit — Disponible 24h/24",
      link: contact.phone.link,
    },
    {
      label: contact.hours.label,
      value: contact.hours.value,
      detail: "Intervention rapide en 48h",
      link: null,
    },
    {
      label: contact.location.label,
      value: contact.location.value,
      detail: contact.location.detail,
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-earth relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint-light/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-mint-light/50 text-forest px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Send className="w-4 h-4" />
            {contact.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            {contact.heading}
          </h2>
          <p className="text-forest-light/70 max-w-2xl mx-auto text-lg">
            {contact.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Cards */}
          <div>
            <StaggerContainer className="space-y-5">
              {contactInfo.map((info, index) => {
                const { icon: Icon, gradient, shadowColor } = contactCards[index];
                const Wrapper = info.link ? "a" : "div";
                const wrapperProps = info.link
                  ? { href: info.link }
                  : {};

                return (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 15px 40px rgba(82, 183, 136, 0.12)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Wrapper
                        {...wrapperProps}
                        className={`flex items-start gap-5 bg-white rounded-3xl p-6 border border-mint/20 hover:border-emerald-light/40 transition-all duration-300 ${
                          info.link ? "cursor-pointer" : ""
                        } block`}
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${shadowColor}`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-forest-light/60 font-medium mb-1">
                            {info.label}
                          </p>
                          <p className="text-xl font-bold text-forest">
                            {info.value}
                          </p>
                          <p className="text-sm text-forest-light/60 mt-1">
                            {info.detail}
                          </p>
                        </div>
                      </Wrapper>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* CTA */}
            <AnimatedSection delay={0.5} className="mt-8">
              <motion.a
                href={company.phoneLink}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(82, 183, 136, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-light to-emerald text-white px-8 py-4 rounded-3xl text-lg font-bold shadow-2xl shadow-emerald/25 hover:shadow-emerald/40 transition-all duration-300 w-full"
              >
                <Zap className="w-5 h-5" />
                Appeler maintenant — {company.phone}
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-3xl overflow-hidden border border-mint/20 shadow-lg shadow-emerald/5 h-full min-h-[400px]">
              <iframe
                title="Localisation Eco Elec 23 - Saint-Léger-le-Guérétois, Creuse"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44444.44!2d1.8667!3d46.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f9a0a0a0a0a0a1%3A0x0!2sSaint-L%C3%A9ger-le-Gu%C3%A9r%C3%A9tois!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Local SEO Block */}
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="bg-gradient-to-r from-forest to-forest-light rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Votre électricien de proximité en Creuse
            </h3>
            <p className="text-sage-light max-w-3xl mx-auto leading-relaxed mb-6">
              Eco Elec 23 intervient à Saint-Léger-le-Guérétois, Guéret, et dans toute la Creuse (23) ainsi que les départements limitrophes. 
              Dépannage électrique 24h/24, installation neuf, rénovation écologique — nous sommes votre partenaire électrique de confiance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Guéret",
                "Saint-Léger-le-Guérétois",
                "Aubusson",
                "La Souterraine",
                "Bourganeuf",
                "Creuse (23)",
              ].map((city) => (
                <span
                  key={city}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm text-white/90"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
