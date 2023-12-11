/* eslint-disable @next/next/no-img-element */
"use client"
import SnapshotService from "@/components/SnapshotService"


export default function AccessingFilecoinData() {
  return (
    <div className="relative h-full w-full md:min-h-[70vh]">
      <div className="relative flex flex-col justify-center pt-16 pb-4 px-8">
        <h2 className='mt-7 text-stone-200 text-5xl text-center'>
          Accessing Filecoin Data
        </h2>
       <SnapshotService />
      </div>
    </div>
  )
}
