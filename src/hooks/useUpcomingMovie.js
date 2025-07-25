import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUpcomingMovie } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';
const useUpcomingMovie = () => {
     const dispatch = useDispatch();
const upcomingMovies = useSelector ((store)=>store.movies.nowPlayingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS // 2. Use the options object here
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    if (!upcomingMovies) {
            getUpcomingMovies();
        }
    }, []);
}

export default useUpcomingMovie

