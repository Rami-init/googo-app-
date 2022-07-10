import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillMoonFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import Logo from '../assets/google-logo.png'
import Search from './Search.jsx'

const Navbar = ({setDarkTheme, darkTheme}) => {
  return (
    <div className='border-b dark:border-gray-700 border-gray-200 p-5 pb-0 flex-wrap ms:justify-between justify-center items-center '>
        <div className='flex justify-between items-center space-x-5 w-full'>
            <Link to='/' className=' text-xl font-semibold mx-2 py-2 flex items-center'>
                <img src={Logo} alt="logo" className='w-5 h-5 object-cover'/><span className='text-red-600'>o</span><span className='text-blue-600'>g</span><span className='text-green-600'>o</span>
            </Link>
            <button
                className='px-4 py-1 max-w-45 rounded-3xl border-gray-400 hover:shadow-lg cursor-pointer transition duration-900 ease-in-out dark:border-gray-700 text-50 dark:text-gray-900 dark:bg-gray-100 bg-gray-400 flex justify-center items-center' 
                onClick={()=>setDarkTheme(!darkTheme)}
            >
                {darkTheme? <span className='flex items-center gap-2'><FaSun className='text-orange-700'/> Light</span> : <span className='flex items-center gap-2'>Dark <BsFillMoonFill className='text-gray-500'/></span>}
            </button>
        </div>
        <Search />
    </div>
  )
}

export default Navbar