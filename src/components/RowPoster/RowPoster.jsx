import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageURL } from "../../constant";
import "./RowPoster.css";

const RowPoster = ({ title, url, poster }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getUpcomingMovies() {
      const { data } = await axios.get(url);
      setMovies(data.results);
    }
    getUpcomingMovies();
  }, [url]);

  return (
    <>
      <div className="row">
        <h2 style={{ paddingLeft: "10px" }}>{title}</h2>
        <div className="posters">
          {movies.map((movie) => (
            <img
              key={movie && movie.title}
              className="poster"
              src={
                movie && poster
                  ? imageURL + movie.poster_path
                  : imageURL + movie.backdrop_path
              }
              alt="poster"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RowPoster;
