import React from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useHorrorMovie from '../hooks/useHorrorMovie'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import useTrendingMovie from '../hooks/useTrendingMovie'
const Browse = () => {
  useNowPlayingMovie()
  usePopularMovie()
  useHorrorMovie()
  useUpcomingMovie()
  useTrendingMovie()
  return (
    <div><Header/>
    <MainContainer/>
    <SecondaryContainer/>
    {/* // we will do thing */}
    {/*
MainContainer
- VideoBackground
- VideoTitle
SecondaryContainer
- MovieList * n 
- Cards*n
*/}
</div>
  )
}

export default Browse