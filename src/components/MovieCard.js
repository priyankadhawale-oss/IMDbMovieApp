import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Link to={`/movie/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </Link>
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}></Link>
    </div>
  </div>
);

export default MovieCard;
