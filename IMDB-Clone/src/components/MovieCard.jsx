import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (!movie || !movie.id) {
    console.warn("Invalid movie object passed to MovieCard:", movie);
    return null; // don’t render anything if movie is invalid
  }

  return (
    <Link to={`/movies/${movie.id}`} className="block group">
      <div className="w-full h-72 overflow-hidden rounded bg-gray-800">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="mt-2 text-sm font-medium text-white group-hover:text-yellow-400 line-clamp-1">
        {movie.title}
      </h2>
    </Link>
  );
}
