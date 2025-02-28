'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              La Clinique de l'Entreprise
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md">
                Accueil
              </Link>
              <Link href="/services" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md">
                Services
              </Link>
              <Link href="/contact" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
} 