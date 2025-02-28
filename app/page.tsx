import React from 'react'
import Link from 'next/link'
import { Header } from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Transformez votre</span>
                  <span className="block text-blue-600 dark:text-blue-500">entreprise</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Nous vous accompagnons dans votre transformation digitale avec des solutions sur mesure.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                    >
                      Commencer
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase">Nos Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Solutions complètes pour votre entreprise
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Conseil Stratégique</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Expertise en transformation digitale et optimisation des processus.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Solutions Digitales</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Développement d'outils sur mesure pour votre activité.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Formation</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Accompagnement et formation de vos équipes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold">La Clinique de l'Entreprise</h3>
              <p className="mt-2 text-gray-300">
                Votre partenaire dans la transformation digitale
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold">Contact</h3>
              <p className="mt-2 text-gray-300">
                Email: contact@lacliniquedelentreprise.fr
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold">Suivez-nous</h3>
              <div className="mt-2 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 