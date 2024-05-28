import { useEffect, useState } from 'react';
import MovieCard from './Componets/MovieCard';
import './App.css';


const API_URL='http://www.omdbapi.com?apikey=8a577f3c';
const movie1 ={
  
    "Title": "The Fast and the Furious",
    "Year": "2001",
    "imdbID": "tt0232500",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"

}
function App() {
  const [movies, setMovies]= useState([]);
  const [searchTerm ,setSearchTerm ]= useState('')
  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  
  }
  useEffect(()=>{
   searchMovies('Fast and Furious')
  },[])
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img
        src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
        alt='search'
        onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length >0
        ? (
          <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie ={movie}/>
            ))}
         </div>
         ) :(
             <div className='empty'>
              <h2>No movies found</h2>
             </div>
           )
      }
    </div>
  );
}

export default App;
