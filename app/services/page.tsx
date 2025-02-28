import React from 'react'
import Link from 'next/link'

const services = [
  {
    title: "Conseil Stratégique",
    description: "Nous vous aidons à définir et mettre en œuvre votre stratégie de transformation digitale.",
    features: [
      "Audit digital",
      "Planification stratégique",
      "Optimisation des processus",
      "Gestion du changement"
    ]
  },
  {
    title: "Solutions Digitales",
    description: "Développement de solutions numériques adaptées à vos besoins spécifiques.",
    features: [
      "Développement sur mesure",
      "Intégration de systèmes",
      "Applications web et mobile",
      "Automatisation des processus"
    ]
  },
  {
    title: "Formation",
    description: "Programmes de formation personnalisés pour vos équipes.",
    features: [
      "Formation aux outils digitaux",
      "Accompagnement personnalisé",
      "Workshops pratiques",
      "Suivi post-formation"
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                La Clinique de l'Entreprise
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                  Accueil
                </Link>
                <Link href="/services" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Services Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nos Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions complètes pour accompagner votre transformation digitale
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <Link
                  href="/contact"
                  className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 