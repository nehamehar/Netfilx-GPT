import React from 'react'
import { TMDB_IMAGE_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='pr-5 w-44'><img className="w-full transition-transform duration-300 rounded-md cursor-pointer hover:scale-110" alt="Movie Card" src={TMDB_IMAGE_CDN_URL + posterPath}/></div>
  )
}

export default MovieCard