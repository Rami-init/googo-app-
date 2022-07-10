import React from 'react'
const SearchResult = ({result: {total, ts, results}}) => {
  
  return (
    <div className='w-full flex flex-wrap flex-col p-4 sm:px-20 px-2'>
      <div className='flex flex-wrap justify-start items-center text-gray-500 dark:text-gray-200'>
        <p>About {total?.toLocaleString()} results ({ts && `${(ts * .1).toFixed(2)} seconds`})</p> 
      </div>
      <div className='felx flex-wrap flex-col mt-8'>
        {results?.map((item, index)=>(
          <div className='flex itmes-cneter flex-col py-4' key={index}>
            <a href={item?.link} target='_blank' className='py-3'>
              <p className='text-md text-gray-900 cursor-pointer dark:text-gray-200 text-base sm:font-md'>{item?.link.length > 45? `${item?.link?.slice(0, 45)}...` : item?.link}</p>
              <p className='text-indigo-700 text-xl hover:underline text-md sm:text-lg'>{item.title && item.title}</p>
              {item?.description && <p className='text-gray-700 text-md dark:text-gray-500 md:w-3/5 text-sm sm:text-md'> {item?.description}</p>}
            </a>
              {item?.additional_links && <div className='mx-8 px-8 flex items-start flex-col md:w-3/6 bg-gray-50 shadow-lg dark:bg-gray-900 rounded-xl '>
                <p className='text-xl text-gray-500 pt-2 font-semibold'>More Related Links:</p> 
                {item?.additional_links.map((addition, index)=>{
                  if(index <= 2 ){return(
                    <a className='text-md text-gray-700 cursor-pointer py-3 dark:text-gray-200 text-sm sm:text-md' key={index} href={addition.href}>
                      <p>{addition?.href.length > 45? addition?.href?.slice(0, 45) : addition?.href}...</p>
                      <p className='text-indigo-700 text-lg hover:underline '>{addition?.text.length > 35? `${addition?.text?.slice(0, 35)}...` : addition?.text}</p>
                  </a>
                  )}
                })}
              </div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult