
import GradientCursorOnScroll from '@/components/GradientCursorOnHover'
import { Loading } from '@/components/Loading'
import TestNav from '@/components/TestNav'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <TestNav />
      <Loading />
    </main>
  )
}
