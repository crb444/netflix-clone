import React from 'react'
import './MoviePoster.css'



const MoviePoster = ({url, isHighLight}) => {
   
    const path = isHighLight ? `https://image.tmdb.org/t/p/original${url}` : `https://image.tmdb.org/t/p/w500${url}`; 
    


    return (
        <div>
     
            {isHighLight ? <img className="highlight__image"src={path} />  : <img className="poster__image"src={path} /> }
        </div>
    )
}

export default MoviePoster; 