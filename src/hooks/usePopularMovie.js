import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const usePopularMovie =()=>{
    const dispatch = useDispatch();
const popularMovies = useSelector ((store)=>store.movies.nowPlayingMovies);
  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS // 2. Use the options object here
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovie()
  },[]);
}

export default usePopularMovie;