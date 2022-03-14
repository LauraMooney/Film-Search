import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import Footer from './Footer';

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App () {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Film Search</h1>
      <p>
        Search films by title
      </p>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for films"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
         <Footer />
        </div>   
      ) : (
        <div className="empty">
          <h2>No films found</h2>
        </div>
      )}
    </div>
  );
};

export default App;