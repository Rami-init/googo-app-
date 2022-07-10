import axios from 'axios'
import {createContext, useContext, useEffect, useState} from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const Provider = ({children}) => {
  const [searchTrem, setSearchTerm] = useState('tesla')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [error, setError] = useState('')
  console.log(searchTrem)
  const getDataResult = async(type)=>{
    setLoading(true)
    try {
      const {data} = await axios.get(`${baseUrl}${type}/q=${searchTrem}`, {
          headers: {
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY_API
          }
      })
      if(type.includes('/news')){
        setResult(data.entries)
      } else {
        setResult(data)
      }
      setResult(data)
      setLoading(false)  
    } catch (error) {
        setError(error.response.data.errors)
    }
  }
  return (
    <ResultContext.Provider value={{
        getDataResult,
        loading,
        result,
        error,
        searchTrem,
        setSearchTerm
    }}>
        {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = ()=> useContext(ResultContext)

