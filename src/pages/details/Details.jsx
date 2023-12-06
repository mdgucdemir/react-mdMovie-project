import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../components/api/fetchApi";
import VideoDetail from "./videoDetail/VideoDetail";
import PersonDetail from "./personDetail/PersonDetail";
import "./details.scss";

const Details = () => {
  const { mediaType, id } = useParams();
  const [item, setItem] = useState(null);

  // console.log(item);
  // console.log(mediaType);

  useEffect(() => {
    fetchDetails(mediaType, id).then((data) => setItem(data));
  }, [mediaType, id]);

  return (
    <div className="detail-page">
      {mediaType === "person" ? (
        <PersonDetail item={item} />
      ) : (
        <VideoDetail item={item} />
      )}
    </div>
  );
};

export default Details;
