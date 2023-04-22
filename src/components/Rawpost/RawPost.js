import React from 'react'
import './RawPost.css'
import { useEffect,useState } from 'react'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'


function RawPost(props) {

const[movies,setMovies]=useState([])
const [url, seturl] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      
      setMovies(response.data.results)

   
    })
  
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      
      autoplay: 1,
     
    },

    
  };
  const handleMovie=(id)=>{

    console.log(id)
    axios.get(`movie/${id}/videos?api_key=9270d819c791d76e4855c8a69d79d2e4&language=en-US`).then(response=>{
      console.log(response.data)
      seturl(response.data.results[0])
    })


}

  

 
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
        <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPost':'poster'}src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
     </div>
      { url && <YouTube opts={opts} videoId={url.key}/> }
  
    </div>
    
  )
}


export default RawPost

