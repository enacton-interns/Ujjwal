import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../api/tmdb";

import MovieCard from "../components/MovieCard";

export default function MoviesList() {
  const { type } = useParams();

  const queryFn =
    type === "popular"
      ? fetchPopularMovies
      : type === "toprated"
      ? fetchTopRatedMovies
      : fetchUpcomingMovies;

  const { data: movies, isLoading } = useQuery({
    queryKey: [type],
    queryFn,
  });

  return (
    <div className="container mx-auto bg-black text-white px-4 py-20">
      <h1 className="text-2xl sm:text-3xl font-bold capitalize mb-6">
        {type === "popular"
          ? "Popular Movies"
          : type === "toprated"
          ? "Top Rated Movies"
          : "Upcoming Movies"}
      </h1>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-72 bg-gray-700 animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies?.results?.filter(Boolean).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
