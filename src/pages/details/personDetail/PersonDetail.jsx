import React from "react";
import apiConfig from "../../../components/api/apiConfig";
import dayjs from "dayjs";

const PersonDetail = ({ item }) => {
  // console.log(item);
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
                    item.profile_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content_info">
              <h1 className="title">{item.name}</h1>
              <p className="birthday">
                <span>Birthday</span>
                {": " + dayjs(item.birthday).format("MMM D YYYY")}
              </p>
              {item.deathday ? (
                <p className="deathday">
                  <span>Deathday</span>
                  {": " + dayjs(item.deathday).format("MMM D YYYY")}
                </p>
              ) : (
                <div></div>
              )}
              <p className="place-of-birth">
                <span>Nationality</span>
                {": " + item.place_of_birth}
              </p>
              <p className="overview">{item.biography}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonDetail;
