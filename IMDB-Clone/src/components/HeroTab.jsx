import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { fetchPlayingMovies } from "../api/tmdb";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function HeroTab() {
  const { data, isLoading } = useQuery({
    queryKey: ["playingMovies"],
    queryFn: fetchPlayingMovies,
  });

  if (isLoading) {
    return (
      <div className="w-full h-[60vh] bg-gray-900 flex items-center justify-center">
        <div className="w-[90%] h-[80%] bg-gray-700 rounded-lg animate-pulse shadow-lg"></div>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] "
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover transition object-top duration-300 ease-in-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-4 sm:p-10">
              <div className="text-white max-w-2xl space-y-2 sm:space-y-4">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow-md">
                  {movie.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 drop-shadow-sm line-clamp-4">
                  {movie.overview}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
