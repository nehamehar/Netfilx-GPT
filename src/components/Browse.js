import React from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
const Browse = () => {
  useNowPlayingMovie()

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