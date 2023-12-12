"use client"
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';

export default function BetaSoftwareConsiderations() {
  
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='relative h-full w-full max-w-screen-xl mx-auto py-8'>
      <div className="relative grid px-8 py-14">
        <div className='relative flex flex-col justify-center md:pt-0 items-start '>
          <h1 className='mt-7 text-green-500 text-5xl font-normal'>
            Beta software considerations
          </h1>
          <h2 className='mt-6 md:max-w-[700px] text-neutral-300 text-xl font-normal'>
           The Forest implementation of the Filecoin protocol is beta software, which should be carefully considered in production workflows. The team is working to provide reliable, secure, and efficient interfaces to the Filecoin ecosystem. If you encounter obstacles, please raise an issue on our tracker
          </h2>
          {isExpanded &&
            <>
              <h2 className='mt-3 md:max-w-[700px] text-neutral-300 text-xl font-normal'>
              We take all security issues seriously; if you believe you have found a security issue within a ChainSafe project, including Forest, please notify us immediately. If an issue is confirmed, we will take all necessary precautions to ensure a statement and patch release is made promptly. Please email a description of the flaw and any related information, e.g., reproduction steps and version, to security@chainsafe.io.
              </h2>
              <h2 className='mt-3 md:max-w-[700px] text-neutral-300 text-xl font-normal'>
                It&apos;s important to note that mining capabilities are currently out of scope with Forest, focusing instead on other aspects of node operation and data management within the Filecoin network. If you want to see miner integrated with Forest, please join the discussion on GitHub.
              </h2>
              <button onClick={() => setIsExpanded(false)} className='transition-all rounded-full border-[1px] border-brand-400 text-brand-400 px-8 mt-4 text-lg font-medium shadow-sm hover:brightness-[80%] '>
                Close
              </button>
            </>
          }
          {!isExpanded &&
            <button onClick={() => setIsExpanded(true)} className='mt-4 transition-all rounded-full border-[1px] border-brand-400 text-brand-400 px-8 py-1 text-lg font-medium shadow-sm hover:brightness-[80%] '>
              Read on
            </button>
          }
        </div>

      </div>
    </div>
  )
};

