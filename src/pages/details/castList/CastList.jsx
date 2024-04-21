import React, { useEffect, useState } from "react";
import { fetchCredits } from "../../../components/api/fetchApi";
import { useNavigate, useParams } from "react-router-dom";
import apiConfig from "../../../components/api/apiConfig";
import NoPoster from "../../../assets/no-poster.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const CastList = (props) => {
  const [casts, setCasts] = useState([]);
  const { mediaType } = useParams();
  const navigate = useNavigate();

  // console.log(casts);

  useEffect(() => {
    fetchCredits(mediaType, props.id).then((data) => setCasts(data.cast));
  }, [mediaType, props.id]);

  return (
    <div className="casts">
      <Swiper
        modules={[Navigation]}
        navigation
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {casts?.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="casts_item"
              onClick={() => navigate(`/person/${item.id}`)}
            >
              {item.profile_path ? (
                <div
                  className="casts_item_img"
                  style={{
                    backgroundImage: `url(${apiConfig.w500Image(
                      item.profile_path
                    )})`,
                  }}
                ></div>
              ) : (
                <div
                  className="casts_item_img"
                  style={{ backgroundImage: `url(${NoPoster})` }}
                ></div>
              )}

              <p className="casts_item_name">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;
