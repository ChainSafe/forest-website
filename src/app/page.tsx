import TestNav from '@/components/TestNav'
import BetaTesters from '@/sections/BetaTesters'
import Downloads from '@/sections/Downloads'
import Hero from '@/sections/Hero'
import SpecsTable from '@/sections/SpecsTable'
import WithForestYouCan from '@/sections/WithForestYouCan'

export default function Home() {
  return (
    <main className="flex flex-col py-4">
      <TestNav />
      <Hero />
      <WithForestYouCan />
      <BetaTesters />
      <SpecsTable />
      <Downloads />
    </main>
  )
}
