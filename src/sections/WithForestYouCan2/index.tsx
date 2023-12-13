/* eslint-disable @next/next/no-img-element */
"use client"
import GradientCursor from "@/components/GradientCursor"
import { motion } from 'framer-motion';
import { parentVariant, childVariants } from '@/styles/animations';
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

export default function WithForestYouCan2() {
  return (
    <div className="relative h-full min-h-[80vh] w-full" id="withforest">
      <GradientCursor />
      <div className="relative flex flex-col justify-center md:items-center py-14 lg:py-24 px-8">
          <h2 className='mt-7 text-neutral-200 text-4xl font-normal'>
            With Forest, you can...
          </h2>
          <motion.div
            variants={parentVariant}
            initial='offscreen'
            whileInView='onscreen'
            transition={{ duration: 1.2, delay: 0.5 }} className='grid md:grid-cols-4 py-8 md:py-20'>
            {properties.map((card, index) => (
              <motion.div key={index} variants={childVariants} className='py-4 flex flex-col justify-start'>
                <div className='rounded-lg h-20 w-20 p-5 bg-neutral-900 bg-opacity-50 text-brand-400'>
                  {card.icon}
                </div>
                <h3 className='mt-2 md:mt-7 text-neutral-300 text-xl leading-6 max-w-[80%]'>{card.desc}</h3>
              </motion.div>
            ))}
          </motion.div>
        <h2 className='md:mt-7 md:max-w-xl md:text-center text-neutral-300 text-2xl'>
          All this for a fraction of the hardware requirements compared to a reference Filecoin node.
        </h2>
        </div>
    </div>
  )
}
