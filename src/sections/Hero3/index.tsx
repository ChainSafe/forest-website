/* eslint-disable @next/next/no-img-element */
"use client"

import { Link } from 'react-scroll';

export default function Hero3() {
  return (
    <div className="relative h-screen w-full px-4 md:px-8 bg-no-repeat bg-cover bg-multi-gradient">
      <div className="relative flex flex-col max-w-7xl py-48">
        <img className='max-w-[60%]' src="full-mark.png" alt="" />
        <div className='mt-10 flex flex-col sm:flex-row justify-start items-start'>
          <h1 className="md:max-w-[700px]  text-6xl text-neutral-100">
            Premier Rust implementation for the Filecoin Protocol
          </h1>
          <div className='flex flex-col'>
            <h3 className='md:max-w-[500px] mt-3 text-2xl text-neutral-400 '>Run Forest to access Filecoin, the decentralized storage network.</h3>
            <div className="py-4 flex items-center">
              <Link smooth offset={40} className="btn-link border-brand-400 text-brand-400"  to="download">Install</Link>
              <Link smooth offset={40}className='btn-link border-gray-700 text-neutral-200' to="withforest">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
