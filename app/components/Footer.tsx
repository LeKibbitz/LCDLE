import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#1a1f36] text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#sante" className="text-gray-300 hover:text-white">
                  Santé
                </Link>
              </li>
              <li>
                <Link href="/services#performance" className="text-gray-300 hover:text-white">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/services#specialites" className="text-gray-300 hover:text-white">
                  Spécialités
                </Link>
              </li>
              <li>
                <Link href="/services#prevention" className="text-gray-300 hover:text-white">
                  Prévention
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Axes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Diagnostic 360°
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Accompagnement
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Tel: 06 02 02 02 02
            </p>
            <p className="text-gray-300">
              contact@lacliniquedelentreprise.fr
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 La Clinique de l'Entreprise</p>
        </div>
      </div>
    </footer>
  )
} 