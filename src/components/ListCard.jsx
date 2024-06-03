import tempPic from "../assets/image_error_poster.png";
import { BASE_IMG_URL } from "../config/config";
import { Link } from "react-router-dom";

const ListCard = ({ data, media, noDate }) => {

  return (
    <Link to={`/${media}/${data.id}`}
      className="min-w-[150px] h-full shadow rounded-lg hover:cursor-pointer"
    >
      <div>
        <img
          className="h-[calc(150px*1.5)] min-h-[calc(150px*1.5)] w-full aspect-[2/3] rounded-t-lg"
          src={
            data.poster_path ? `${BASE_IMG_URL}${data.poster_path}` : tempPic
          }
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold">{data.title ?? data.name}</h2>
        {!noDate && <p className="text-gray-300">
          {data.release_date ?? data.first_air_date}
        </p>}
      </div>
    </Link>
  );
};

export default ListCard;
