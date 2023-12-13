import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AccessingFilecoinData from '@/sections/AccessingFilecoinData'
import BetaSoftwareConsiderations from '@/sections/BetaSoftwareConsiderations'
import BetaTesters from '@/sections/BetaTesters'
import Binaries from '@/sections/Binaries'
import Contributors from '@/sections/Contributors'
import Documentation from '@/sections/Documentation'
import Downloads from '@/sections/Downloads'
import Hero from '@/sections/Hero'
import Hero3 from '@/sections/Hero3'
import LearnMore from '@/sections/LearnMore'
import RunningNode from '@/sections/RunningNode'
import SpecsTable from '@/sections/SpecsTable'
import Team from '@/sections/Team'
import WithForestYouCan from '@/sections/WithForestYouCan'
import WithForestYouCan2 from '@/sections/WithForestYouCan2'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero3 />
      <WithForestYouCan2 />
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
      <Footer />
    </main>
  )
}