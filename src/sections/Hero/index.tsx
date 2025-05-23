/* eslint-disable @next/next/no-img-element */
"use client"

import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div className="relative h-screen w-full px-4 md:px-8 bg-no-repeat bg-cover bg-multi-gradient">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col max-w-7xl mt-[40%] md:mt-0 md:py-48">
        <img className='max-w-[60%]' src="full-mark.png" alt="" />
        <div className='mt-10 flex flex-col sm:flex-row justify-start items-start'>
          <h1 className="md:max-w-[700px]  text-6xl text-neutral-100">
            Rust implementation of the Filecoin Protocol
          </h1>
          <div className='flex flex-col'>
            <h3 className='md:max-w-[500px] mt-3 text-2xl text-neutral-400 '>Run Forest to access Filecoin, the decentralized storage network.</h3>
            <div className="py-4 flex flex-col  md:mt-0 md:flex-row items-center">
              <Link smooth offset={40} className="btn-link border-brand-400 text-brand-400"  to="download">Download</Link>
              <a href="https://github.com/ChainSafe/forest/discussions" target="_blank" rel="noopener noreferrer" className='btn-link border-gray-700 text-neutral-200' >Reach the Team</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
