import React, { useState, useEffect } from 'react'
import Links from './Links'
import {AiOutlineSearch} from 'react-icons/ai'
import { useResultContext } from '../context/ResultContext'
import { useDebounce } from 'use-debounce'

const Search = () => {
  const {setSearchTerm } = useResultContext()
  const [text, setText] = useState('')
  const [debouncedValue] = useDebounce(text, 300)
  useEffect(()=>{
    setSearchTerm(debouncedValue)
  },[debouncedValue])
  return (
    <div className='flex sm:items-start flex-col relative sm:justify-start m-auto w-4/5 justify-center items-center '>
      <div className='w-3/5 absolute -top-10'>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  className='rounded-full w-full px-4 py-2 text-gray-700 bg-white dark:text-gray-200 outline-none shadow-lg' />
        <div className='relative'>
          <AiOutlineSearch className='absolute -top-7 right-5 text-blue-600 text-lg'/>
        </div>
      </div>
      <Links></Links>
    </div>
  )
}

export default Search