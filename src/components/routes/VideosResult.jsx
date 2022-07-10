import React from 'react'
import ReactPlayer from 'react-player'
const VideosResult = ({result: {results, ts, total}}) => {
  return (
    <div className='flex flex-col mt-5 px-8'>
      <div className='flex flex-wrap justify-start items-center text-gray-500 dark:text-gray-200'>
        <p>About {total?.toLocaleString()} results ({ts && `${(ts * .1).toFixed(2)} seconds`})</p> 
      </div>
      <div className='py-2 sm:py-6 flex w-full justify-between gap-2 flex-wrap items-center'>
        {results?.map((item, index)=>(
          <a href={item?.link} target='_blank' key={index} className='flex max-w-350 mt-4 flex-grow-0 overflow-hidden flex-wrap flex-col items-center'>
            {item.additional_links[0].href && <ReactPlayer loading='lazy' url={item?.additional_links[0]?.href} controls width='276px' height='180px' />}
          </a>
        ))}
      </div>

    </div>
  )
}

export default VideosResult