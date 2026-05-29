import SearchBar from "./components/SearchBar.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import MovieCard from "./components/MovieCard.jsx";
import { useEffect, useState } from "react";
import { movieApi } from "./api.jsx";
import Home from "./pages/Home.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import { Outlet } from "react-router";
function App() {
  const [favourite, setfavourite] = useState(() => {
    const saved = localStorage.getItem("favourite");
    return saved ? JSON.parse(saved) : [];
  });
  return (
    <>
      <Outlet
        context={{
          favourite,
          setfavourite,
        }}
      />
    </>
  );
}

export default App;
