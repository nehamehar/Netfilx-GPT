import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from './GPTSearchBar'
import { LOGIN_BACKGROUNDIMG } from '../utils/constants'
const GPTSearch = () => {
  return (
    <div>
         <div className='fixed -z-10' >
                <img src={LOGIN_BACKGROUNDIMG}
            alt='logo'/>
            </div>
        <GPTSearchBar/>
        <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch