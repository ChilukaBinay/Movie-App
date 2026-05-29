import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import Navbar from "../components/Navbar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import "../App.css";
import { movieApi } from "../api.jsx";
import { useOutletContext } from "react-router";

const Home = () => {
  const { favourite, setfavourite } = useOutletContext();

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [input, setInput] = useState("");
  const [movieSearch, setMovieSearch] = useState("batman");

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }, [favourite]);

  // API Call
  useEffect(() => {
    const apiCall = async () => {
      try {
        setloading(true);
        const getMovieApi = await movieApi(movieSearch);

        if (getMovieApi.Response === "False") {
          setdata([]);
          seterror(getMovieApi.Error);
        } else {
          setdata(getMovieApi.Search);
          seterror("");
        }
      } catch (error) {
        seterror(error.message);
      } finally {
        setloading(false);
      }
    };

    apiCall();
  }, [movieSearch]);
  // function onButtonClick() {
  //   const isFavourite = favourite.some((item) => item.imdbID === movie.imdbID);
  //   if(!isFavourite){
  //     const updatedFavouriteMovies = [...favourites, movie];
  //   }else{

  //   }

  // }
  const addToFavourite = (movie) => {
    console.log("Clicked Movie:", movie.Title);
    console.log("Movie ID:", movie.imdbID);

    const exists = favourite.some(
      (favMovie) => favMovie.imdbID === movie.imdbID,
    );

    if (!exists) {
      setfavourite([...favourite, movie]);
    } else {
      const updatedFavouriteMovies = favourite.filter(
        (item) => movie.imdbID !== item.imdbID,
      );

      setfavourite(updatedFavouriteMovies);
    }
  };
  // Search Button Function
  const handleSearch = () => {
    setMovieSearch(input);
  };
  const buttonType = "Add to Favourites";
  return (
    <div>
      <Navbar />

      <SearchBar
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />

      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="Navbar">
          {data.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              favourite={favourite}
              setfavourite={setfavourite}
              Title={movie.Title}
              Poster={movie.Poster}
              Type={movie.Type}
              buttonType={buttonType}
              onButtonClick={() => addToFavourite(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
