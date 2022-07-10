import React from 'react'
const ImageResult = ({result: { image_results }}) => {
  return (
    <div className='py-2 sm:py-6 flex w-full justify-between gap-2 flex-wrap items-center'>
      {image_results?.map((item, index)=>(
        <a href={item.link} target='_blank' key={index} className='flex max-w-350 flex-grow-0 overflow-hidden flex-wrap flex-col items-center'>
          <img src={item?.image?.src} className='w-full h-45 overflow-hidden object-cover' alt='image' />
          <p className='text-gray-700 text-sm dark:text-gray-500'>{item?.link?.href?.length > 35? `${item?.link?.href?.slice(0, 35)}...`: item?.link?.href}</p>
          <p className='text-gray-900 text-sm dark:text-gray-200'>{item?.link?.title?.length > 35? `${item?.link?.title?.slice(0, 35)}...`: item?.title?.href}</p>
        </a>
      ))}
    </div>
  )
}

export default ImageResult