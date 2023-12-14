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
  keywords: ['forest', 'filecoin', 'chainsafe', 'rust', 'ipfs', 'blockchain node', 'filecoin client', 'lotus'],
  twitter: {
    card: 'summary_large_image',
    title: 'Forest',
    description: 'The Filecoin Implementation in Rust',
    images: ['https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/7961f9e4-e7f3-41a2-6c41-fa97f0d5e300/public'],
  },
   openGraph: {
    title: 'Forest',
    description: 'The Filecoin Implementation in Rust',
    url: 'https://forest.chainsafe.io',
    siteName: 'Forest',
    images: [
      {
        url: 'https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/7961f9e4-e7f3-41a2-6c41-fa97f0d5e300/public',
        width: 800,
        height: 600,
      },
    ],
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
