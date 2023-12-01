import GradientCursor from '@/components/GradientCursor'
import TestNav from '@/components/TestNav'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <TestNav />
      <GradientCursor />
    </main>
  )
}
