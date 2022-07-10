import React, { useEffect } from 'react'
import Loading from './Loading'
import { useLocation } from 'react-router-dom'
import SearchResult from './routes/SearchResult'
import NewsResult from './routes/NewsResult'
import ImageResult from './routes/ImageResult'
import VideosResult from './routes/VideosResult'

import {useResultContext} from '../context/ResultContext'

const Result = () => {
  const {loading, result, error, searchTerm, getDataResult} = useResultContext()
  const location = useLocation()
  useEffect(()=>{
    getDataResult(location?.pathname)
  },[location?.pathname, searchTerm])
  if(loading) return <Loading />
  switch(location.pathname) {
    case '/search':
      return <SearchResult result={result}/>
    case '/news':
      return <NewsResult result={result} loading={loading}/>
    case '/video':
      return <VideosResult result={result}/>
    case '/image':
      return <ImageResult result={result}/>
    default:
      return 'nothing here'
  }
}

export default Result