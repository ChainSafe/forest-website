"use client"

import dynamic from "next/dynamic";


const CalibnetProcessNoSSR = dynamic(
  () => import('@/components/CalibnetProcess'),
  { ssr: false }
)
const SyncStatusNoSSR = dynamic(
  () => import('@/components/SyncStatusProcess'),
  { ssr: false }
)

const processes = [
  {
    comp: <CalibnetProcessNoSSR />,
    desc: 'Start the forest node. It will automatically connect to the bootstrap peers and start synchronizing the chain. If it is the first time starting the node, it will download the latest state snapshot',
    calibnetCommand: 'forest --chain calibnet',
    mainnetCommand: 'forest',
  },
  {
    comp: <SyncStatusNoSSR />,
    desc: 'In another shell, invoke commands on the running node using forest-cli, i.e., to check the synchronization status:',
    mainnetCommand: 'forest-cli sync status',
  },

]

export default function RunningNode() {
  return (
    <div className="relative h-full w-full  md:min-h-[70vh]">
      <div className="container mx-auto">
        <div className="relative flex flex-col justify-center pt-16 pb-6 px-8">
          <h2 className='mt-7 text-neutral-200 text-5xl text-center font-normal'>
            Running a Node
          </h2>
          <div className='grid lg:grid-cols-2 gap-y-2 py-4 gap-x-1 '>
            <div className='transition-all py-8 flex flex-col justify-start' >
              <CalibnetProcessNoSSR />
              <div className='px-2'>
                <h3 className='mt-1 md:mt-3 text-gray-300 text-xl leading-7 max-w-[80%]'>Start the forest node. It will automatically connect to the bootstrap peers and start synchronizing the chain. If it is the first time starting the node, it will download the latest state snapshot</h3>
                <h3 className='mt-1 md:mt-3 text-xl leading-6 text-brand-400 font-mono max-w-[80%]'><span className="text-lg font-sans text-gray-300">On calibnet: </span> forest --chain calibnet</h3>
                <h3 className='mt-1 md:mt-1 text-brand-400 text-xl leading-6 font-mono max-w-[80%]'><span className="text-lg font-sans text-gray-300">On mainnet: </span> forest</h3>
              </div>
            </div>
            <div className='transition-all py-8 flex flex-col justify-start' >
              <SyncStatusNoSSR />
              <div className='px-2'>
                <h3 className='mt-1 md:mt-3 text-gray-300 text-xl leading-7 max-w-[80%]'>In another shell, invoke commands on the running node using forest-cli, i.e., to check the synchronization status:</h3>
                <h3 className='mt-1 md:mt-3 text-xl leading-6 text-brand-400 font-mono max-w-[80%]'><span className="text-lg font-sans text-gray-300">On calibnet and mainnet: </span> forest-cli sync status</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
