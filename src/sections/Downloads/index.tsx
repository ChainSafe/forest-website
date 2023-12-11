/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "@/components/Button"
import { IconArrowUpRight } from "@tabler/icons-react"

const cards = [
  {
    img: '/docker.png',

    desc: 'To run Forest in Docker, get the latest version of our Docker images',
    link: 'https://chainsafe.github.io/forest/docker.html',
  },
  {
    img: '/logo-symbol.png',
    desc: 'To install Forest from pre-compiled binaries, please download them from our GitHub releases page',
    link: 'https://github.com/ChainSafe/forest/releases',
  },
  {
    img: '/rust.png',
    desc: 'To build Forest from the latest source-code version, install dependencies and compile the binaries yourself.',
    link: 'https://chainsafe.github.io/forest/basic_usage.html',
  },
 
]

export default function Downloads() {
  return (
    <div className="relative h-full w-full  md:min-h-[70vh]">
      <div className="relative flex flex-col justify-center py-14 px-8">
        <h2 className='mt-7 text-white text-5xl font-normal'>
          Downloads
        </h2>
        <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-3 py-8 gap-x-2 '>
          {cards.map((card, index) => (
          <a href={card.link} key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-bg rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80' rel="noopener noreferrer" target="_blank">
            <div className='flex justify-end'>
              <Button href={card.link} type="link"><IconArrowUpRight stroke={1.5} className="text-brand-400" width={24}/></Button>
              </div>
            <div className='min-h-[200px] flex items-end'>
              <img className="mt-8 max-w-[150px] pb-3" src={card.img} alt={card.desc} />

            </div>
            <h3 className='mt-2 md:mt-7 text-gray-100 text-xl leading-6 font-light max-w-[80%]'>{card.desc}</h3>
          </a>
        ))}
        </div>
        </div>
    </div>
  )
}
