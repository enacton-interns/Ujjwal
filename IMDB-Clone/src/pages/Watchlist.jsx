import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function WatchlistPage() {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-4">
          <h1 className="text-xl">
            You need to be logged in to view your watchlist.
          </h1>
          <button
            onClick={() => navigate("/signin")}
            className="bg-yellow-400 text-black px-6 py-2 rounded"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const watchlist = currentUser.watchlist || [];

  const handleRemove = (movieId) => {
    dispatch(removeFromWatchlist(movieId));
  };

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-3xl font-bold mb-8">Your Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className="text-gray-400">No movies in your watchlist yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Link to={`/popular/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-sm font-semibold truncate">
                  {movie.title}
                </h2>
                <button
                  onClick={() => handleRemove(movie.id)}
                  className="mt-2 text-xs text-red-400 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
