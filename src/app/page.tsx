import TestNav from '@/components/TestNav'
import AccessingFilecoinData from '@/sections/AccessingFilecoinData'
import BetaSoftwareConsiderations from '@/sections/BetaSoftwareConsiderations'
import BetaTesters from '@/sections/BetaTesters'
import Binaries from '@/sections/Binaries'
import Contributors from '@/sections/Contributors'
import Documentation from '@/sections/Documentation'
import Downloads from '@/sections/Downloads'
import Hero from '@/sections/Hero'
import LearnMore from '@/sections/LearnMore'
import RunningNode from '@/sections/RunningNode'
import SpecsTable from '@/sections/SpecsTable'
import Team from '@/sections/Team'
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
      <LearnMore />
      <Team />
      <Contributors />
      <BetaSoftwareConsiderations />
    </main>
  )
}
