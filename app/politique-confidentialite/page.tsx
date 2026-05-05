import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Eco Elec 23',
  description:
    'Politique de confidentialité et de protection des données personnelles du site Eco Elec 23.',
  alternates: { canonical: 'https://ecoelec23.fr/politique-confidentialite' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-cream min-h-screen">
        <article className="max-w-3xl mx-auto px-4">
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">
            RGPD
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-forest mt-2 mb-8">
            Politique de confidentialité
          </h1>

          <p className="text-forest/70 mb-8 italic">
            Dernière mise à jour : mai 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">1. Responsable du traitement</h2>
            <p className="text-forest/80 leading-relaxed">
              Le responsable du traitement des données personnelles collectées sur ce site est
              <strong> Eco Elec 23</strong>, dont le siège est situé à Saint-Léger-le-Guérétois,
              Creuse (23), France.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">2. Données collectées</h2>
            <p className="text-forest/80 leading-relaxed mb-3">
              Lorsque vous utilisez le formulaire de contact, nous collectons les données
              suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-1 text-forest/80">
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Contenu du message</li>
            </ul>
            <p className="text-forest/80 leading-relaxed mt-3">
              Aucune donnée n&apos;est collectée à votre insu et aucune donnée n&apos;est cédée à
              des tiers à des fins commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">3. Finalité du traitement</h2>
            <p className="text-forest/80 leading-relaxed">
              Vos données sont utilisées exclusivement pour répondre à vos demandes
              d&apos;information, vous transmettre un devis ou organiser une intervention. Elles
              ne sont pas utilisées à des fins de prospection commerciale.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">4. Base légale</h2>
            <p className="text-forest/80 leading-relaxed">
              Le traitement de vos données est fondé sur votre consentement, recueilli lors de
              l&apos;envoi du formulaire de contact (article 6.1.a du RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">5. Durée de conservation</h2>
            <p className="text-forest/80 leading-relaxed">
              Les données collectées via le formulaire de contact sont conservées pendant une
              durée maximale de 3 ans à compter du dernier contact, puis supprimées
              automatiquement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">6. Cookies</h2>
            <p className="text-forest/80 leading-relaxed">
              Ce site n&apos;utilise <strong>aucun cookie de suivi publicitaire ni de mesure
              d&apos;audience tiers</strong>. Seuls les cookies strictement nécessaires au
              fonctionnement du site peuvent être déposés et ne nécessitent pas votre
              consentement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">7. Vos droits</h2>
            <p className="text-forest/80 leading-relaxed mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés, vous disposez des droits suivants sur vos données :
            </p>
            <ul className="list-disc pl-6 space-y-1 text-forest/80">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-forest/80 leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous par e-mail à{' '}
              <a
                href="mailto:contact@ecoelec23.fr"
                className="text-emerald hover:underline font-medium"
              >
                contact@ecoelec23.fr
              </a>{' '}
              ou par téléphone au{' '}
              <a href="tel:+33636470778" className="text-emerald hover:underline font-medium">
                06 36 47 07 78
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-forest mb-3">8. Réclamation</h2>
            <p className="text-forest/80 leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de
              l&apos;Informatique et des Libertés) :{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:underline"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forest mb-3">9. Sécurité</h2>
            <p className="text-forest/80 leading-relaxed">
              Nous mettons en œuvre les mesures techniques et organisationnelles nécessaires pour
              garantir la sécurité de vos données contre toute perte, accès non autorisé,
              divulgation ou modification.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
