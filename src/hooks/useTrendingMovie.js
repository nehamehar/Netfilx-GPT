import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTrendingMovie } from '../utils/movieSlice';
const useTrendingMovie = () => {
    const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS // 2. Use the options object here
    );
    const json = await data.json();
    dispatch(addTrendingMovie(json.results));
  };

  useEffect(() => {
    getTrendingMovies()
  },[]);
}

export default useTrendingMovie