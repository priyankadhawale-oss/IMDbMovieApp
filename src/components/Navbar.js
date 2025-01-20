import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) navigate(`/search?query=${query}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">MoviePanel</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/top-rated">TopRated</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
      </ul>
      <form onSubmit={handleSearch} className="navbar-search">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
