import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, fetchMovieCast } from "../utills/api"; // Import function to fetch movie details and cast
import "../styles/MovieDetails.css"; // Add a CSS file for styling

const MovieDetailPage = () => {
  const { id } = useParams(); // Get the movie ID from the route
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]); // State to hold the cast data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Fetch movie details
    fetchMovieDetail(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });

    // Fetch movie cast
    fetchMovieCast(id)
      .then((data) => {
        if (data && data.cast) {
          setCast(data.cast.slice(0, 10)); // Limit to top 10 cast members
        }
      })
      .catch((error) => {
        console.error("Error fetching movie cast:", error);
      });
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details">
      <div
        className="movie-info"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            movie.backdrop_path || ""
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          color: "white",
          width: "80%",
          height: "60vh",
          maxWidth: "100%",
          marginLeft: "100px",
          borderRadius: "10px",
        }}
      >
        <div className="movie-info-content">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path || ""}`}
            alt={movie.title || "Movie poster"}
            className="movie-poster"
          />
          <div className="movie-description">
            <h1 className="movie-title">
              {movie.title || "Title not available"}
            </h1>
            <p className="movie-rating">
              <strong>Rating: {movie.vote_average || "N/A"}</strong>
            </p>
            <p className="movie-release">
              <strong>Release Date:</strong> {movie.release_date || "N/A"}
            </p>
            <p className="movie-overview">
              <strong>Overview:</strong>{" "}
              {movie.overview || "No overview available."}
            </p>
          </div>
        </div>
      </div>

      <div className="movie-cast">
        <h1 style={{ color: "#555", fontWeight: "bold" }}>Cast</h1>
        <div className="cast-list">
          {cast.length > 0 ? (
            cast.map((member) => (
              <div className="cast-card" key={member.id}>
                <img
                  src={
                    member.profile_path
                      ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                      : "https://via.placeholder.com/150" // Placeholder image for missing profiles
                  }
                  alt={member.name || "Unknown"}
                  className="cast-photo"
                />
                <p className="cast-name" style={{ color: "#555" }}>
                  {member.name || "Unknown"}
                </p>
                <p className="cast-character">
                  {member.character ? `as ${member.character}` : ""}
                </p>
              </div>
            ))
          ) : (
            <p>No cast information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
