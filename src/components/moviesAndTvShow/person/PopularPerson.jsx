import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../movieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import "../style.scss";

const PopularPerson = () => {
  // Initial state olarak useState'i array olarak tanimlayabilirsin = []
  const [person, setPerson] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApi("person", "popular").then((data) => setPerson(data));
  }, []);

  // console.log(person);
  return (
    <div className="movie-list">
      <div className="movie-list-top">
        <div className="movie-list-top-header">Popular Person</div>
        <div
          className="movie-list-top-more"
          onClick={() => navigate("discover/person/popular")}
        >
          View More
        </div>
      </div>
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
        {/* person?.map kullanarak undefined olmasi durumunda kontrol saglayip cokmesi engelleyebilir */}
        {/* Daha fazla bilgi icin: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
        {person.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} mediaType={"person"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularPerson;
