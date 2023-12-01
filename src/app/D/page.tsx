
import TestNav from '@/components/TestNav'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <TestNav />
      <h1 className="text-green-400">Hello from Page C</h1>
    </main>
  )
}
