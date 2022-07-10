import React from 'react'
import {BallTriangle} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex justify-center items-center max-h-screen w-full'>
        <BallTriangle color='#2196F3' width='80px' height='80px' />
    </div>
  )
}

export default Loading