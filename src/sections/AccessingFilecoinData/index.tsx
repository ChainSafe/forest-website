/* eslint-disable @next/next/no-img-element */
"use client"
import DownloadArchive from "@/components/DownloadArchive"
import SnapshotService from "@/components/SnapshotService"


export default function AccessingFilecoinData() {
  return (
    <div className="relative h-full w-full py-14" id="snapshot-service">
      <div className="relative flex flex-col justify-center pt-16 pb-4 px-8">
        <h2 className='mt-7 text-stone-200 text-5xl text-center'>
          Accessing Filecoin Data
        </h2>
        <SnapshotService />
        <DownloadArchive />
      </div>
    </div>
  )
}
