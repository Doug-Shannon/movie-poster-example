import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Movie from "./movie/movie";

const mdbUrl = "https://api.themoviedb.org/3/";
const posterUrl = "http://image.tmdb.org/t/p/w500/";
const mdbApi = "api_key=3da7e91a9c2125919c37b777de884c03";
const mdbSearch = `${mdbUrl}search/movie/`;

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovie = useCallback(({ title }) => {
    // www.themoviedb.org/search/movie?api_key=asdlkjasjdalsjkd&query=the%20matrix
    if (title.length > 0) {
      return fetch(`${mdbSearch}?${mdbApi}&query=${encodeURIComponent(title)}`)
        .then((resp) => resp.json())
        .catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    searchMovie({ title: "the matrix" }).then((results) => {
      setMovies(results.results);
    });
  }, [setMovies, searchMovie]);

  useEffect(() => {
    if (movies.length > 0) {
      console.log("2nd use effect: " + movies[0].title);
    }
  }, [movies]);

  const textChanged = (e) => {
    searchMovie({ title: e.target.value }).then((results) => {
      setMovies(results.results);
    });
  };

  return (
    <div>
      <input onChange={textChanged} />
      <div className="movieList">
        {movies.map((movie) => {
          if (movie.poster_path != null) {
            return (
              <Movie
                key={movie.id}
                name={movie.title}
                description={movie.overview}
                onClick={(e) => {
                  console.log("clicked");
                }}
                posterpath={`${posterUrl}${movie.poster_path}`}
              ></Movie>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
