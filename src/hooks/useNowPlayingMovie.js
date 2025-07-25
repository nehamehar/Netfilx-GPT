import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const useNowPlayingMovie =()=>{
    const dispatch = useDispatch();
const nowPlayingMovies = useSelector ((store)=>store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS // 2. Use the options object here
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies()
  },[]);
}

export default useNowPlayingMovie;