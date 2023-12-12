"use client"
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { useContributors } from './useFetchContributors';
import Button from '@/components/Button';

export default function Contributors() {
  
  const { contributors } = useContributors();
  console.log(contributors);
  return (
    <div className='relative h-full w-full max-w-screen-xl mx-auto py-8'>
      <div className="relative grid grid-cols-2 px-8 py-14">
        <div className='relative flex flex-col justify-center md:pt-0 items-start'>
          <h1 className='mt-7 text-green-500 text-5xl font-normal'>
            The seeds of Forest
          </h1>
          <h2 className='mt-3 md:max-w-[600px] text-neutral-400 text-xl font-normal'>
           Thank you for your incredible contributions to Filecoin.
          </h2>
          <div className='flex flex-col pt-16'>
            <h3 className='text-neutral-200 text-xl font-normal'>
              Join the team!
            </h3>
            <div className='flex gap-x-3 pt-3'>
              <Button className='' type='primary' href="http://chainsafe.io/careers">Open Positions</Button>
              {/* <Button className='' type='secondary' href="">Contribution Guidelines</Button> */}
            </div>
          </div>
        </div>
        <div className='grid content-center justify-center gap-x-2 gap-y-2 grid-cols-8 md:grid-cols-10 lg:grid-cols-12'>
          {contributors && contributors.map((c) => (
            <a className='transition-all pb-2 hover:brightness-75' key={c.id} href={c.html_url} target="_blank" rel="noopener noreferrer">
              <img src={c.avatar_url} alt={c.id} className="rounded-md w-auto min-h-12" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
};

