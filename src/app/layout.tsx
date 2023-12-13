import type { Metadata } from 'next'
import localFont from 'next/font/local';
import {Inconsolata} from 'next/font/google'
import './globals.css'
import ClientLoaded from './client';

const neueMontreal = localFont({
  weight: '400',
  src: [
    {
      path: './fonts/NeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nm',
});

const inconsolata = Inconsolata({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" } );


export const metadata: Metadata = {
  title: 'Forest - Filecoin implemented in Rust',
  description: 'Run Forest to validate the Filecoin blockchain, generate snapshots, send and receive FIL and more.',
  icons: {
    icon: './favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forest',
    description: 'The Filecoin Implementation in Rust',
    // siteId: '1467726470533754880',
    // creator: '@nextjs',
    // creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
   openGraph: {
    title: 'Forest',
    description: 'The Filecoin Implementation in Rust',
    url: 'https://forest.chainsafe.io',
    siteName: 'Forest',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
   robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
     },
  },
  
  metadataBase: new URL('https://forest.chainsafe.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} ${inconsolata.variable}`}>
        {children}
      </body>
    </html>
  )
}
