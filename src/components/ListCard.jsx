import React from "react";
import tempPic from "../assets/image_error_poster.png";
import { BASE_IMG_URL } from "../config";

const ListCard = ({ data }) => {
  return (
    <div className="w-[150px] min-w-[150px] shadow rounded-lg">
      <div>
        <img
          className="h-[calc(150px*1.5)] min-h-[calc(150px*1.5)] aspect-[2/3] rounded-lg"
          src={
            data.poster_path ? `${BASE_IMG_URL}${data.poster_path}` : tempPic
          }
          alt=""
        />
      </div>
      <div className="p-2">
        <h2>{data.title ?? data.name}</h2>
        <p>{data.release_date ?? data.first_air_date}</p>
      </div>
    </div>
  );
};

export default ListCard;
