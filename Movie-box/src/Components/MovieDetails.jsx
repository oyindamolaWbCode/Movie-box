
// MovieDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '42bb89ac979b58b57aaf5c989e017b35';
        
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p className="details-para" data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
      <p className="details-para" data-testid="movie-runtime">Runtime (minutes): {movie.runtime}</p>
      <p className="details-para" data-testid="movie-overview">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;

