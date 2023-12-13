/* eslint-disable @next/next/no-img-element */
"use client"

import Button from "@/components/Button"
import GradientCursor from "@/components/GradientCursor"

export default function Hero3() {
  return (
    <div className="relative h-screen w-full px-4 md:px-8  bg-no-repeat bg-cover bg-multi-gradient">
      <div className="relative flex flex-col max-w-7xl py-48">
        <img className='max-w-[60%]' src="full-mark.png" alt="" />
        
        <div className='mt-10 flex flex-col sm:flex-row justify-start items-start'>
          <h1 className="md:max-w-[680px]  text-6xl text-neutral-200">
            Premier Rust implementation for the Filecoin Protocol
          </h1>
          <h3 className='md:max-w-[500px] mt-3 text-3xl text-neutral-400 tracking-tight'>Run Forest to access Filecoin, the decentralized storage network.</h3>
        </div>
        <div className="py-4 flex items-center">
          <a className="mr-2 transition-all rounded-full border-[1px] border-brand-400 text-brand-400 px-8 py-1 text-lg font-medium shadow-sm hover:brightness-[80%]"  href="#download">Install</a>
          <a className='transition-all rounded-full border-[1px] border-gray-700 text-gray-300 px-8 py-1 text-lg font-medium shadow-sm hover:brightness-[80%]' href="#withforest">Learn More</a>
        </div>
      </div>
    </div>
  )
}
