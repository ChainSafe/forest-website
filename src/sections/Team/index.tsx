/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Team(){
  return (
    <div className="relative h-full w-full max-w-screen-xl mx-auto py-8">
      <div className="relative grid md:grid-cols-2 px-8 py-8 md:py-14 md:gap-x-4" >
        <img src="/team.png" className='w-full md:max-w-[500px]' alt="The Forest Team" />
        <div className="relative flex flex-col justify-center md:pt-0 items-start">
          <h1 className='mt-7 text-green-500 text-5xl font-normal'>
            About the team
          </h1>
          <h2 className='mt-3 md:max-w-[600px] text-neutral-300 text-xl font-normal'>
            The Forest team comprises ten developers distributed across the world. <a href="http://chainsafe.io" target='_blank' rel='noopener noreferrer' className='text-white transition-all hover:text-[#ffff48]'>ChainSafe</a>, one of the world&apos;s leading blockchain research and development firms, maintains the client.
          </h2>
        </div>
      </div>
    </div>
  )
};

