import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../movieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

import "../style.scss";
import "swiper/css/navigation";

const AiringTodayTv = () => {
  const [tvShows, setTvShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApi("tv", "airing_today").then((data) => setTvShows(data));
  }, []);

  return (
    <div className="movie-list">
      <div className="movie-list-top">
        <div className="movie-list-top-header">Airing Today Tv Shows</div>
        <div
          className="movie-list-top-more"
          onClick={() => navigate("discover/tv/airing_today")}
        >
          View More
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        className="swiperNonBanner"
      >
        {tvShows.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} mediaType={"tv"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AiringTodayTv;
