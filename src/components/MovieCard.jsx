import React from "react";
import tempPic from "../assets/image_error_poster.png";
import { BASE_IMG_URL } from "../config/config";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  let mediaType;

  if (data.title) {
    mediaType = "movie";
  } else if (data.name) {
    mediaType = "tv";
  }

  return (
    <div
      className="w-[150px] min-w-[150px]"
      onClick={() => navigate(`${mediaType}/${data.id}`)}
    >
      <div>
        <img
          className="h-[calc(150px*1.5)] min-h-[calc(150px*1.5)] aspect-[2/3] rounded-lg hover:cursor-pointer"
          src={
            data.poster_path ? `${BASE_IMG_URL}${data.poster_path}` : tempPic
          }
          alt=""
        />
      </div>
      <div className="p-2">
        <h2 className="hover:cursor-pointer">{data.title ?? data.name}</h2>
        <p>{data.release_date ?? data.first_air_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
