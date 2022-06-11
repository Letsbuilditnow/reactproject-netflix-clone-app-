import React , {useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios.js'
import './Banner.css' ;

function Banner() {
 const [movie,setMovie]=useState('')
 function randomNumber(min,max){
  return Math.floor(Math.random()* (max-min+1)+min)
 }
 useEffect(() => {
    axios.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[randomNumber(20,0)])
  
    })
  }, [])
  console.log(movie)
  

  return (
    <div 
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} className='banner'>
      
        <div className='content'>
            <h1 className='title'> {movie ? movie.title ?movie.title:movie.name:''}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:''} </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner