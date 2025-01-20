import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchedMovies } from "../utills/api";
import "../styles/homepage.css"; // Reusing the same CSS styles for consistency
import { Link } from "react-router-dom";

const SearchedPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    setLoading(true);
    fetchSearchedMovies(query, currentPage).then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, [query, currentPage]);

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="movie-container">
      <h1>Search Results for "{query}"</h1>
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

export default SearchedPage;
