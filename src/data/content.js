export const siteData = {
  company: {
    name: "Eco Elec 23",
    phone: "06 36 47 07 78",
    phoneLink: "tel:+33636470778",
    hours: "Ouvert 24h/24 - Intervention rapide en 48h",
    location: "Saint-Léger-le-Guérétois (Proche Guéret)",
    area: "Toute la Creuse (23) et départements limitrophes",
    rating: 4.9,
    reviewCount: 16,
  },

  seo: {
    title: "Eco Elec 23 | Électricien 24/24 à Guéret et en Creuse",
    description:
      "Eco Elec 23, votre électricien disponible 24h/24 à Guéret et dans toute la Creuse. Solutions écologiques, intervention rapide en 48h. Noté 4.9/5 sur Google. Devis gratuit !",
  },

  nav: {
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "À propos", href: "#apropos" },
      { label: "Services", href: "#services" },
      { label: "Avis", href: "#avis" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Devis Gratuit",
  },

  hero: {
    title: "Votre Électricien 24/24 en Creuse",
    subtitle:
      "Des solutions électriques modernes, fiables et respectueuses de l'environnement.",
    cta: "Urgence Dépannage 24/7",
    ctaSecondary: "Devis Gratuit",
    backgroundImage:
      "https://images.unsplash.com/photo-1660330589243-4c640d878052?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  about: {
    sectionTitle: "À propos",
    heading: "Votre partenaire électrique éco-responsable",
    text: "Eco Elec 23, l'entreprise à vos côtés pour tous vos projets électriques : neuf, rénovation, ou même dépannage. Nous sommes là 24h/24 pour vous dépanner. Basée sur la commune de Saint-Léger-le-Guérétois proche de Guéret, nous proposons des interventions rapides et efficaces. Nous intervenons dans un délai de 48h auprès des particuliers et nous nous déplaçons dans toute la Creuse et les départements limitrophes. Contactez-nous pour toute information supplémentaire ou obtenir un devis gratuit.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
    stats: [
      { value: "24/7", label: "Disponibilité" },
      { value: "48h", label: "Intervention" },
      { value: "4.9/5", label: "Satisfaction" },
      { value: "23", label: "Creuse & alentours" },
    ],
  },

  services: {
    sectionTitle: "Nos Services",
    heading: "Des solutions adaptées à vos besoins",
    items: [
      {
        icon: "Zap",
        title: "Dépannage 24/24",
        description:
          "Intervention rapide en 48h pour tous vos problèmes électriques. Disponible jour et nuit, nous sommes là quand vous avez besoin de nous.",
        badge: "Urgence",
      },
      {
        icon: "Home",
        title: "Installation & Neuf",
        description:
          "Solutions modernes et performantes pour vos constructions neuves. Installation électrique complète aux normes les plus récentes.",
        badge: "Neuf",
      },
      {
        icon: "Leaf",
        title: "Rénovation Écologique",
        description:
          "Mise aux normes de votre installation électrique avec des solutions respectueuses de l'environnement et économes en énergie.",
        badge: "Éco",
      },
    ],
  },

  testimonials: {
    sectionTitle: "Avis Clients",
    heading: "Ce que disent nos clients",
    reviews: [
      {
        name: "MEYA",
        rating: 5,
        text: "Je recommande à 100%. Travail parfait, très professionnel. Merci",
      },
      {
        name: "Blandine Michel",
        rating: 5,
        text: "Personne très sérieuse et compétente. Un projet électrique mis en place avec ce professionnel, tout s'est très bien passé même au-dessus de nos attentes.",
      },
      {
        name: "Mimosa Fleury",
        rating: 5,
        text: "Chantier réalisé dans les plus brefs délais, prix très raisonnable, personne agréable et excellente communication je recommande à 100% 👍",
      },
    ],
  },

  contact: {
    sectionTitle: "Contact",
    heading: "Contactez-nous",
    subtitle:
      "Besoin d'un électricien ? Nous sommes disponibles 24h/24 pour répondre à vos urgences.",
    phone: {
      label: "Téléphone",
      value: "06 36 47 07 78",
      link: "tel:+33636470778",
    },
    hours: {
      label: "Horaires",
      value: "Ouvert 24h/24 - 7j/7",
    },
    location: {
      label: "Zone d'intervention",
      value: "Saint-Léger-le-Guérétois, Creuse (23)",
      detail: "Toute la Creuse et départements limitrophes",
    },
    mapPlaceholder: true,
  },

  footer: {
    copyright: "© 2026 Eco Elec 23. Tous droits réservés.",
    tagline: "Électricien éco-responsable en Creuse",
  },

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Eco Elec 23",
    description:
      "Électricien éco-responsable disponible 24h/24 à Guéret et dans toute la Creuse. Dépannage, installation neuf et rénovation écologique.",
    telephone: "+33636470778",
    url: "https://ecoelec23.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Léger-le-Guérétois",
      addressRegion: "Creuse",
      postalCode: "23000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.1833",
      longitude: "1.8667",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Creuse",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "16",
    },
    priceRange: "€€",
  },
};
