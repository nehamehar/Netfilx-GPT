import { TMDB_IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  // Some movies might not have a poster, so we add this check
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4">
      <img
        alt="Movie Card"
        // Combine the base URL with the posterPath to create the full URL
        src={TMDB_IMAGE_CDN_URL + posterPath}
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
