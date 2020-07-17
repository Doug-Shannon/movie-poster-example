import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./movie/movie";

function App() {
  const [movies, setMovies] = useState([]);
  const mdbUrl = "https://api.themoviedb.org/3/";
  const posterUrl = "http://image.tmdb.org/t/p/w500/";
  const mdbApi = "api_key=";
  const mdbSearch = `${mdbUrl}search/movie/`;

  useEffect(() =>
    // fetch("https://ghibliapi.herokuapp.com/films")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setMovies(data)),
    {
      searchMovie({ title: "the matrix" }).then((results) => {
        setMovies(results.results);
      });
    }, []);

  const searchMovie = (movie) => {
    // www.themoviedb.org/search/movie?api_key=asdlkjasjdalsjkd&query=the%20matrix
    return fetch(
      `${mdbSearch}?${mdbApi}&query=${encodeURIComponent(movie.title)}`
    )
      .then((resp) => resp.json())
      .catch((error) => console.error(error));
  };

  const textChanged = (e) => {
    searchMovie({ title: e.target.value }).then((results) => {
      setMovies(results.results);
    });
  };

  debugger;
  return (
    <div>
      <input onChange={textChanged} />
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {movies.map((movie) => {
          return (
            <Movie
              name={movie.title}
              posterpath={`${posterUrl}${movie.poster_path}`}
            ></Movie>
          );
        })}{" "}
      </div>
    </div>
  );
}

export default App;
