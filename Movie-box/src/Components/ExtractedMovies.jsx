// MovieGrid.js
import { useState, useEffect } from "react";
import axios from "axios";
import {TMDB_API_KEY} from "./Config";
import { Link } from 'react-router-dom';

const ExtractedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        console.log(response);
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
  
    fetchMovies();
  }, []);
  

  return (
    <div className="movie-grid">
    {movies.map((movie) => (
      <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card" data-testid="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
          data-testid="movie-poster"
        />
        <h3 className="movie-title" data-testid="movie-title">
          {movie.title}
        </h3>
        <p className="movie-release-date" data-testid="movie-release-date">
          Release Date: {movie.release_date}
        </p>
      </Link>
    ))}
  </div>
  );
};

export default ExtractedMovies;