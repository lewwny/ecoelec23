import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { siteData } from "../data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-energy text-energy" />
      ))}
    </div>
  );
}

const avatarColors = [
  "from-emerald-light to-emerald",
  "from-sage to-emerald-light",
  "from-energy to-energy-light",
];

export default function Testimonials() {
  const { testimonials, company } = siteData;

  return (
    <section id="avis" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-energy/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-mint-light/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-energy/15 text-forest px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-energy text-energy" />
            {testimonials.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            {testimonials.heading}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-energy text-energy" />
              ))}
            </div>
            <span className="text-forest font-bold text-xl">{company.rating}/5</span>
            <span className="text-forest-light">
              — {company.reviewCount} avis sur Google
            </span>
          </div>
        </AnimatedSection>

        {/* Reviews Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.reviews.map((review, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 15px 40px rgba(82, 183, 136, 0.12)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-mint/20 hover:border-emerald-light/40 transition-all duration-300 h-full flex flex-col relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-mint/40" />
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Review Text */}
                <p className="text-forest-light/80 leading-relaxed mt-4 flex-grow text-[15px]">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-mint/20">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${avatarColors[index]} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-forest-light/60">Avis Google vérifié</p>
                  </div>
                  <div className="ml-auto">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badge */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 border border-mint/20 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-emerald" />
            <span className="text-sm text-forest-light">
              Tous les avis sont vérifiés et proviennent de{" "}
              <span className="font-semibold text-forest">Google Business</span>
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
