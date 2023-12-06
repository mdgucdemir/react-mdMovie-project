import React from "react";
import apiConfig from "../../../components/api/apiConfig";
import CastList from "../castList/CastList";
// import { Swiper, SwiperSlide } from "swiper/react";

const VideoDetail = ({ item }) => {
  return (
    <div className="detail-page">
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="movie-content">
            <div className="movie-content_poster">
              <div
                className="movie-content_poster_img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content_info">
              <h1 className="title">{item.title}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres_item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section_header">
                  <h2>Cast</h2>

                  <CastList id={item.id} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetail;
