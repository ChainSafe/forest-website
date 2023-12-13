import React from 'react';

const navlinks = [
  {
    title: 'Download',
    link: '#download',
  },
  {
    title: 'Documentation',
    link: '#documentation',
  },
  {
    title: 'Beta Program',
    link: '#beta-program',
  },
]

export default function Navbar() {
  return (
    <nav className='transition-all md:translate-x-1/2 w-full md:w-[50%] mx-auto flex justify-center items-center z-20 backdrop-blur-lg backdrop-opacity-90 border-[1px] border-gray-700 rounded-full py-2 fixed top-3 flexx'>
      {navlinks.map((link, index) => (
        <a key={index} href={link.link} className='hover:text-brand-400 px-4 text-gray-100 text-md font-md'>
          {link.title}
        </a>
      ))}
    </nav>
  )
}