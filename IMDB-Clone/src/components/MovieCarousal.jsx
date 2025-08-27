import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MovieCarousal({ title, movies, isLoading, type }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white px-4 mb-4">{title}</h2>
      {isLoading ? (
        <div className="flex gap-4 px-4 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-48 h-72 bg-gray-700 rounded-lg animated-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          className="px-4"
        >
          {movies?.results?.map((movie) => (
            <SwiperSlide
              key={movie.id}
              style={{ width: "192px" }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <Link to={`/${type}/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
                <p className="text-white text-sm font-semibold p-2 truncate">
                  {movie.title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
