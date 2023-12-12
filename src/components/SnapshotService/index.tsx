/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "../Button"
import { IconArrowUpRight } from "@tabler/icons-react"

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

const downloadCards = [
  {
    title: 'Calibnet',
    link: ''
  },
  {
    title: 'Mainnet',
    link: ''
  },
]

export default function SnapshotService() {
  return (
    <div className="relative h-full w-full  md:min-h-[70vh]">
      <div className="relative flex flex-col justify-center pt-8 pb-6 px-8">
        <h1 className='mt-7 text-green-600 text-3xl font-normal'>
          Snapshot Service
        </h1>
        <h2 className='mt-3 md:max-w-[600px] text-stone-400 text-xl font-normal'>
          No matter which Filecoin client software you operate, you can download the lightweight Forest chain state snapshots to bootstrap your node.
        </h2>
        {/* 3-column Overview */}
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
         {/* Download Snapshots */}
          <div className="grid md:grid-cols-3 py-4">
            <div className='flex flex-col col-span-2'>
              <h1 className='mt-7 text-green-600 text-2xl font-normal'>
                Download latest snapshots
              </h1>
              <h2 className='mt-3 md:max-w-[500px] text-stone-400 text-lg leading-6 font-normal'>
                The Forest node automatically downloads the latest snapshots. For all other clients, you can provide the following downloads:
              </h2>
            </div>
            <div className='grid grid-cols-2 gap-x-1'>
              {downloadCards.map((card, index) => (
                <a href={card.link} key={index} className='transition-all py-4 flex flex-col justify-start px-4 bg-stone-900 rounded-2xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80' rel="noopener noreferrer" target="_blank">
                  <div className='flex justify-between'>
                    <Button href={card.link} type="link"><IconArrowUpRight stroke={1.5} className="text-brand-400" width={24}/></Button>
                  </div>
                  <h3 className='mt-8 text-gray-100 text-xl leading-6 font-light max-w-[80%]'>{card.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
