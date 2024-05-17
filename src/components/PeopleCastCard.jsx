import React from "react";
import { BASE_IMG_URL } from "../config";
import tempPic from "../assets/image_error_poster.png";

const PeopleCastCard = ({ data }) => {
  return (
    <div className="w-[150px] min-w-[150px]">
      <div>
        <img
          className="h-[calc(150px*1.5)] min-h-[calc(150px*1.5)] aspect-[2/3] rounded-lg"
          src={
            data.profile_path ? `${BASE_IMG_URL}${data.profile_path}` : tempPic
          }
          alt=""
        />
      </div>
      <div className="p-2">
        <h2>{data.name}</h2>
        <p>{data.character}</p>
      </div>
    </div>
  );
};

export default PeopleCastCard;
