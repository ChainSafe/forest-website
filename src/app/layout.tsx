import type { Metadata } from 'next'
import localFont from 'next/font/local';
import {Inconsolata} from 'next/font/google'
import './globals.css'

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
  title: 'Forest Website',
  description: 'The Rust implementation of the Filecoin Protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} ${inconsolata.variable}`}>{children}</body>
    </html>
  )
}
