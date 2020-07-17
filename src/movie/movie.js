import React from "react";
import "./movie.css";

function Movie(props) {
  //   return <p>{props.name + " " + props.posterpath}</p>;
  return (
    <div
      style={{
        width: "500px",
        height: "750px",
        border: "1px solid black",
        backgroundImage: `url(${props.posterpath})`,
        backgroundSize: "cover"
      }}
    ></div>
  );
}

export default Movie;
