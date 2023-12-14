import React from 'react';

const navlinks = [
  {
    title: 'Download',
    link: '#download',
  },
  {
    title: 'Snapshot Service',
    link: '#snapshot-service',
  },
  {
    title: 'Documentation',
    link: '#documentation',
  },
  {
    title: 'Open Beta',
    link: '#beta-program',
  },
]

export default function Navbar() {
  return (
    <nav className='transition-all md:translate-x-1/2 w-full md:w-[50%] mx-auto flex justify-center items-center z-20 backdrop-blur-2xl backdrop-opacity-90 border-[1px] bg-black bg-opacity-40 border-neutral-700 rounded-full py-2 fixed top-3 flexx'>
      {navlinks.map((link, index) => (
        <a key={index} href={link.link} className='hover:text-brand-400 px-4 text-gray-100 text-md font-md'>
          {link.title}
        </a>
      ))}
    </nav>
  )
}