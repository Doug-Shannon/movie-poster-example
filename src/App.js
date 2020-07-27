import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./movie/movie";

function App() {
  const [movies, setMovies] = useState([]);
  const mdbUrl = "https://api.themoviedb.org/3/";
  const posterUrl = "http://image.tmdb.org/t/p/w500/";
  const mdbApi = "api_key=3da7e91a9c2125919c37b777de884c03";
  const mdbSearch = `${mdbUrl}search/movie/`;

  useEffect(() => {
    searchMovie({ title: "the matrix" }).then((results) => {
      setMovies(results.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      console.log("2nd use effect: " + movies[0].title);
    }
  }, [movies]);

  const searchMovie = ({title}) => {
    // www.themoviedb.org/search/movie?api_key=asdlkjasjdalsjkd&query=the%20matrix
    if (title.length > 0) {
      return fetch(`${mdbSearch}?${mdbApi}&query=${encodeURIComponent(title)}`)
        .then((resp) => resp.json())
        .catch((error) => console.error(error));
    }
  };

  const textChanged = (e) => {
    searchMovie({ title: e.target.value }).then((results) => {
      setMovies(results.results);
    });
  };

  return (
    <div>
      <input onChange={textChanged} />
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {movies.map((movie) => {
          if (movie.poster_path != null) {
            return (
              <Movie
                key={movie.id}
                name={movie.title}
                posterpath={`${posterUrl}${movie.poster_path}`}
              ></Movie>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
