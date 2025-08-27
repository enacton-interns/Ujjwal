import React from "react";
import HeroTab from "../components/HeroTab";
import {
  fetchUpcomingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../api/tmdb";
import { useQuery } from "@tanstack/react-query";
import MovieCarousal from "../components/MovieCarousal";
export default function Home() {
  const { data: popularMovies, isLoading: isPopularLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });
  const { data: upcomingMovies, isLoading: isUpcomingLoading } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpcomingMovies,
  });

  const { data: topRatedMovies, isLoading: isTopRatedLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  return (
    <div className=" w-full mx-auto">
      <HeroTab />
      <div className="container mx-auto px-4 py-20 flex flex-col gap-20 my-10 ">
        <MovieCarousal
          title={"Upcoming Movies"}
          movies={upcomingMovies}
          isLoading={isUpcomingLoading}
          type={"upcoming"}
        />
        <MovieCarousal
          title={"Popular Movies"}
          movies={popularMovies}
          isLoading={isPopularLoading}
          type={"popular"}
        />
        <MovieCarousal
          title={"Top Rated Movies"}
          movies={topRatedMovies}
          isLoading={isTopRatedLoading}
          type={"toprated"}
        />
      </div>
    </div>
  );
}
