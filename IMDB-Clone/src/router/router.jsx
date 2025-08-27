import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SigninPage from "../Validation/SigninPage";
import SignupPage from "../Validation/SignupPage";
import AuthenticationPage from "../Validation/AuthenticationPage";

import MoviesList from "../pages/MoviesList";
import Home from "../pages/Home";
import Watchlist from "../pages/Watchlist";
import MovieDetails from "../pages/MovieDetails";
import SearchResults from "../pages/SearchResults";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SigninPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/authentication",
        element: <AuthenticationPage />,
      },
      {
        path: "/:type/:id",
        element: <MovieDetails />,
      },
      {
        path: "/:type",
        element: <MoviesList />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/search/:query",
        element: <SearchResults />,
      },
    ],
  },
]);
export default router;
