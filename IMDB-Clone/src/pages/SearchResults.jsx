import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { fetchSearchMovies } from "../api/tmdb";

export default function SearchResults() {
  const { query } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchSearchMovies(query),
    enabled: !!query,
  });

  return (
    <div className="container mx-auto px-4 py-20 text-white">
      <h1 className="text-2xl font-bold mb-6">Search results for "{query}"</h1>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-72 bg-gray-700 animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : data?.results?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="movie" />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No results found.</p>
      )}
    </div>
  );
}
