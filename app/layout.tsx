import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dentistepar.ro'),
  title: {
    default: 'Cabinet Stomatologic București - Servicii Dentare Complete | DentistExpert',
    template: '%s | DentistExpert'
  },
  description: 'Cabinet stomatologic modern în București. Implantologie, ortodonție, estetica dentară, urgențe stomatologice. Programări online. Sună acum: 0722 234 567',
  keywords: ['dentist bucuresti', 'cabinet stomatologic', 'implant dentar', 'ortodontie', 'estetica dentara', 'urgente stomatologice', 'albire dinti', 'proteza dentara', 'carie dentara', 'extractie dinte'],
  authors: [{ name: 'DentistExpert' }],
  creator: 'DentistExpert',
  publisher: 'DentistExpert',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Cabinet Stomatologic București - Servicii Dentare Complete | DentistExpert',
    description: 'Cabinet stomatologic modern în București. Implantologie, ortodonție, estetica dentară, urgențe stomatologice. Programări online.',
    url: 'https://dentistepar.ro',
    siteName: 'DentistExpert',
    locale: 'ro_RO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'DentistExpert - Cabinet Stomatologic Modern București',
    card: 'summary_large_image',
  },
  verification: {
    google: 'google-verification-code',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'DentalClinic',
              'name': 'DentistExpert Cabinet Stomatologic',
              'image': 'https://dentistepar.ro/logo.png',
              'url': 'https://dentistepar.ro',
              'telephone': '+40722234567',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Strada Dorobanti 25',
                'addressLocality': 'București',
                'postalCode': '010573',
                'addressCountry': 'RO'
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': 44.4268,
                'longitude': 26.1025
              },
              'openingHoursSpecification': [
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  'opens': '09:00',
                  'closes': '19:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': 'Saturday',
                  'opens': '10:00',
                  'closes': '15:00'
                }
              ],
              'medicalSpecialty': ['Dentistry', 'Oral Surgery', 'Orthodontics', 'Periodontics', 'Endodontics'],
              'sameAs': [
                'https://facebook.com/dentistepar',
                'https://instagram.com/dentistepar'
              ],
              'priceRange': '$$'
            })
          }}
        />
      </body>
    </html>
  )
}