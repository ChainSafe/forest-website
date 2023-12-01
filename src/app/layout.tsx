import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';

const neueMontreal = localFont({
  src: [
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
});

import './globals.css'


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
      <body className={neueMontreal.className}>{children}</body>
    </html>
  )
}
