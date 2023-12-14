/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "@/components/Button"
import { IconArrowUpRight } from "@tabler/icons-react"

const cards = [
  {
    title: 'Docs',
    desc: 'The end-user and developer documentation is available on GitHub pages.',
    link: 'https://chainsafe.github.io/forest/',
  },
  {
    title: 'Source Code',
    desc: 'The source code is available under the Apache 2.0 License on GitHub.',
    link: 'https://github.com/ChainSafe/forest',
  },
  {
    title: 'Rust Docs',
    desc: 'The full API documentation is available as a rust-doc book. ',
    link: 'https://chainsafe.github.io/forest/rustdoc/forest_filecoin/index.html',
  },
 
]

export default function Documentation() {
  return (
    <div className="relative h-full w-full  md:min-h-[50vh]" id="documentation">
      <div className="relative flex flex-col justify-center py-14 px-8">
        <h2 className='mt-7 text-white text-5xl font-normal'>
          Learn More
        </h2>
        <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-3 py-8 gap-x-2 '>
          {cards.map((card, index) => (
          <a href={card.link} key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-neutral-900 rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80' rel="noopener noreferrer" target="_blank">
            <div className='flex justify-between'>
            <h2 className='text-3xl font-light text-white'>{card.title}</h2>
            <Button href={card.link} type="link"><IconArrowUpRight stroke={1.5} className="text-brand-400" width={24}/></Button>
            </div>
            <h3 className='mt-8 md:mt-16 text-gray-100 text-xl leading-7 max-w-[80%]'>{card.desc}</h3>
          </a>
        ))}
        </div>
        </div>
    </div>
  )
}
