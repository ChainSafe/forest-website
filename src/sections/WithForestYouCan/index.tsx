/* eslint-disable @next/next/no-img-element */
"use client"
import { IconWallet, IconLockSquareRounded, IconArrowsRightLeft, IconNewSection } from "@tabler/icons-react"

const properties = [
  {
    icon: <IconLockSquareRounded  stroke={1.25} size={40}/>,
    desc: 'Validate the Filecoin blockchain'
  },
  {
    icon: <IconArrowsRightLeft stroke={1.25} size={40} />,
    desc: 'Gain access to Filecoin’s consensus data'
  },
  {
    icon: <IconNewSection stroke={1.25} size={40} />,
    desc: 'Generate blockchain snapshots'
  },
  {
    icon: <IconWallet stroke={1.25} size={40} />,
    desc: 'Send and receive FIL with a built-in wallet'
  },
]

export default function WithForestYouCan() {
  return (
    <div className="relative h-full w-full bg-no-repeat bg-cover md:min-h-[70vh] bg-multi-gradient">
      <div className="relative flex flex-col justify-center md:items-center py-14 px-8">
          <h2 className='mt-7 text-neutral-200 text-3xl font-normal'>
            With Forest, you can...
          </h2>
          <div className='grid md:grid-cols-4 py-8 md:py-20'>
          {properties.map((card, index) => (
            <div key={index} className='py-4 flex flex-col justify-start'>
              <div className='rounded-lg h-20 w-20 p-5 bg-neutral-900 bg-opacity-50 text-brand-400'>
                {card.icon}
              </div>
              <h3 className='mt-2 md:mt-7 text-neutral-400 text-xl leading-6 max-w-[80%]'>{card.desc}</h3>
            </div>
          ))}
          </div>
        <h2 className='md:mt-7 md:max-w-xl md:text-center text-neutral-300 text-2xl'>
          All this for a fraction of the hardware requirements compared to a reference Filecoin node.
        </h2>
        </div>
    </div>
  )
}
