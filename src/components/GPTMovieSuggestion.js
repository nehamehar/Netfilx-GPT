import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  // Correctly get the data from the Redux store
  const { movieResults, movieNames, isLoading } = useSelector((store) => store.gpt);
if (isLoading) {
    return <h1 className="p-4 m-4 text-2xl text-center text-white">Please wait a moment before trying again....</h1>;
  }
  // If there are no names yet, render nothing
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 text-white bg-black rounded-lg bg-opacity-90">
      {/* We map over the array of movie names. For each name, we also get its index.
        We then use that index to find the matching list of movies from the movieResults array.
      */}
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]} // Use the movie results at the correct index
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;