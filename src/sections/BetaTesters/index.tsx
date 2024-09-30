/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "@/components/Button"
import { IconArrowUpRight } from "@tabler/icons-react"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { sentenceVariant, letterVariant, splitText } from "@/styles/animations";

const cards = [
  {
    desc: 'Bootstrap your custom full node.',
    link: 'https://docs.forest.chainsafe.io/getting_started/install',
  },
  {
    desc: 'Select Calibration testnet or Filecoin main network.',
    link: 'https://docs.forest.chainsafe.io/getting_started/syncing',
  },
  {
    desc: 'Test our new HTTP-RPC interfaces.',
    link: 'https://docs.forest.chainsafe.io/reference/json_rpc',
  },
  {
    desc: 'Import the Filecoin archive.',
    link: 'https://docs.forest.chainsafe.io/knowledge_base/snapshot_service',
  },
]

export default function BetaTesters() {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  const splitSentence = splitText(`Join our beta program to help make Forest the best it can be. Let us know how we can support your needs.`)
  
  return (
    <div ref={ref} className="relative w-full md:min-h-[70vh]" id="beta-program">
      <div className="relative flex flex-col justify-center py-14 lg:pt-32 px-8">
        <h2 className='mt-7 text-brand-400 text-5xl font-normal'>
          The Forest beta awaits testers
        </h2>
        <motion.h2 className='mt-3 md:max-w-[600px] text-neutral-200 text-2xl font-normal' initial="hidden" viewport={{ once: true }} animate={controls} variants={sentenceVariant}>
          {splitSentence.map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char}{' '}
              </motion.span>
            ))}
        </motion.h2>
        <img className='hidden lg:inline-block absolute z-0 h-[80%] right-1 top-[15%]' src="/symbol-cropped.png" alt="" />
          <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-4 py-8 gap-x-2 z-10 max-w-[85%] '>
          {cards.map((card, index) => (
            <a href={card.link} key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-neutral-900 rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-90' rel="noopener noreferrer" target="_blank">
              <div className='flex justify-between'>
                <p className='text-xl text-green-500'>{index + 1}</p>
                <Button href={card.link} type="link"><IconArrowUpRight stroke={1.5} className="text-brand-400" width={24}/></Button>
              </div>
              <h3 className='mt-2 md:mt-7 text-neutral-300 text-xl leading-6 max-w-[80%]'>{card.desc}</h3>
            </a>
          ))}
        </div>
        </div>
    </div>
  )
}
