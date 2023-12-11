import TestNav from '@/components/TestNav'
import Hero from '@/sections/Hero'
import WithForestYouCan from '@/sections/WithForestYouCan'

export default function Home() {
  return (
    <main className="flex flex-col py-4 px-4">
      <TestNav />
      <Hero />
      <WithForestYouCan />
    </main>
  )
}
