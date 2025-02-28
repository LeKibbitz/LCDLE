import React from 'react'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const services = [
  {
    title: "1 - UN DIAGNOSTIC STRATÉGIQUE À 360° : LE BILAN DE SANTÉ DE VOTRE ENTREPRISE",
    description: "Un diagnostic précis comme un scanner médical de votre entreprise.",
    objectives: [
      "Identifier les points forts et les points d'amélioration",
      "Construire un plan d'action sur mesure adapté aux 4 axes clés : Santé, Performance, Spécialités et Prévention"
    ]
  },
  {
    title: "2 - UN ACCOMPAGNEMENT SUR-MESURE",
    description: "Un plan d'action personnalisé comme un médecin, l'écouter et dialoguer pour atteindre de nouveaux paliers de développement.",
    objectives: [
      "Améliorer la santé et décupler les performances de votre entreprise",
      "Agir avec sérénité en vous assistant sur l'ensemble des problématiques clés"
    ]
  }
]

const axes = [
  {
    title: "Axe Santé",
    items: [
      "Diagnostic stratégique",
      "Bilan de santé",
      "Plan d'action",
      "Suivi des indicateurs"
    ]
  },
  {
    title: "Axe Performance",
    items: [
      "Optimisation des processus",
      "Gestion du changement",
      "Développement commercial",
      "Amélioration continue"
    ]
  },
  {
    title: "Axe Spécialités",
    items: [
      "Expertise sectorielle",
      "Solutions sur mesure",
      "Innovation",
      "Transformation digitale"
    ]
  },
  {
    title: "Axe Prévention",
    items: [
      "Gestion des risques",
      "Formation",
      "Accompagnement",
      "Veille stratégique"
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          NOS SERVICES
        </h1>

        {/* Service Descriptions */}
        <div className="space-y-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {service.objectives.map((objective, objIndex) => (
                  <li key={objIndex} className="text-gray-600 dark:text-gray-300">
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 4 Axes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {axes.map((axis, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {axis.title}
              </h3>
              <ul className="space-y-3">
                {axis.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-2"
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
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Contactez-nous pour en savoir plus
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
} 