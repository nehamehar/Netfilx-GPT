import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBackground = ({movieId}) => {
const trailerVideo = useSelector (store=>store.movies?.trailerVideo)
    //fetch trailer video for that api call and for api call we need movie id/fetch trailer video && updating the store with trailer video data
    useMovieTrailer(movieId)
  return (
    <div><iframe className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/OWEq2Pf8qpk?si=trV-WmIX1wRTUWXy"+trailerVideo?.key + "?&autoplay=1&mute=1"}
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin">
    </iframe></div>
  )
}

export default VideoBackground