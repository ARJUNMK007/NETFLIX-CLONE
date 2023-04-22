import React from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../constants/constants'
import { useEffect,useState } from 'react'

function Banner() {
  const [movie, setmovie] = useState([])
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results)
      setmovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
  
  }, [])
  return (
    
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}} className='Banner'>
      <div className='content'>
        <h1>{movie? movie.title:""}</h1>
        <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
        </div>
        <h1 className='description'>{movie? movie.overview:""}</h1>
      </div>
      <div className="fade"></div>

    </div>
  )
}

export default Banner
