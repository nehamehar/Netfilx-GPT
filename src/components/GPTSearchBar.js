import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lang from '../utils/languageConstants';
import { model } from '../utils/gemini'; // Import the Gemini model
import { API_OPTIONS } from '../utils/constants'; // Your TMDB options
import { addGptMovieResult } from '../utils/gptSlice';

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
    const searchQuery = searchText.current.value;
    if (!searchQuery) return;

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchQuery +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    console.log("Sending this prompt to Gemini:", gptQuery);

    // Add a try...catch block to see any hidden errors
    try {
      console.log("Asking Gemini for recommendations...");
      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const text = response.text();
      
      console.log("Gemini's raw text response:", text); // <-- Log the response from Gemini
// Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro,
      const gptMovies = text.split(",").map(movie => movie.trim());
      console.log("Parsed movie names:", gptMovies); // <-- Log the array of movies

      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      console.log("Final TMDB results:", tmdbResults); // <-- Log the results from TMDB

      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));

    } catch (error) {
      console.error("ERROR during API call:", error);
      // Here you could set an error message to show in the UI
    }
};
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='grid w-1/2 grid-cols-12 bg-black' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText}
            type='text'
            className='col-span-9 p-4 m-4'
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 px-2 py-2 m-4 text-white bg-red-600 rounded-lg' onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>

        </form>
    </div>
  ) 
}

export default GPTSearchBar