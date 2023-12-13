/* eslint-disable @next/next/no-img-element */
"use client"

export default function Hero2() {
  return (
    <div className="relative md:min-h-[80vh] h-full">
      <div className="relative flex flex-col py-24">
        <div className='relative bg-no-repeat bg-contain bg-patterned md:min-h-[40vh] opacity-75 w-full'>
        </div>
        <div className='flex flex-col sm:flex-row justify-start items-start px-5 lg:pl-4'>
          <h1 className="md:max-w-[680px] lg:mr-8 text-6xl text-neutral-200">
            Premier Rust implementation for the Filecoin Protocol
          </h1>
          <div className='flex flex-col'>
            <h3 className='md:max-w-[380px] mt-3 text-3xl text-neutral-400 tracking-tight'>Run Forest to access Filecoin, the decentralized storage network.</h3>
            <div className="py-4 flex items-center">
              <a className="mr-2 transition-all rounded-full border-[1px] border-brand-400 text-brand-400 px-8 py-1 text-lg font-medium shadow-sm hover:brightness-[80%]"  href="#download">Install</a>
              <a className='transition-all rounded-full border-[1px] border-gray-700 text-gray-300 px-8 py-1 text-lg font-medium shadow-sm hover:brightness-[80%]' href="#withforest">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
