import CalibnetProcess from '@/components/CalibnetProcess'
import TestNav from '@/components/TestNav'
import ProductOverview from '@/sections/ProductOverview'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestNav />
      <CalibnetProcess />
    </main>
  )
}
