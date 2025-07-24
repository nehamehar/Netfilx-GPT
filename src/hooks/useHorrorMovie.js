import React from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addHorrorMovie } from '../utils/movieSlice';
const useHorrorMovie = () => {
    const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27",
      API_OPTIONS // 2. Use the options object here
    );
    const json = await data.json();
    dispatch(addHorrorMovie(json.results));
  };

  useEffect(() => {
    getHorrorMovies()
  },[]);
}

export default useHorrorMovie