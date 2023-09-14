// MovieDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import home from "../assets/Home.png";
import TYv from "../assets/TV Show.png";
import movieDetect from "../assets/Movie Projector.png";
import logout from "../assets/Logout.png";
import calendar from "../assets/Calendar.png";
import group50 from "../assets/Group 50.png";
import group51 from "../assets/Group 51.png";
import group52 from "../assets/Group 52.png";
import tv from "../assets/tv.png";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "42bb89ac979b58b57aaf5c989e017b35";

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <div className="full-page">
        <div className="leftSide">
          <div className="Left-Nav">
            <div className="TheSides">
               <span>
                <img src={tv} alt="" />
                <h2>MovieBox</h2>
              </span>
            </div>  
            <ul>
              <li>
                <a aria-label="Home" href="/">
                  <img src={home} alt="" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a aria-label="Home" href="/">
                  <img src={movieDetect} alt="" />
                  <span>Movie</span>
                </a>
              </li>
              <li>
                <a aria-label="Home" href="/">
                  <img src={TYv} alt="" />
                  <span>TV Series</span>
                </a>
              </li>
              <li>
                <a aria-label="Home" href="/">
                  <img src={calendar} alt="" />
                  <span>Upcoming</span>
                </a>
              </li>
              <li>
                <a aria-label="Home" href="/">
                  <img src={logout} alt="" />
                  <span>LogOut</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span>
        <div className="rightSide">
          <h2 data-testid="movie-title">{movie.title}</h2>
          <p className="details-para" data-testid="movie-release-date">
            Release Date (UTC): {movie.release_date}
          </p>
          <p className="details-para" data-testid="movie-runtime">
            Runtime (minutes): {movie.runtime}
          </p>
          <p className="details-para" data-testid="movie-overview">
            {movie.overview}
          </p>
        </div>
        </span>
      </div>
    </div>
  );
};

export default MovieDetails;
