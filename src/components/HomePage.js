import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../utills/api";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchPopularMovies(currentPage).then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, [currentPage]);

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="movie-container">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </Link>
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-rating">Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="pagination-button"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
