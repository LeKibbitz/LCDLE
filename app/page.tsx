import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-[#1a1f36] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <Image
                  src="/hands.jpg"
                  alt="Expertise hands"
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                      NOTRE EXPERTISE
                    </h1>
                    <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto">
                      AMÉLIORER LA SANTÉ ET<br />
                      LES PERFORMANCES<br />
                      DES ENTREPRISES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            ILS NOUS FONT CONFIANCE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <Image src="/partners/alt.png" alt="Alt" width={150} height={80} className="dark:filter dark:brightness-0 dark:invert" />
            <Image src="/partners/ivosc.png" alt="Ivosc" width={150} height={80} className="dark:filter dark:brightness-0 dark:invert" />
            <Image src="/partners/imagineur.png" alt="Imagineur" width={150} height={80} className="dark:filter dark:brightness-0 dark:invert" />
            <Image src="/partners/veliko.png" alt="Veliko" width={150} height={80} className="dark:filter dark:brightness-0 dark:invert" />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            QUI SOMMES NOUS
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Expert de la médecine préventive et de la santé en entreprise, La Clinique de l'Entreprise agit comme un véritable médecin généraliste qui accompagne les dirigeants de PME dans leur quête de performance.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              La mission de La Clinique de l'Entreprise est d'améliorer la santé et les performances des entreprises. Pour cela, nous avons développé une approche unique qui accompagne les dirigeants de PME dans leur quête de performance.
            </p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Une approche collective au service de votre réussite
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Une équipe pluridisciplinaire d'experts</li>
              <li>Une approche globale et systémique</li>
              <li>Un accompagnement sur-mesure</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            NOS SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Axe Santé</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Diagnostic stratégique</li>
                <li>Bilan de santé</li>
                <li>Plan d'action</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Axe Performance</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Optimisation des processus</li>
                <li>Gestion du changement</li>
                <li>Indicateurs de performance</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Axe Spécialités</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Expertise sectorielle</li>
                <li>Solutions sur mesure</li>
                <li>Innovation</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Axe Prévention</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Gestion des risques</li>
                <li>Formation</li>
                <li>Suivi préventif</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              En savoir plus sur nos services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 