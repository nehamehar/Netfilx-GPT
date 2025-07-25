import React from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useHorrorMovie from '../hooks/useHorrorMovie'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import useTrendingMovie from '../hooks/useTrendingMovie'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovie()
  usePopularMovie()
  useHorrorMovie()
  useUpcomingMovie()
  useTrendingMovie()

  return (
    <div><Header/>
    {showGptSearch?(<GPTSearch/>):(<><MainContainer/>
    <SecondaryContainer/></>)}
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