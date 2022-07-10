import { Navigate, Route, Routes } from 'react-router-dom'

import Result from './Result'

const RoutesSearch = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate to='/search' replace />} />
        <Route path='/*' element={< Result/>} />
      </Routes>
    </div>
  )
}

export default RoutesSearch