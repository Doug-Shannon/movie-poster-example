import React, { useState } from "react";
// import { useTransition, animated } from "react-spring";
import "./movie.css";

function Movie({ posterpath, name, description }) {
  const [selected, setSelected] = useState(false);
  // const transitions = useTransition(selected, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });
  //   return <p>{props.name + " " + props.posterpath}</p>;

  return (
    <div
      onClick={(e) => {
        setSelected(!selected);
      }}
      className="poster"
      style={
        selected
          ? {}
          : {
              backgroundImage: `url(${posterpath})`,
              backgroundSize: "cover",
            }
      }
    >
      {selected ? (
        <div>
          <h1 className="title">{name}</h1>
          <div>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>
            <h1 className="title">{name}</h1>
            <div>
              <p>{description}</p>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )} */}
    </div>
  );
}

export default Movie;
