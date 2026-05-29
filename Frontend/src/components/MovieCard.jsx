import { useState } from "react";
import "./MovieCard.css";

function MovieCard({ movie, buttonType, onButtonClick, favourite, active }) {
  const isFavourite = favourite.some((item) => item.imdbID === movie.imdbID);
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      ""
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
      </div>
      <button
        className={isFavourite ? "movie-btn" : "movie-btn-2"}
        onClick={onButtonClick}
      >
        {isFavourite ? "Remove from Favourite" : "Add to Favourite"}
      </button>
    </div>
  );
}

export default MovieCard;
