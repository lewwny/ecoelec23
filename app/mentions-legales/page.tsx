import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteData } from '@/data/content'

export const metadata: Metadata = {
  title: 'Mentions légales | Eco Elec 23',
  description:
    'Mentions légales du site Eco Elec 23, électricien éco-responsable en Creuse.',
  alternates: { canonical: 'https://ecoelec23.fr/mentions-legales' },
  robots: { index: true, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-cream min-h-screen">
        <article className="max-w-3xl mx-auto px-4 prose-style">
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">
            Informations légales
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-forest mt-2 mb-8">
            Mentions légales
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">Éditeur du site</h2>
            <div className="text-forest/80 leading-relaxed space-y-1">
              <p>
                <strong>{siteData.company.name}</strong>
              </p>
              <p>Siège social : {siteData.company.location}, Creuse (23), France</p>
              <p>
                Téléphone :{' '}
                <a
                  href={siteData.company.phoneLink}
                  className="text-emerald hover:underline"
                >
                  {siteData.company.phone}
                </a>
              </p>
              <p>
                E-mail :{' '}
                <a
                  href="mailto:contact@ecoelec23.fr"
                  className="text-emerald hover:underline"
                >
                  contact@ecoelec23.fr
                </a>
              </p>
              <p className="text-forest/60 text-sm mt-3">
                Forme juridique, numéro SIRET et numéro de TVA intracommunautaire : à compléter
                avec les informations de l&apos;entreprise.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">Directeur de la publication</h2>
            <p className="text-forest/80 leading-relaxed">
              Le directeur de la publication est le représentant légal d&apos;Eco Elec 23.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">Hébergement</h2>
            <p className="text-forest/80 leading-relaxed">
              Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis —{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:underline"
              >
                vercel.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">Propriété intellectuelle</h2>
            <p className="text-forest/80 leading-relaxed">
              L&apos;ensemble du contenu du site (textes, images, logo, graphismes, structure) est
              la propriété exclusive d&apos;Eco Elec 23 et est protégé par les lois françaises et
              internationales relatives à la propriété intellectuelle. Toute reproduction,
              représentation, modification, publication ou adaptation, totale ou partielle, sans
              autorisation écrite préalable est interdite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">Responsabilité</h2>
            <p className="text-forest/80 leading-relaxed">
              Les informations diffusées sur ce site sont fournies à titre indicatif. Eco Elec 23
              s&apos;efforce de maintenir des informations exactes et à jour mais ne peut garantir
              l&apos;exactitude, la complétude ou l&apos;actualité des informations publiées. En
              conséquence, l&apos;utilisateur reconnaît utiliser ces informations sous sa
              responsabilité exclusive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">Liens hypertextes</h2>
            <p className="text-forest/80 leading-relaxed">
              Le site peut contenir des liens vers d&apos;autres sites internet. Eco Elec 23
              n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
              leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forest mb-3">Droit applicable</h2>
            <p className="text-forest/80 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
