import { useEffect, useState } from 'react'
import Form from './Form'
import NoPortalModal from './NoPortalModal'

function App() {
  const [Data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [Error, setError] = useState()

  const [rating, setRating] = useState()

  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '2ac9d2dbc3mshc8ab683bab78e4ap1a92d3jsn27de123263e9',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };


  const getData = async () => {
    setIsLoading(true)
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))

    setIsLoading(false)
  }

  useEffect(() => {
    if (!rating)
      getData()
    else {
      if (rating == 0)
        setData((prev) => prev.filter((item) => item?.rating < 9))
      else if (rating == 1)
        setData((prev) => prev.filter((item) => item.rating == 9))
      else if (rating == 2)
        setData((prev) => prev.filter((item) => item.rating > 9))
    }
  }, [rating])


  console.log(Data)

  if (isLoading) {
    return (
      <div className='flex justify-center items-center text-center h-screen bg-orange-400'>
        <p className='text-green-600'>Loading....</p>
      </div>
    )
  }
  if (Error) {
    return (
      <div className='flex justify-center items-center text-center bg-orange-400 h-screen'>
        <p className='text-red-600'>Opps! Something went wrong.</p>
      </div>
    )
  }

  const onRatingChange = (e) => {
    setRating(e.target.value)
  }




  // console.log("Rating is",rating)


  return (
    <>
    <NoPortalModal/>
      {/* <Form /> */}
      {/* <div className='h-screen flex flex-col justify-center items-center mx-12 flex-wrap gap-5 my-5'>
        <div>

          <label htmlFor="rating"></label>
          <select id='rating' name='rating' onChange={onRatingChange}>
            <option defaultValue={4}>Select</option>
            <option value={0}>Below 9</option>
            <option value={1}>Exactly 9</option>
            <option value={2}>Above 9</option>
          </select>
        </div>
        <div className='h-screen flex justify-center items-center mx-12 flex-wrap gap-5 my-5'>
          {
            Data && Data?.map((item, index) => (<div className='h-1/3 rounded-lg bg-slate-500 mx-3 p-5 w-1/4  overflow-hidden' key={item?.rank}>
              <h3>{item?.title}</h3>
              <h3>{item?.rating}</h3>
              <img src={item?.big_image} alt="" className='h-30 w-60' />
            </div>))
          }

        </div>
      </div> */}
    </>
  )
}

export default App
