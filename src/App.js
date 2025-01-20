import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import TopRatedPage from "./components/TopRatedPage";
import UpcomingPage from "./components/UpcomingPage";
import MovieDetailPage from "./components/MovieDetailPage";
import SearchedPage from "./components/SearchedPage";
import "./styles/App.css";
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-rated" element={<TopRatedPage />} />
      <Route path="/upcoming" element={<UpcomingPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/search" element={<SearchedPage />} />
    </Routes>
  </Router>
);

export default App;
