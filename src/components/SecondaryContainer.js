import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies && (
        <div className='bg-black'>
          <div className='relative z-20 pl-12 -mt-52'>
            <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList  title={"Popular"} movies={movies.popularMovies}/>
      <MovieList  title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList  title={"Horror Movies"} movies={movies.horrorMovies}/>
          </div>
      {/* MovieList- Popular
    MovieCard* n
    MovieList - Now Playing
    MovieList - Trending
    MovieList - Hrror
*/}


    </div>
    )
  )
}

export default SecondaryContainer