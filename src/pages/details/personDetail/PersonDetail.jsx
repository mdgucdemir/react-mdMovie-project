import React from "react";
import apiConfig from "../../../components/api/apiConfig";
import dayjs from "dayjs";
import NoPoster from "../../../assets/no-poster.png";

const PersonDetail = ({ item }) => {
  
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
              {item.profile_path ? (
                <div
                  className="movie-content_poster_img"
                  style={{
                    backgroundImage: `url(${apiConfig.originalImage(
                      item.profile_path
                    )})`,
                  }}
                ></div>
              ) : (
                <div
                  className="movie-content_poster_img"
                  style={{
                    backgroundImage: `url(${NoPoster})`,
                  }}
                ></div>
              )}
            </div>
            <div className="movie-content_info">
              <h1 className="title">{item.name}</h1>
              <p className="birthday">
                <span>Birthday</span>
                {item.birthday
                  ? ": " + dayjs(item.birthday).format("MMM D YYYY")
                  : ": Sorry, I have No Data"}
              </p>
              {item.deathday ? (
                <p className="deathday">
                  <span>Deathday</span>
                  {item.deathday
                    ? ": " + dayjs(item.deathday).format("MMM D YYYY")
                    : ": Sorry, I have No Data"}
                </p>
              ) : (
                <div></div>
              )}
              <p className="place-of-birth">
                <span>Nationality</span>
                {item.place_of_birth
                  ? ": " + item.place_of_birth
                  : ": Sorry, I have No Data"}
              </p>
              <p
                className="overview"
                dangerouslySetInnerHTML={{
                  __html: item.biography
                    ? item.biography.replace(/\n/g, "<br />")
                    : "Sorry, I have No Data",
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonDetail;
