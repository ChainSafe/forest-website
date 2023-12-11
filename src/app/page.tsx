import TestNav from '@/components/TestNav'
import AccessingFilecoinData from '@/sections/AccessingFilecoinData'
import BetaTesters from '@/sections/BetaTesters'
import Binaries from '@/sections/Binaries'
import Documentation from '@/sections/Documentation'
import Downloads from '@/sections/Downloads'
import Hero from '@/sections/Hero'
import RunningNode from '@/sections/RunningNode'
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
      <Binaries />
      <RunningNode />
      <Documentation />
      <AccessingFilecoinData />
    </main>
  )
}
