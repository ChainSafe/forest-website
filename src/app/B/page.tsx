import TestNav from '@/components/TestNav'
import ProductOverview from '@/sections/ProductOverview'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <TestNav />
      <h1 className="text-green-400">Hello from Page B</h1>
    </main>
  )
}
