import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../movieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

import "../style.scss";
import "swiper/css/navigation";

const UpComing = () => {
  const [movie, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApi("movie", "upcoming").then((data) => setMovies(data));
  }, []);
  return (
    <div className="movie-list">
      <div className="movie-list-top">
        <div className="movie-list-top-header">Up Coming Movies</div>
        <div
          className="movie-list-top-more"
          onClick={() => navigate("discover/movie/upcoming")}
        >
          View More
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation
        className="swiperNonBanner"
      >
        {movie.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} mediaType={"movie"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpComing;
