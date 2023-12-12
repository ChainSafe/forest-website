/* eslint-disable @next/next/no-img-element */
"use client"
import { IconWallet, IconLockSquareRounded, IconArrowsRightLeft, IconNewSection } from "@tabler/icons-react"

const properties = [
  {
    title: 'forest',
    desc: 'The Forest daemon to connect to the Filecoin network and synchronize the latest tipset of the blockchain.'
  },
  {
    title: 'forest-cli',
    desc: 'The Forest command-line interface to interact with the daemon, querying the Filecoin blockchain, network, and state.'
  },
  {
    title: 'forest-tool',
    desc: 'A set of utilities to manage databases, snapshots, and state migrations.'
  },
  {
    title: 'forest-wallet',
    desc: 'Create Filecoin accounts and send and receive FIL.'
  },
]

export default function Binaries() {
  return (
    <div className="relative h-full w-full bg-no-repeat bg-cover md:min-h-[70vh] bg-diamond-gradient">
      <div className="relative flex flex-col justify-center md:items-center pt-24 pb-4 px-8 max-w-8xl">
        <h2 className='mt-7 text-neutral-200 text-5xl'>
          Forest comes with different command-line binaries.
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-2 px-12 md:py-20'>
          {properties.map((card, index) => (
            <div key={index} className='py-4 flex flex-col justify-start justify-self-center'>
              <div className='rounded-xl px-6 py-3 text-xl bg-neutral-950 bg-opacity-60 text-brand-200 font-mono w-48 text-center'>
                {card.title}
              </div>
              <h3 className='mt-2 md:mt-7 text-gray-300 text-xl leading-6 max-w-[85%]'>{card.desc}</h3>
            </div>
          ))}
          </div>
  
        </div>
    </div>
  )
}
