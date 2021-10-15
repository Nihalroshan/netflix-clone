import React, { useEffect, useState } from "react";
import { API_KEY, imageURL } from "../../constant";
import RowPoster from "../RowPoster/RowPoster";
import "./Banner.css";
import axios from "../../axios";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getPopularMovies() {
      const response = await axios.get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const random = Math.floor(Math.random() * 20);
      setMovie(response.data.results[random]);
    }

    getPopularMovies();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie && imageURL + movie.backdrop_path})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie && movie.title}</h1>
        <p className="description">{movie && movie.overview}</p>
        <div className="banner-buttons">
          <button
            className="banner-button"
            style={{
              color: "#111",
              backgroundColor: "rgba(255, 254, 254, 0.562)",
            }}
          >
            <i className="fas fa-play"></i> Play
          </button>
          <button className="banner-button">
            <i className="fas fa-plus fa-lg"></i> My List
          </button>
        </div>
      </div>
      <RowPoster
        title="Upcoming Movies"
        url={`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`}
      />
    </div>
  );
};

export default Banner;
