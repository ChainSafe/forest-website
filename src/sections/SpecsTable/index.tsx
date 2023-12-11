/* eslint-disable @next/next/no-img-element */
"use client"
import Button from "@/components/Button"
import { IconArrowUpRight } from "@tabler/icons-react"

const cards = [
  {
    desc: 'Bootstrap your custom full node.',
    link: 'https://chainsafe.github.io/forest/basic_usage.html',
  },
  {
    desc: 'Select Calibration testnet or Filecoin main network.',
    link: 'https://chainsafe.github.io/forest/configuration.html',
  },
  {
    desc: 'Test our new HTTP-RPC interfaces.',
    link: 'https://chainsafe.github.io/forest/developer_documentation/rpc_api_compatibility.html',
  },
  {
    desc: 'Import the Filecoin archive.',
    link: 'https://chainsafe.github.io/forest/developer_documentation/filecoin_archive.html',
  },
]

const specs = [
  {
    name: "Requirements",
    col: {
      cpu: 'CPU',
      ram: 'RAM',
      ssd: 'SSD',
      gpu: 'GPU',
    }
  },
  {
    name: "Forest (minimal)",
    col: {
      cpu: '2-core',
      ram: '8 GiB',
      ssd: '128 GiB',
      gpu: 'none'
    }
  },
    { name: "Forest (recommended)", 
      col:{
      cpu: '4-core',
      ram: '16 GiB',
      ssd: '512 GiB (NVMe)',
      gpu: 'none'
    }},
    {name: "Lotus (minimal)", 
      col:{
      cpu: '8-core',
      ram: '32 GiB',
      ssd: '512 GiB (NVMe)',
      gpu: 'none'
    }},
    {name: "Lotus (storage miner)", 
      col:{
      cpu: '8-core',
      ram: '256 GiB',
      ssd: '2 TiB (NVMe)',
      gpu: 'Nvidia (11GiB VRAM)'
    }}
]

export default function SpecsTable() {
  console.log(specs.map((m) => m.col.cpu));
  return (
    <div className="relative h-full w-full md:min-h-[70vh]">
      <div className="relative flex flex-col items-center justify-center py-14 px-8">
        <h2 className='text-white text-5xl font-normal text-center py-8 md:max-w-3xl'>
         Requirements to run a Filecoin node on the mainnet:
        </h2>
        <table className='w-full divide-y divide-emerald-800 table-auto md:table-fixed'>
          <thead>
            {specs.map((title, index) => <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-400 sm:pl-0" scope="col" key={index}>{title.name}</th>)}
          </thead>
        <tbody className="divide-y divide-stone-900">
        <tr>
          {specs.map((item, index) => <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-300 sm:pl-0" key={index + item.col.cpu}>{item.col.cpu}</td>)}
        </tr>
        <tr>
          {specs.map((item, index) => <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-300 sm:pl-0" key={item.col.ram + index}>{item.col.ram}</td>)}
        </tr>
        <tr>
          {specs.map((item, index) => <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-300 sm:pl-0" key={item.col.ssd + index}>{item.col.ssd}</td>)}
        </tr>
        <tr>
          {specs.map((item, index) => <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-300 sm:pl-0" key={item.col.gpu + index}>{item.col.gpu}</td>)}
        </tr>
        </tbody>
        </table>
        </div>
    </div>
  )
}
