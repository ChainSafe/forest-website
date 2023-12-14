/* eslint-disable @next/next/no-img-element */
"use client"

const specs = [
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

export default function SpecsTable2() {
  return (
    <div className="relative h-full w-full md:min-h-[50vh]">
      <div className="relative flex flex-col md:items-center sm:justify-center py-14 px-8">
        <h2 className='text-neutral-300 text-5xl font-normal text-center py-8 '>
         Requirements to run a Filecoin node on the mainnet:
        </h2>
        <ul className='mt-5 grid w-full md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10'>
          {specs.map((nodeType, index) => (
            <li key={nodeType.name + index} className='flex flex-col xl:items-center'>
              <h3 className="text-xl text-neutral-100">{nodeType.name}</h3>
              <div className='mt-3 w-full grid grid-cols-1 gap-x-2 gap-y-2 xl:gap-x-1 xl:gap-y-1'>
                <div className='stat-wrapper'>
                <h3 className="stat-header">{nodeType.col.cpu}</h3>
                <p className='stat-desc'>CPU</p>
              </div>
              <div className='stat-wrapper'>
                <h3 className="stat-header">{nodeType.col.ram}</h3>
                <p className='stat-desc'>RAM</p>
              </div>
              <div className='stat-wrapper'>
                <h3 className="stat-header">{nodeType.col.ssd}</h3>
                <p className='stat-desc'>SSD</p>
              </div>
              <div className='stat-wrapper'>
                <h3 className="stat-header">{nodeType.col.gpu}</h3>
                <p className='stat-desc'>GPU</p>
                </div>
              </div>

            </li>
          ))}

        </ul>
        </div>
    </div>
  )
}
