import React, {useEffect, useState} from 'react'
import axios from 'axios'
import requests from './DatabaseRoutes'
import './Row.css'
import MoviePoster from './MoviePoster'

const Row = ({name, fetch, isImportant}) => {
    const [movies, setMovies] = useState([]); 

    useEffect(() => { 
        const getData = async () => {
            await axios.get(fetch).then((res) => {
                
                setMovies(res.data.results); 
            })
        }
        getData(); 
    },[])



    return (
        <div className = "Row"> 
          <div className = "Row__title">
          {name}
          </div>
          <div className = "Row__posters"> 
          {isImportant ? movies.map(movie => {
              return <MoviePoster url={movie.backdrop_path}/>
          }) :    movies.map(movie => {
              return <MoviePoster url={movie.poster_path}/>
          })}
       
          </div>
        </div>
    )
}

export default Row; 