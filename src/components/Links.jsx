import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import {BsImage} from 'react-icons/bs'
import {RiVideoLine} from 'react-icons/ri'
import {FaRegNewspaper} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const links= [
  {title:'All', icon: <AiOutlineSearch />, rel:'/search'},
  {title:'Images', icon: <BsImage />, rel:'/image'},
  {title:'Videos', icon: <RiVideoLine />, rel:'/video'},
  {title:'News', icon: <FaRegNewspaper />, rel:'/news'},
]
const Links = () => {
 
  return (
    <div className='flex justify-start items-center gap-4 p-5 pb-0'>
      {links.map((link)=>(
        <NavLink key={link.title} to={link.rel} className={({isActive})=>isActive?'text-blue-700 border-b-2 ml-1 sm:ml-4 border-blue-700' : 'text-gray-900 ml-1 sm:ml-4 dark:text-gray-200'}>
          <div className='flex justify-center font-medium text-lg items-center gap-3 hover:text-blue-600'>
            {link.icon}
            {link.title}
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Links