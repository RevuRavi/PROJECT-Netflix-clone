import { useEffect,useState } from 'react'
import axios from '../../axios'
import {image_Url,API_KEY} from '../../Constants/constant'
import Youtube from 'react-youtube'
import React from 'react'
import './RowPost.css'
function RowPost(props) {
const[movies,setMovies]=useState([])
const[urlId,setUrlId]=useState('')

useEffect(() => {
 axios.get(props.url).then((response)=>{
  // console.log(response.data)
  setMovies(response.data.results)
 }).catch(err=>{
  alert('Network Error')
 })
})

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
   
    autoplay: 1,
  },
};
const handleMovieTriler=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data)
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{
      console.log('Array empty')
    }
  })
}

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movies.map((obj)=>
      <img onClick={()=>{handleMovieTriler(obj.id)}} className={props.isSmall? 'smallPoster':'poster'} src={`${image_Url+obj.backdrop_path}`} alt='poster'></img>
      )}
   
      </div>
      { urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
