import React from "react";
import "./movie.css";

function Movie({posterpath, name}) {
  //   return <p>{props.name + " " + props.posterpath}</p>;
  return (
    <div
      style={{
        width: "500px",
        height: "750px",
        border: "1px solid black",
        backgroundImage: `url(${posterpath})`,
        backgroundSize: "cover"
      }}
    ></div>
  );
}

export default Movie;
