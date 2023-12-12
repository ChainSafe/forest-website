/* eslint-disable @next/next/no-img-element */
"use client"

import Button from "@/components/Button"

export default function Hero() {
  return (
    <div className="relative md:min-h-[80vh] h-full px-4 md:px-8">
      <div className="relative flex flex-col max-w-7xl py-24">
        <img className='max-w-[60%] opacity-20' src="fullmark.png" alt="" />
        
        <div className='mt-7 flex flex-col sm:flex-row justify-start items-start'>
          <h1 className="md:max-w-[680px]  text-6xl text-neutral-300">
            Premier Rust implementation for the Filecoin Protocol
          </h1>
          <h3 className='md:max-w-[380px] mt-3 text-3xl text-neutral-400 tracking-tight'>Run Forest to access Filecoin, the decentralized storage network.</h3>
        </div>
        <div className="py-4 flex items-center">
          <Button className="mr-2" type="primary" href="#">Install</Button>
          <Button type="secondary" href="#">Learn More</Button>
        </div>
      </div>
    </div>
  )
}
