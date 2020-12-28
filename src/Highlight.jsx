import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MoviePoster from './MoviePoster'
import './Highlight.css'


const Highlight = ({fetch}) => {
    const [movies, setMovie] = useState([]); 

    useEffect(() => { 
        const number = Math.round(Math.random() * (20 - 1) + 1); 
       
        const getData = async () => {
            await axios.get(fetch).then((res) => {
        
                setMovie(res.data.results[number]); 
            })
        }
        getData(); 
    },[])



    return ( 
        <div className = "Highlight"> 
         <div className= "Highlight__Title">
             {movies.title}
         </div>
         <div className= "Highlight__Overview">
             {movies.overview}
         </div>
          <div className = "Highlight__Image">
             
            <MoviePoster url={movies.backdrop_path} isHighLight/>
          </div>
        </div>
    )
}

export default Highlight; 