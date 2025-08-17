import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Providers } from './Providers';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'MT Concrete & Asphalt | Mario Trevizo',
  description:
    'MT Concrete & Asphalt provides professional paving, stamped concrete, and civil construction services in Colorado. Quality, innovation, and trust in every project.',
  keywords: [
    'concrete',
    'asphalt',
    'paving',
    'Colorado',
    'civil works',
    'Mario Trevizo',
    'construction',
    'infrastructure',
  ],
  authors: [{ name: 'MT Concrete & Asphalt' }],
  openGraph: {
    title: 'MT Concrete & Asphalt | Mario Trevizo',
    description:
      'Experts in paving, concrete, and infrastructure solutions across Colorado.',
    url: 'https://mariotrevizo.com',
    siteName: 'MT Concrete & Asphalt',
    images: [
      {
        url: '/logo-mt.png',
        width: 1200,
        height: 630,
        alt: 'MT Concrete & Asphalt logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MT Concrete & Asphalt | Mario Trevizo',
    description:
      'Reliable solutions in concrete and asphalt for residential, commercial, and industrial projects.',
    images: ['/logo-mt.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
