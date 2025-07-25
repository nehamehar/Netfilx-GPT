import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
// the trailer movie we get from  store and to get the data from store we need selector to get from store
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
       if (!movies) return;
    // i only want to show 1 movie trailler and under nowPLAYINGMovies 20 movies ther so we did
    const mainMovie = movies[0]
    const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer