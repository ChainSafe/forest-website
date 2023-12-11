/* eslint-disable @next/next/no-img-element */
"use client"

const snapshotCards = [
  {
    img: '',
    title: 'Full',
    desc: 'A full snapshot contains all block headers from genesis and the entirely inhabited chain state.',
   
  },
  {
    img: '',
    title: 'Lite',
    desc: 'A light snapshot contains all block headers from genesis and only the state tree for the latest N epochs.',
  },
  {
    img: '',
    title: 'Diff',
    desc: 'A diff snapshot contains only block headers and messages for the latest N epochs.',
  },
  
]

export default function SnapshotService() {
  return (
    <div className="relative h-full w-full  md:min-h-[70vh]">
      <div className="relative flex flex-col justify-center pt-8 pb-6 px-8">
        <h2 className='mt-7 text-green-600 text-3xl font-normal'>
          Snapshot Service
        </h2>
        <h2 className='mt-3 md:max-w-[600px] text-stone-400 text-xl font-normal'>
          No matter which Filecoin client software you operate, you can download the lightweight Forest chain state snapshots to bootstrap your node.
        </h2>
        <div className='grid md:grid-cols-3 gap-y-2 py-4 gap-x-1 '>
          {snapshotCards.map((card, index) => (
          <div key={index} className='transition-all py-8 flex flex-col justify-start' >
            <div className='bg-stone-900 h-[150px]'>
              </div>
              <div className='px-1'>
                <h3 className='mt-1 md:mt-3 text-brand-400 text-xl  font-semibold'>{card.title}</h3>
                <h3 className='mt-1  text-stone-400 text-lg leading-6 max-w-[90%]'>{card.desc}</h3>
              
              </div>
          </div>
        ))}
        </div>
        </div>
    </div>
  )
}
