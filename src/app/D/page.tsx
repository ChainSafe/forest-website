
import { Loading } from '@/components/Loading'
import { ShrinkLogoOnScroll } from '@/components/ShrinkLogoOnScroll'
import TestNav from '@/components/TestNav'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between p-4">
      <TestNav />
      <ShrinkLogoOnScroll />
    </main>
  )
}
