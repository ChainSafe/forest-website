/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "@/components/Button"
import { IconArrowUpRight } from "@tabler/icons-react"

const cards = [
  {
    desc: 'Bootstrap your custom full node.',
    link: 'https://chainsafe.github.io/forest/basic_usage.html',
  },
  {
    desc: 'Select Calibration testnet or Filecoin main network.',
    link: 'https://chainsafe.github.io/forest/configuration.html',
  },
  {
    desc: 'Test our new HTTP-RPC interfaces.',
    link: 'https://chainsafe.github.io/forest/developer_documentation/rpc_api_compatibility.html',
  },
  {
    desc: 'Import the Filecoin archive.',
    link: 'https://chainsafe.github.io/forest/developer_documentation/filecoin_archive.html',
  },
]

export default function BetaTesters() {
  return (
    <div className="relative h-full w-full  md:min-h-[70vh]">
      <div className="relative flex flex-col justify-center py-14 px-8">
        <h2 className='mt-7 text-white text-5xl font-normal'>
          The Forest beta awaits testers
        </h2>
        <h2 className='mt-3 md:max-w-[600px] text-stone-400 text-2xl font-normal'>
          Join our beta program early and give the team feedback on your Filecoin use cases to be respected on the development roadmap.
        </h2>
          <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-4 py-8 gap-x-2 '>
          {cards.map((card, index) => (
            <a href={card.link} key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-bg rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80' rel="noopener noreferrer" target="_blank">
              <div className='flex justify-between'>
                <p className='text-xl text-stone-500'>{index + 1}</p>
                <Button href={card.link} type="link"><IconArrowUpRight stroke={1.5} className="text-brand-400" width={24}/></Button>
              </div>
              <h3 className='mt-2 md:mt-7 text-gray-100 text-xl leading-6 font-light max-w-[80%]'>{card.desc}</h3>
            </a>
          ))}
          </div>
        </div>
    </div>
  )
}
