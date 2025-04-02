/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "@/components/Button"
import { IconArrowUpRight } from "@tabler/icons-react"

const cards = [
  {
    title: 'Docker',
    img: '/docker.png',
    desc: 'Get the latest version of our Docker images',
    link: 'https://docs.forest.chainsafe.io/knowledge_base/docker_tips',
  },
  {
    title: 'Binaries',
    img: '/logo-symbol.png',
    desc: 'Download pre-compiled binaries from our GitHub releases page',
    link: 'https://docs.forest.chainsafe.io/getting_started/install',
  },
  {
    title: 'Build from source',
    img: '/rust.png',
    desc: 'Build Forest from the latest source-code version',
    link: 'https://docs.forest.chainsafe.io/getting_started/install',
  },

]

export default function Downloads() {
  return (
    <div className="relative h-full w-full  md:min-h-[50vh]" id="download">
      <div className="container mx-auto">
        <div className="relative flex flex-col justify-center py-14 px-8">
          <h2 className='mt-7 text-white text-5xl font-normal'>
            Downloads
          </h2>
          <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-3 py-8 gap-x-2 '>
            {cards.map((card, index) => (
              <a href={card.link} key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-neutral-900 rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80' rel="noopener noreferrer" target="_blank">
                <div className='flex justify-end'>
                  <IconArrowUpRight stroke={1.5} className="text-brand-400" width={24} />
                </div>
                <div className='min-h-[200px] flex items-end'>
                  <img className="mt-8 max-w-[150px] pb-3" src={card.img} alt={card.desc} />
                </div>
                <h2 className='mt-2 md:mt-7 text-gray-100 text-xl leading-7 max-w-[90%]'>{card.title}</h2>
                <h3 className='mt-2 text-gray-300 text-lg leading-7 max-w-[90%]'>{card.desc}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
