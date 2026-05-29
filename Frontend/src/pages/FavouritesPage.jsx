import React from "react";
import MovieCard from "../components/MovieCard";
import { useOutletContext } from "react-router";
import Navbar from "../components/Navbar.jsx";
import "./FavouritesPage.css";
const FavouritesPage = () => {
  const { favourite, setfavourite } = useOutletContext();
  const buttonType = "Remove from Favourites";
  const removeMovie = (movieId) => {
    const updatedFavouriteMovies = favourite.filter(
      (movie) => favourite.imdbID !== movieId,
    );
    setfavourite(updatedFavouriteMovies);
    localStorage.setItem("favourite", JSON.stringify(updatedFavouriteMovies));
  };

  return (
    <div className="movieContainer">
      <Navbar />

      <div className="favouritesMovieCard">
        {favourite.length === 0 ? (
          <h1>No Favourite Movies Found</h1>
        ) : (
          favourite.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              favourite={favourite}
              setfavourite={setfavourite}
              Title={movie.Title}
              Poster={movie.Poster}
              Type={movie.Type}
              buttonType={buttonType}
              onButtonClick={() => {
                setfavourite(
                  favourite.filter(
                    (favMovie) => favMovie.imdbID !== movie.imdbID,
                  ),
                );
                
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
