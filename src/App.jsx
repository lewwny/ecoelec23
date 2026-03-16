import { HelmetProvider, Helmet } from "react-helmet-async";
import { siteData } from "./data/content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="fr" />
        <title>{siteData.seo.title}</title>
        <meta name="description" content={siteData.seo.description} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="électricien Creuse, électricien Guéret, dépannage électrique 24h, Eco Elec 23, électricien éco-responsable, installation électrique Creuse, rénovation électrique, Saint-Léger-le-Guérétois"
        />
        <meta property="og:title" content={siteData.seo.title} />
        <meta property="og:description" content={siteData.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href="https://ecoelec23.fr" />
        <script type="application/ld+json">
          {JSON.stringify(siteData.jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-cream">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
