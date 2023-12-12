import React from 'react';

export default function YoutubeEmbed({ embedId = ''}) { 
  return (
    <div className='relative overflow-hidden'>
      <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          width="100%"
          height="300"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player" 
      />
    </div>
  )
}