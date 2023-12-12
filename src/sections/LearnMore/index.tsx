/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "@/components/Button"
import { IconArrowUpRight } from "@tabler/icons-react"

const processes = [
  {

    desc: 'Start the forest node. It will automatically connect to the bootstrap peers and start synchronizing the chain. If it is the first time starting the node, it will download the latest state snapshot',
    calibnetCommand: 'forest',
    mainnetCommand: 'forest --chain calibnet',
  },
  {
    desc: 'In another shell, invoke commands on the running node using forest-cli, i.e., to check the synchronization status:',
    mainnetCommand: 'forest-cli sync status',
  },
  
]

export default function LearnMore() {
  return (
    <div className="relative h-full w-full  md:min-h-[70vh]">
      <div className="relative flex flex-col justify-center pt-16 pb-6 px-8">
        <h2 className='mt-7 text-neutral-200 text-5xl text-center font-normal'>
          Learn more about Forest
        </h2>
        <div className='grid md:grid-cols-2 gap-y-2 py-4 gap-x-1 '>
          {processes.map((card, index) => (
          <div key={index} className='transition-all py-8 flex flex-col justify-start' >
            <div className='bg-neutral-950 h-[300px]'>
              {/* embed youtube */}
              </div>
              
          </div>
        ))}
        </div>
        </div>
    </div>
  )
}
