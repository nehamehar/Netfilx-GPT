import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lang from '../utils/languageConstants';
import { model } from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
// FIX 1: Imports are cleaned up into a single line.
import { addGptMovieResult, setGptLoading } from '../utils/gptSlice';

const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // Helper function to search TMDB for a single movie
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" + movie,
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
      // Start the loading state
      dispatch(setGptLoading(true)); 
      
      const searchQuery = searchText.current.value;
      if (!searchQuery) {
        dispatch(setGptLoading(false)); // Turn off loading if search is empty
        return;
      }

      const gptQuery =
        "Act as a Movie Recommendation System and suggest some movies for the query: " +
        searchQuery +
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      try {
        const result = await model.generateContent(gptQuery);
        const response = await result.response;
        const text = response.text();
        
        const gptMovies = text.split(",").map(movie => movie.trim());
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));

      } catch (error) {
        console.error("ERROR during API call:", error);
        // You could set an error message here to show in the UI
      } finally {
        // FIX 2: Add this 'finally' block. This code will run
        // whether the search was successful or failed.
        dispatch(setGptLoading(false));
      }
    };

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='grid w-1/2 grid-cols-12 bg-black rounded-lg' onSubmit={(e)=> e.preventDefault()}>
            <input 
                ref={searchText}
                type='text'
                className='col-span-9 p-4 m-4 rounded-lg'
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button 
                className='col-span-3 px-4 py-2 m-4 text-white bg-red-600 rounded-lg' 
                onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  ) 
}

export default GPTSearchBar;