import moment from 'momnet'
import Loading from '../Loading'
const NewsResult = ({result, loading}) => {
  if(loading) return <Loading />
  return (
    <div className='flex justify-start items-center flex-col px-8 pt-9'>
        {result && result?.map((item, index)=>(
          <a href={item?.link} key={index} target='_blank' rel='noreferrrer' className='sm:w-4/5 w-full flex flex-col items-start gap-4 py-3 px-4 my-5 border-2 rounded-lg'>
            <div className='flex justify-between items-center gap-4 w-full'>
              <p className='text-md ms:text-sm hover:text-blue-700 text-gray-900 dark:text-gray-200'>{item?.title}</p>
              <p className='text-sm text-gray-700 dark:text-gray-200 font-semibold hover:text-red-500'>{item?.source?.title}</p>
            </div>
            <p className='text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 break-words'>{item?.link}</p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{moment(item?.published).startOf('ss').fromNow()}</p>
          </a>
        ))}
    </div>
  )
}

export default NewsResult