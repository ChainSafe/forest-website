import CalibnetProcess from '@/components/CalibnetProcess'
import TestNav from '@/components/TestNav'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <TestNav />
      <div className='w-full h-full rounded--xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-800  via-green-900 to-stone-900'>
        <h1 className='h-[100vh]'>hi</h1>
      </div>
    </main>
  )
}
