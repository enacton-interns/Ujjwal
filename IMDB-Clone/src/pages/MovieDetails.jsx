import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../api/tmdb";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../store/authSlice";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // Fetch movie data
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
  });

  const handleAddToWatchlist = () => {
    if (!currentUser) {
      alert("Please log in to add movies to your watchlist.");
      navigate("/signin");
      return;
    }

    dispatch(addToWatchlist(data));
    alert(`${data.title} added to your watchlist.`);
  };

  if (isLoading) {
    return (
      <div className="text-white p-6 animate-pulse">
        <div className="h-10 w-32 bg-gray-700 rounded mb-4" />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 h-96 bg-gray-800 rounded" />
          <div className="flex-1 space-y-4">
            <div className="h-6 w-2/3 bg-gray-700 rounded" />
            <div className="h-4 w-full bg-gray-700 rounded" />
            <div className="h-4 w-5/6 bg-gray-700 rounded" />
            <div className="h-10 w-48 bg-gray-600 rounded mt-6" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-red-500 p-6 text-lg">
        ❌ Failed to load movie details.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <button
        onClick={() => navigate(-1)}
        className="text-yellow-400 mb-4 cursor-pointer"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="w-full md:w-1/3 rounded shadow-lg"
        />

        <div className="md:flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-gray-300">{data.overview}</p>
          <p className="text-sm text-gray-400">
            🎬 Runtime: {data.runtime} min
            {" | "}
            🎭 Genres: {data.genres?.map((g) => g.name).join(", ")}
          </p>

          <button
            onClick={handleAddToWatchlist}
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded mt-4 cursor-pointer"
          >
            ➕ Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
